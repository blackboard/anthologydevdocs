---
title: "REST API Best Practices"
id: rest-api-best-practices
sidebar_position: 2
published: "2023-10-11"
edited: "2023-10-11"
author: Davey Herrera, Mark O'Neil
---

## General Best Practices

Pay attention to the following to avoid failure points as a developer working with REST APIs:

- Learn System Administrators should be enrolled in courses only using a non-Admin enabled user.

  - System Administrator information is generally only available to 3LO Administrator requests.

- Always monitor your API usage using the x-header information returned on non-oauth requests

  - Details on rate_limits and x-headers are available [here](https://docs.anthology.com/docs/developer-portal/production-groups-rest-api-and-site-registration-limits#rest-api-calls-limit).

- Not all data operations are best done Just-In-Time (JIT).
  Some operations, such as backfilling data warehouses or refreshing caches are best done during off-peak Learn hours.

  - JIT calling or repeatedly calling for the same "static" data is inefficient.
  - Effective JIT activities include checking whether a student is still in a course or getting their course grades. In these cases, data that may change.

- Cache infrequently changed or “static” data and refresh periodically.

  - This reduces repetitive calls.
  - This reduces integration performance impact.
  - Don’t JIT retrieve ALL Courses for example as that data changes infrequently. Instead do this once and then periodically retrieve course data created or modified since you last request.

- Always "optimize" your requests.
  - Reduce your “search” criteria to as small a set of data as possible.
    - This limits the number of pages of returned data set.
    - E.g. use `?dataSourceId=` to limit your search to objects created using a specific DSK and follow caching practices.
  - Use the fields parameter to reduce the returned data set to only data points you require.
    - This limits the data transmitted and system load

* Always try to logically bound your requests. Or, before acting on request results, check:
  - if dates are within bounds
  - if attempts exist of if items are graded
  - availability

- Do not use Collection Gets to test for a specific object.
  - E.g.: don't use `GET /learn/api/public/v1/courses/{courseId}/users` to get all the course memberships to test if a student is enrolled.
  - Instead use: `GET /learn/api/public/v1/courses/{courseId}/users/{userId}` and branch your code based on the result.

## Best Practices per Product and API

| Learn                                                                 |
| --------------------------------------------------------------------- |
| \* [Calendar](./hands-on/calendar-api.md#calendar-api-best-practices) |
| \* [Gradebook](./hands-on/gradebook.md#gradebook-api-best-practices)  |
