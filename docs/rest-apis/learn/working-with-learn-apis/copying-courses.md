---
title: "Copying Courses"
id: copying-courses
categories: Learn Rest
published: "2023-09-19"
edited: "2023-09-19"
author: Mark Kauffman
---

<VersioningTracker frontMatter={frontMatter}/>

# Using Learn Public REST APIs to Copy Courses 
 
> Notes:  
> 
> * The Learn Course Copy APIs work the same for either Original or Ultra course experiences. 
> * Learn Public REST APIs are documented at https;//developer.anthology.com/portal/displayAPI/Learn 
> * Information on System Administrators is not generally available via Public REST APIs, thus it is a Best Practice for Learn Administrators who are teaching or taking courses be enrolled using a non-Admininistrator Role privileged user. 
 
## Topic
This document covers General API Use and Best Practices to meet use cases for using the Learn REST APIs to copy courses. 
 
We strongly recommended you follow the Best Practices outlined below. 

# General API Use 
Details follow below but in general, the workflow for copying a course consists of: 

1. POST to the course copy endpoint. 
2. Poll via GET to the Location task endpiont that was returned in the header of the course copy response. Wait for a response other than 200. This is so that when you attempt to update the copied course with step #3 that the copy has completed.
3. PATCH to update the copied course's externaId, name, description, dates, and any other values that are to be different for the copied course. Any of these values are optional to update, but the copied course won't look any different to the instructor as the copied course is an EXACT copy of the source course except for the courseId.

DO NOT POST to UPDATE THE COPIED COURSE UNTIL CERTAIN THE COPY IS COMPLETE VIA STEP #2 ABOVE.   

The below sections further elaborate on each of the above steps. 
 
## 1. POST to the course copy endpoint. 
`POST /learn/api/public/v2/courses/:courseId/copy` 
 
### Best Practices
1. Keep track of your copy requests and the Location header in the response from each. You will need the Location to monitor the status of the copy as the course copy will take time. It is not immediate.
 
### Example
`POST /learn/api/public/v2/courses/courseId:mbk-original-template/copy` 
Body: 
```json
{ 
  "targetCourse": {
    "courseId": "mbk-original-target2"
  },
  "copy": {
    "adaptiveReleaseRules": "true",
    "announcements": "true",
    "assessments": "true",
    "blogs": "true",
    "calendar": "true",
    "contacts": "true",
    "contentAlignments": "true",
    "contentAreas": "true",
    "discussions": "ForumsAndStarterPosts",
    "glossary": "true",
    "gradebook": "true",
    "groupSettings": "true",
    "journals": "true",
    "retentionRules": "true",
    "rubrics": "true",
    "settings": {
      "availability": "true",
      "bannerImage": "true",
      "duration": "true",
      "enrollmentOptions": "true",
      "guestAccess": "true",
      "languagePack": "true",
      "navigationSettings": "true",
      "observerAccess": "true"
    },
    "tasks": "true",
    "wikis": "true"
  }
}
```

will return all ‘{}’ and the response Location header might look like `/learn/api/public/v1/courses/_12_1/tasks/_127_1`. 

You may now proceed to step 2 and query the given tasks endpoint. 
 
## 2. Poll the Location tasks endpoint. 
`GET /learn/api/public/v1/courses/{courseId}/tasks/{taskId}` 

### Best Practices  
If task is complete this endpoint will return a 303 SEE OTHER with a Location header providing a URI to the GET Course endpoint. Statistical data shows that the average copy task duration is under a second. However, very large courses can take several minutes. Also important to note is that these background tasks can potentially be queued behind other system tasks therefore prolonging the time a task stays in the Queued status. We recommend that this endpoint be polled every 60 seconds while waiting for a Course copy to complete.
 
### Example
`GET /learn/api/public/v1/courses/_12_1/tasks/_127_1`
 

## 3. (Optional) PATCH to update the copied course 
`PATCH /learn/api/public/v3/courses/{courseId}`

### Example
`PATCH https://kauffman390071b2.ddns.net/learn/api/public/v2/courses/_12_1`
Body:
```json
{
  "externalId": "mbk-original-target2",
  "name": "mbk-original-target2",
  "description": "my copied course"
}
```
 
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
 
 
<AuthorBox frontMatter={frontMatter}/>