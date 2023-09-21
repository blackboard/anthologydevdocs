---
title: "Pulling Gradebook Data and Assessment Grades"
id: pulling-gradebook-data-and-assessment-grades
categories: Learn Rest
published: "2023-09-11"
edited: "2023-09-14"
author: Mark O'Neil
---

<VersioningTracker frontMatter={frontMatter}/>

# Using Learn Public REST APIs to Pull Gradebook Data and Assessment Grades 
 
> Notes:  
> 
> * All Learn Gradebook APIs work the same for either Original or Ultra course experiences. 
> * Learn Public REST APIs are documented at https;//developer.anthology.com/portal/displayAPI/Learn 
> * Information on System Administrators is not generally available via Public REST APIs, thus it is a Best Practice for Learn Administrators who are teaching or taking courses be enrolled using a non-Admininistrator Role privileged user. 
 
## Topic
This document covers General API Use and Best Practices to meet use cases for using the Learn REST APIs for Gradebook and Assessment grades. Specifically pulling data from Learn, though in general setting data follows similar patterns.  
 
In both cases it is strongly recommended to follow the Best Practices outlined below. 

# General API Use 
Details follow below but in general, the workflow for accessing and processing course grades consists of: 

1. Get a list of courses from which you wish to pull grades. 
2. Get a list of course memberships. 
3. Get the gradebook columns of interest. 
   
	1. if desired get list of course Gradebook Categories and 
	2. map column to category. 
   
4. Get the column grades 
Process grades taking note of Parent/Child relationships if present. 
 
The below sections further elaborate on each of the above steps. 
 
## 1. Get Target Courses 
`GET /learn/api/public/v3/courses` 
 
### Best Practices
1. Limit the number of courses in your list of target courses via our search parameters.  
E.g.: `?created=2023-09-07T21:17:40.626Z&createdCompare=greaterOrEqual` or  
`?availability.available=Yes` 

2. Use Fields parameter to limit the data per course in your list to that which is needed. E.g.: `?...&fields=”id, created, availability.available, hasChildren”` 
 
### Example
`GET /learn/api/public/v3/courses?availability.available=Yes&fields=”id, created, availability.available, hasChildren”` will return all ‘active courses’ and the results will have only the `id`, `created date`, `availability.available` (which will always be yes in this case due to the availability search), and whether the course `hasChildren`. 

You may then programmatically remove courses based on the date created if out of scope. 
 
To get courses for a specific year you may use  
`?created=2022-08-07T21:17:40.626Z&createdCompare=greaterOrEqual` which will return all courses created after August 7, 2022 
OR 
You may search using a specific `dataSourceId. ?dataSourceId=_123_4` 

Note that the `dataSourceId` may optionally be the data source's externalId using the syntax `externalId:Courses-Year-2023-2024`. E.g.: `?dataSourceId= externalId:Courses-Year-2023-2024` 
 
You may also further reduce the target set by removing courses that are disabled or unavailable based on `availability.available`.  
 
In all cases the `hasChildren` element may be significant for correctly aligning grade information with SIS systems pending your use case. 
  
NOTE: Cache this data because in the queries below you will iterate over the results from your courses request and use each course item’s id in place of `{courseId}` (with one exception which will be called out). 
 
## 2. Get Target Course Memberships 
`GET /learn/api/public/v1/courses/{courseId}/users 
` 

### Best Practices  
1. Do not use the above to test for a specific user, use to get an updated list of all users in the course. For the specific user use case use:  
`GET /learn/api/public/v1/courses/{courseId}/users/{userId}` 
 
### Example
To optimize the number of requests used we will pull the course memberships along with a limited user data set using the `expand` and `fields` parameters: 

`GET /learn/api/public/v1/courses/{courseId}/users?expand=users&fields=”id, user.id, childCourseId” `
 
We use `fields` here because we want some specific information from our memberships so that we can ensure we process the grades correctly and because the user data is rather large and, in this case, mostly not pertinent to our needs. Notably we only need the `userId` to link the grade back to the correct membership `childCourseId` if present. 
 
NOTE: Cache this data because it will be used in processing the retrieved grades. 
 
## 3. Get Gradebook Columns 
`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns `

You may use the `fields` parameter to return specific elements e.g.: `?fields=”id, externalId, name, displayName, gradebookCategoryId, score.possible, grading.due, availability.available”`  

Where:
 
1. id == the columnId, 
1. externalId == as referenced by external systems, 
1. externalGrade == whether the column is an external grade 
1. name or displayName (original only) == Title, 
1. score.possible == Points Possible, 
1. grading.due == Due Date, 
1. gradebookCategoryId == Gradebook Category id (used to lookup Category details), 
1. availability.available == whether the column is visible to students. 
 
E.g. using the above request: 

```json
{ 
  "results": [ 
    { 
      "id": "string", 
      "externalId": "string", 
      "name": "string", 
      "displayName": "string", 
      "externalGrade": true, 
      "created": "2023-09-08T15:35:05.817Z", 
      "score": { 
        "possible": 0 
      }, 
      "availability": { 
        "available": "Yes" 
      }, 
      "grading": { 
          "due": "2023-09-08T15:35:05.817Z", 
      }, 
      "gradebookCategoryId": "string", 
    } 
  ], 
  ... 
```
 
