---
title: "REST API Best Practices"
id: rest-api-best-practices
sidebar_position: 2
published: "2023-10-11"
edited: "2023-10-11"
author: Davey Herrera, Mark O'Neil
---

<VersioningTracker frontMatter={frontMatter}/>

## General Best Practices  
* Learn System Administrators should be enrolled in courses only using a non-Admin enabled user. 
	* System Administrator information is generally only available to 3LO Administrator requests. 
 
* Always monitor your API usage using the x-header information returned on non-oauth requests 
	* Details on rate_limits and x-headers are available [here](https://docs.anthology.com/docs/developer-portal/production-groups-rest-api-and-site-registration-limits#rest-api-calls-limit). 
 
* Not all data operations are best done Just-In-Time (JIT). 
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
 
* Always try to logically bound your requests or before acting on request results: 
	* Check if dates are within bounds 
	* Check if attempts exist of if items are graded 
	* Check availability 

* Do not use Collection Gets to test for a specific object.
  
  E.g.: don't use `GET /learn/api/public/v1/courses/{courseId}/users` to get all the course memberships to test if a student is enrolled. 
  
  Instead use: `GET /learn/api/public/v1/courses/{courseId}/users/{userId}` and branch your code based on the result.
 
## Best Practices per Product and API
| Learn |
|-------|
| * [Calendar](./learn/working-with-learn-apis/using-calendar-api.md#calendar-api-best-practices) | 
| * [Gradebook](./learn/working-with-learn-apis/pulling-grades.md#gradebook-api-best-practices) |


<AuthorBox frontMatter={frontMatter}/>