You may further reduce whether a column should be included in the target set based on its availability, due date, or whether there are any lastChanged results (see Best Practices). 
 
## 4. (optional) Get Course Gradebook Categories 
To work with gradebook categories, you must get the list of categories used in the course and then map the gradebookCategoryId on gradebook column results back to that list as shown below. 
 
Aligning gradebook categories with assessments (columns) is a four-step process: 

4.1 `GET /learn/api/public/v1/courses/{courseId}/gradebook/categories `
 
```json
{ 
  "results": [ 
    { 
      "id": "string", 
      "title": "string" 
    } 
  ], 
  ... 
```
 
Then you may map an assessment (gradebook column) to a category by: 
 
Getting the column or columns (which has already been done in the above step 3): 
4.2 `GET /learn/api/public/v2/courses/{courseId}/gradebook/columns?fields=”id, gradebookCategoryId” `
*(this is recommended)* 

or 

`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}? fields=”id, gradebookCategoryId” `
 
and inspecting the results: 

```json
{ 
  "results": [ 
   { 
       "id": "string", 
       ... 
       "gradebookCategoryId": "string",    
       ... 
    } 
  ], 
  ... 
```

Finally, for the category details, you must map `gradebookCategoryId` back to an `id` in the category results obtained in step 4.1 above. 
 
Now you know to which gradebook category a column is associated and may add this detail to your integration logic. 
 
## 5. Get Column (Assessment) Grades 
PLEASE: Read the Best Practices section on Gradebook API Efficiencies, noting specifically identifying whether a column requires posting of grades or not. 
 
Grades are stored at the course level on a per assessment (column basis) so you access them by getting the course columns and then by getting the grades on the column(s) of interest.  
 
`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users` 

This returns all the grades ready on this column for all the users in the course: 

```json
{ 
  "results": [ 
    { 
      "userId": "string", 
      "columnId": "string", 
      "status": "Graded", 
      "displayGrade": { 
        "scaleType": "Percent", 
        "score": 0, 
        "possible": 0, 
        "text": "string" 
      }, 
      "text": "string", 
      "score": 0, 
      "overridden": "2023-09-07T20:24:04.778Z", 
      "notes": "string", 
      "feedback": "string", 
      "exempt": true, 
      "corrupt": true, 
      "gradeNotationId": "string", 
      "changeIndex": 0 
    } 
  ], 
  "paging": { 
    "nextPage": "string" 
  } 
} 
```
 
Note: By default, membership results *do not include disabled memberships*. If those are of interest, then you must use the `includeDisabledMemberships=true` parameter. 
 
Once you have acquired the grades for the column your application may then, based on the results, take appropriate action.   
 
### Parent/Child Courses and Grades 
Details on Parent Child course relationships and how they work may be found here: [Merge and Separate Courses](https://help.blackboard.com/Learn/Administrator/SaaS/Courses/Manage_Courses/Merge_and_Separate_Courses)
 
All grades are presented at the parent course view but are collected on the child course in which the student is enrolled, thus when pulling grades if the course has childred, you likely (based on your use case) must disambiguate the grade from the Parent `courseId` to the Child `courseId` when processing to store it against the correct child course identifier. *Failure to do so may push the grade to the wrong course in your records system.*
 
## 6. Process Grades 
Process grade information considering whether the user is a child course member. 
 
Check whether the Course consists of a Parent/Child relationship using the above requested course information. If the course `hasChildren` then you must use the `childCourseId` presented on the above membership record for the user to correctly handle the setting of the `courseId` for the grade. 
 
Thus if `”hasChildren”:false` you will use the `courseId` as used for accessing the grades.  
If `”hasChildren”:true` you will use the membership information gotten above to find the *child* courseId by the presence of the `childCourseId` element. E.g.: 

```json
{ 
  "results": [ 
    { 
      "id": "string", 
      "userId": "string", 
      "user": { 
        "id": "string", 
     . . . 
      "courseId": "string", 
      "childCourseId": "string", 
      . . . 
```

If membership has `childCourseId` then that user is a member of a child course, and this is the id which should be used for processing *not the parent courseId as returned in courseId*.
 
You now may handle the remaining processing workflow for this user’s assignment grade. 
 
## Calulating API Use 
Using the above we can calculate API usage. Let’s keep the math simple by assuming we have 
10 courses, 10 columns per course, 10 students per course and every time we check there are grades to pull for every column*: 

1. 1 to get all Courses (nCourses = 10) 
2. 3 requests per course to get all Courses Memberships and User data, Gradebook Categories, and Gradebook Columns  
3. Sum of gradebook column counts *2 = nColumns@two requests/column = 200 (note if not using Categories this would be nColumns).
 
The number of requests to access all the grades is calculable via: 

Total Requests = 1+(nCourses*3)+(nColumns) or 1=(10*3)+(100) for a total of 231 requests each time you pull all the grades per the above example. 
 
*This would be the largest requests needed, but pulling all the grades all the time is rarely the case – as in many cases columns may not have any grades posted, it may be past due and grades already collected, or it may not have been released or graded at all. In each of these cases the number of requests has dropped. Always try to logically bound your requests – don’t make requests “just because you can”. 
 
# Best Practices 

## General Best Practices  
* Learn System Administrators should be enrolled in courses only using a non-Admin enabled user. 
	* System Administrator information is generally only available to 3LO Administrator requests. 
 
* Always monitor your API usage using the x-header information returned on non-oauth requests 
	* Details on rate_limits and x-headers are available [here](https://docs.anthology.com/docs/developer-portal/production-groups-rest-api-and-site-registration-limits#rest-api-calls-limit). 
 
* Not all data operations are best done JIT. 
Some operations, such as backfilling data warehouses or refreshing caches are best done during off-peak Learn hours. 
  * JIT calling or repeatedly calling for the same "static" data is inefficient. 
  * Checking whether a student is still in a course or getting their course grades are reasonable JIT activities as that is data that may change between now and their last access. 
 
* Cache infrequently changed or “static” data and refresh periodically. 
	* This reduces repetitive calls.  
	* This reduces integration performance impact. 
	* Don’t JIT retrieve ALL Courses for example as that data changes infrequently. Instead do this once and then periodically retrieve course data created or modified since you last request. 
 
* Always "optimize" your requests.
	* reduce your “search” criteria to as small a set of data as possible. 
		* This limits the number of pages of returned data set. 
		* E.g. use `?dataSourceId=` to reduce your search to objects created using a specific DSK and follow caching practices. 
	* Use the fields parameter to reduce the returned data set to only data points you require. 
		* This limits the data transmitted and system load 
 
* Always try to logically bound your requests or before acting on request results 
	* Check if dates are within bounds 
	* Check if attempts exist of if items are graded 
	* Check availability 
 
 
## Gradebook API Efficiencies 
Pulling grades as can be seen by the above Calculating API Usage section can be costly from a rate limit perspective. You can limit the number of requests by targeting specific courses and columns, and pulling grades only when there are new grade changes on existing columns. Meeting this efficiency requires caching of previous request results. You will always have to establish a baseline which will require iterating across all courses, after which your total requests for maintaining your data will be less. 
 
Reducing the number of targets is important with all API requests, but even more so with Gradebook requests – this is due to the potential for a large volume of requests. Target reduction may be done by dropping gradebook columns based on due date information:

* don’t pull data on columns that are well past the due or graded window, as it is unlikely those grades will have changed.
* don’t pull data on columns that are not yet due – pull data only on columns that are within a due/gradable window based on your understanding of your use case. 
 
### changeIndex and lastChanged as Grade change indicators 
The `changeIndex` element for user grades is contained in the result set from: 

`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users` 

and supplies an indicator of whether the grade presented for a specific user has changed. 
 
`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/lastChanged `
 
Supplies the highest index indicator of whether the grades in a column have changed and the information for that grade. Note that you should not assume this is the only grade that changed – only that there has been a change. 

> **Important Note**: Columns of type "Calculated" will always return a changeIndex of zero and an empty lastChanged index. Therefore it is not useful to check for these on a calculated column. 
> See GET column results for the column type:
> "Attempt", "Calculated", or "Manual"  
> 
> ```json
> ...
> "grading": {
>   "type": "Calculated",
> ...
> ```
> 
> and when a column is of `"type": "Calculated"` you should process that column's grades as if they had all changed.
 
If you cache your first `changeIndex` value when requesting column grades, then on future grading cycles, you call `lastChanged` and only pull grades if your cached value is less than the most recent `lastChanged` value you will find you save a substantial number of requests and also reduce system load. 
 
### Example 
When a course grade book column is created it will have no change index – calling the lastChanged endpoint on that new column will return an empty result. 
 
After a while when you check if any grades have been submitted on that column you may still get back an empty result.  
 
But, if you get back something similar to this: 

```
{
  "userId":"_28626_1", 
  "columnId":"_86244_1", 
  "status":"Graded", 
  "displayGrade":{
    "scaleType":"Score", 
    "score":3.33333,
    "possible":10.000000000000000
  }, 
  "exempt":false, 
  "changeIndex":7904733} 
}
```
 
You would cache the changeIndex of `7904733` and process the grades on that column using:

`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users`

Then later when you want to check grades again, first make a `lastChanged` request on the column – if it comes back the same as your cached value then just skip to the next target column. If it is higher, then cache the new value and fetch the column grades. Note that each grade will have a `changedIndex` – you may further perfect your application to act only on user records which have a differing per column per user `changedIndex` value from your cache. 
 
Remember, in the event there is a new `changedIndex` returned by `lastChanged` there may be other grade changes; the `lastChanged` index result reflects the most recent change and you should inspect the whole column as shown above.

<AuthorBox frontMatter={frontMatter}/>