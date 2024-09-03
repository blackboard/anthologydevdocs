---
title: "Working with Calendar APIs"
id: calendar-apis
categories: Learn REST Working-with APIs Calendar
published: "2022-10-03"
edited: "2023-10-20"
author: Davey Herrera, Mark O'Neil
---

> Tested with Blackboard Learn version 3900.48.0
>
> Note: non-3LO capabilities available in Blackboard Learn version 3900.78.0

## Topic

Learn provides an internal calendar system for Institutional, Course, and Personal calendar items. Learn Public REST APIs for this calendar system allow external integrations to manage Institutional and Course Calendars. For Personal calendars use of three-legged-oauth (3LO) is required.

Notes:

- All Learn Calendar APIs work the same for either Original or Ultra course experiences.

- Learn Public REST APIs are documented at https://developer.anthology.com/portal/displayAPI/Learn

- All Calendar APIs are accessible based on the integration Privileges whether using 3LO or basic OAuth 2.0.

This document covers General API Use and Best Practices to meet use cases for using the Learn REST APIs for the Learn Calendar.

It is strongly recommended to follow the Best Practices outlined below.

# General API Use

Details follow below but in general, the workflow for accessing and processing calendar items is best broken down by calendar type and desired action – Create, Read, Update, or Delete calendarItems.

Mapping a calendar Item to the API payload
This is an example of how a Course schedule item looks like in the GUI and in the payload when calling it using:
GET /learn/api/public/v1/calendars/items?courseId=\_905_1

## General Usage Notes for all endpoints

We are not able to create, update or delete Calendars BUT We can create new calendarItems on those calendars.

Please keep in mind that:

- All 3LO users can view their own institutional items in calendar.
- All 3LO users can view their own personal items in calendar.
- Non-3LO applications can view all calendarTypes and calendarItems except for the Personal Calendar.
- If SINCE and UNTIL are not provided, the endpoint will default to the upcoming two weeks timeframe from NOW.
- If only SINCE is provided, this endpoint will default the UNTIL parameter two weeks after SINCE.
- If only UNTIL is provided the endpoint will default the SINCE parameter two weeks prior to UNTIL.
- Maximum timespan between SINCE and UNTIL is 16 weeks.
- The course calendar must be enabled for the course GradebookColumn associate with OfficeHours.
- If OfficeHours are created for a course calendar (calendarId == a course_id).
- The course calendar must be enabled for course calendar items associated with GradebookColumn.
- CalendarItems of type GradebookColumn are a representation of a specific gradable item and there read-only. Modifications to GradebookColumn items performed via the GradebokColumn endpoints will be reflected in the CalentarItems endoints.
- If you want to use the `columnIds` from Gradebook Column as a calendar Item id, you can get those from `/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}`
- _You cannot read/create calendar items when there is no calendar._

### Institutional

#### Create

1. Call the create endpoint specifying the Institutional Calendar Type.

#### Read, Update, Delete

1. **Read**: Call the read endpoint specifying the Institutional Calendar Item Type.
2. **Update**: Call the patch endpoint specifying the Institutional Calendar Item Type and the calendar item Id you wish to update.
3. **Delete**: Call the delete endpoint specifying the Institutional Calendar Item Type and the calendar item Id you wish to delete.

### Course

#### Create

If using 3LO and using calendarItems of type OfficeHours, those will be assigned to the current user. Non-3LO created items may only be managed by the integration.

##### Course Calendar Items

- The specified courseId must not be for an organization.

##### GradebookColumn Calendar Items

- GradebookColumn items must be created using the Gradebook API endpoint: `POST /learn/api/public/v2/courses/{courseId}/gradebook/columns`

##### OfficeHours Calendar Items

1. Get the Id(s) of course(s) for which you need to manage the calendar(s).
2. Call the create endpoint specifying the Course Calendar Item Type and the courseId of the course for which you wish to create the calendar item.

#### Read, Update, Delete

1. **Read**:
   a. Call the read endpoint specifying the Course Calendar Item Type and the courseId of the course for which you want the calendarItems (returns a collection of calendarItems).
   b. Call the read {calendarItemId} endpoint specifying the Course Calendar Item Type and the courseId of the course for which you want the calendarItem (returns a single of calendarItem).
2. **Update**: Call the patch endpoint specifying the Course Calendar Item Type and the calendar item Id you wish to update.
3. **Delete**: Call the delete endpoint specifying the Course Calendar Item Type and the calendar item Id you wish to delete.

### Personal

**_Only 3LO applications may create Personal calendarItems._**

Personal calendars are personal and as such we do not offer Public APIs for external management of Personal calendar Items. If your use case calls for providing individuals with calendar items – e.g. a meeting scheduler – then you should utilize email and the ICS calendar format\* for providing individuals with calendar data. The individual may then add the item to their calendar of choice, optionally sharing their external calendar with their Learn calendar.

- https://www.ietf.org/rfc/rfc2445.txt; https://icalendar.org/RFC-Specifications/iCalendar-RFC-5545/

- iCalendar Libraries
  - Python: https://pypi.org/project/icalendar/
  - Javascript: https://www.npmjs.com/package/ical-generator
  - Java: https://www.ical4j.org
  - C#: https://www.nuget.org/packages/Ical.Net/

The below sections further elaborate on each of the above steps.

## General Use Examples

The differentiator between using any calendar is to replace the `calendarType` with your target calendar. Supported calendarTypes are:

- Course
- GradebookColumn **_(READ ONLY)_**
- Institution
- OfficeHours
- Personal **_(only available via 3LO)_**

### CREATE a calendarItem

`POST /learn/api/public/v1/calendars/items`
requires a payload with calendarItem settings

#### _Create Example_

`POST /learn/api/public/v1/calendars/items`

```json
{
  "type": "Course",
  "calendarId": "string",
  "title": "string",
  "description": "string",
  "location": "string",
  "start": "2022-09-29T20:30:04.346Z",
  "end": "2022-09-29T20:30:04.346Z",
  "disableResizing": true,
  "recurrence": {
    "count": 0,
    "frequency": "Monthly",
    "interval": 0,
    "monthRepeatDay": 0,
    "monthPosition": 0,
    "originalStart": "2022-09-29T20:30:04.346Z",
    "originalEnd": "2022-09-29T20:30:04.346Z",
    "repeatBroken": true,
    "repeatDay": "Sunday",
    "until": "2022-09-29T20:30:04.346Z",
    "weekDays": ["Sunday"]
  }
}
```

#### READ calendarItems

(For a course with an id of `_12594_1`)

`GET /learn/api/public/v1/calendars/items`

#### _Read Examples_

**Get all calendarItems for a given course (including Course, OfficeHours, GradebookColumn types):**

`GET /learn/api/public/v1/calendars/items?since=2023-10-15T00:00:00.000Z&until=2023-11-15T00:00:00.000Z&courseId=_12594_1`

Results:

```json
{
  "results": [
    {
      "id": "_91571_1",
      "type": "OfficeHours",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Office Hours - Mark O'Neil",
      "description": "Use the signup sheet on my door for office hours.",
      "start": "2023-10-25T19:00:00.000Z",
      "end": "2023-10-25T19:30:00.000Z",
      "modified": "2023-10-10T19:07:39.334Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-25T19:00:00.000Z",
        "originalEnd": "2023-10-25T19:30:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Wednesday"]
      }
    },
    {
      "id": "_91572_1",
      "type": "OfficeHours",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Office Hours - Mark O'Neil",
      "description": "Use the signup sheet on my door for office hours.",
      "start": "2023-11-01T19:00:00.000Z",
      "end": "2023-11-01T19:30:00.000Z",
      "modified": "2023-10-10T19:07:39.353Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-25T19:00:00.000Z",
        "originalEnd": "2023-10-25T19:30:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Wednesday"]
      }
    },
    {
      "id": "_91573_1",
      "type": "OfficeHours",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Office Hours - Mark O'Neil",
      "description": "Use the signup sheet on my door for office hours.",
      "start": "2023-11-08T20:00:00.000Z",
      "end": "2023-11-08T20:30:00.000Z",
      "modified": "2023-10-10T19:07:39.382Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-25T19:00:00.000Z",
        "originalEnd": "2023-10-25T19:30:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Wednesday"]
      }
    },
    {
      "id": "_91583_1",
      "type": "Course",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Calendar Demo: My Calendar Course",
      "start": "2023-10-20T20:00:00.000Z",
      "end": "2023-10-20T21:00:00.000Z",
      "modified": "2023-10-10T19:08:12.224Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-06T20:00:00.000Z",
        "originalEnd": "2023-10-06T21:00:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Friday"]
      }
    },
    {
      "id": "_91584_1",
      "type": "Course",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Calendar Demo: My Calendar Course",
      "start": "2023-10-27T20:00:00.000Z",
      "end": "2023-10-27T21:00:00.000Z",
      "modified": "2023-10-10T19:08:12.230Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-06T20:00:00.000Z",
        "originalEnd": "2023-10-06T21:00:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Friday"]
      }
    },
    {
      "id": "_91585_1",
      "type": "Course",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Calendar Demo: My Calendar Course",
      "start": "2023-11-03T20:00:00.000Z",
      "end": "2023-11-03T21:00:00.000Z",
      "modified": "2023-10-10T19:08:12.238Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-06T20:00:00.000Z",
        "originalEnd": "2023-10-06T21:00:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Friday"]
      }
    },
    {
      "id": "_91586_1",
      "type": "Course",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Calendar Demo: My Calendar Course",
      "start": "2023-11-10T21:00:00.000Z",
      "end": "2023-11-10T22:00:00.000Z",
      "modified": "2023-10-10T19:08:12.247Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-06T20:00:00.000Z",
        "originalEnd": "2023-10-06T21:00:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Friday"]
      }
    },
    {
      "id": "_120127_1",
      "type": "GradebookColumn",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Sample Assignment [rubric] (Learning Module)",
      "start": "2023-10-31T04:00:00.000Z",
      "end": "2023-10-31T04:00:00.000Z",
      "modified": null,
      "color": "#670033",
      "disableResizing": true,
      "createdByUserId": null,
      "dynamicCalendarItemProps": {
        "attemptable": true,
        "categoryId": "_172683_1",
        "dateRangeLimited": false,
        "eventType": "Test",
        "gradable": true
      }
    },
    {
      "id": "_120129_1",
      "type": "GradebookColumn",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Test (Learning Module)",
      "start": "2023-10-31T04:00:00.000Z",
      "end": "2023-10-31T04:00:00.000Z",
      "modified": null,
      "color": "#670033",
      "disableResizing": true,
      "createdByUserId": null,
      "dynamicCalendarItemProps": {
        "attemptable": true,
        "categoryId": "_172685_1",
        "dateRangeLimited": false,
        "eventType": "Test",
        "gradable": true
      }
    }
  ]
}
```

**Get all OfficeHours calendarItems for a course:**

`GET /learn/api/public/v1/calendars/items?since=2023-10-15T00:00:00.000Z&until=2023-11-15T00:00:00.000Z&courseId=_12594_1 &type=OfficeHours`

Results:

```json
{
  "results": [
    {
      "id": "_91571_1",
      "type": "OfficeHours",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Office Hours - Mark O'Neil",
      "description": "Use the signup sheet on my door for office hours.",
      "start": "2023-10-25T19:00:00.000Z",
      "end": "2023-10-25T19:30:00.000Z",
      "modified": "2023-10-10T19:07:39.334Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-25T19:00:00.000Z",
        "originalEnd": "2023-10-25T19:30:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Wednesday"]
      }
    },
    {
      "id": "_91572_1",
      "type": "OfficeHours",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Office Hours - Mark O'Neil",
      "description": "Use the signup sheet on my door for office hours.",
      "start": "2023-11-01T19:00:00.000Z",
      "end": "2023-11-01T19:30:00.000Z",
      "modified": "2023-10-10T19:07:39.353Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-25T19:00:00.000Z",
        "originalEnd": "2023-10-25T19:30:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Wednesday"]
      }
    },
    {
      "id": "_91573_1",
      "type": "OfficeHours",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Office Hours - Mark O'Neil",
      "description": "Use the signup sheet on my door for office hours.",
      "start": "2023-11-08T20:00:00.000Z",
      "end": "2023-11-08T20:30:00.000Z",
      "modified": "2023-10-10T19:07:39.382Z",
      "color": "#670033",
      "disableResizing": false,
      "createdByUserId": "_1354_1",
      "recurrence": {
        "count": 10,
        "frequency": "Weekly",
        "interval": 1,
        "originalStart": "2023-10-25T19:00:00.000Z",
        "originalEnd": "2023-10-25T19:30:00.000Z",
        "repeatBroken": false,
        "weekDays": ["Wednesday"]
      }
    }
  ]
}
```

**Get all gradebook columns due within the given timeframe:**

`GET /learn/api/public/v1/calendars/items?since=2023-10-15T00:00:00.000Z&until=2023-11-15T00:00:00.000Z&courseId=_12594_1&type=GradebookColumn`

Results:

```json
{
  "results": [
    {
      "id": "_120127_1",
      "type": "GradebookColumn",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Sample Assignment [rubric] (Learning Module)",
      "start": "2023-10-31T04:00:00.000Z",
      "end": "2023-10-31T04:00:00.000Z",
      "modified": null,
      "color": "#670033",
      "disableResizing": true,
      "createdByUserId": null,
      "dynamicCalendarItemProps": {
        "attemptable": true,
        "categoryId": "_172683_1",
        "dateRangeLimited": false,
        "eventType": "Test",
        "gradable": true
      }
    },
    {
      "id": "_120129_1",
      "type": "GradebookColumn",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Test (Learning Module)",
      "start": "2023-10-31T04:00:00.000Z",
      "end": "2023-10-31T04:00:00.000Z",
      "modified": null,
      "color": "#670033",
      "disableResizing": true,
      "createdByUserId": null,
      "dynamicCalendarItemProps": {
        "attemptable": true,
        "categoryId": "_172685_1",
        "dateRangeLimited": false,
        "eventType": "Test",
        "gradable": true
      }
    },
    {
      "id": "_120130_1",
      "type": "GradebookColumn",
      "calendarId": "_12594_1",
      "calendarName": "Calendar Demo: My Calendar Course",
      "title": "Assignment [rubrics] (Conditional Release)",
      "start": "2023-10-31T04:00:00.000Z",
      "end": "2023-10-31T04:00:00.000Z",
      "modified": null,
      "color": "#670033",
      "disableResizing": true,
      "createdByUserId": null,
      "dynamicCalendarItemProps": {
        "attemptable": true,
        "categoryId": "_172683_1",
        "dateRangeLimited": false,
        "eventType": "Test",
        "gradable": true
      }
    }
  ]
}
```

- Note in this demo the gradebook column related grades are due on 2023-10-31 so requesting the range as shown previously will return the data. If we changed the until date to 2023-10-25 the results would be an empty set:

  ```
  {"results" : []}
  ```

- For the Institution calendarType exclude the courseId and add/change the type to Institution in the request.
  E.g. Get all Institution calendarItems within the given timeframe:

  ```
  GET /learn/api/public/v1/calendars/items?since=2023-10-15T00:00:00.000Z&until=2023-11-15T00:00:00.000Z&type=Institution
  ```

Results:

```json
{
  "results": [
    {
      "id": "_84428_1",
      "type": "Institution",
      "calendarId": "INSTITUTION",
      "calendarName": "Institution",
      "title": "Holiday Celebration - Stevens Commons ",
      "description": "Come celebrate with your fellow Monument students as we have a holiday celebration. Student groups will be present and will host different fun-filled activities. Food and drink will be provided! Wear your best ugly Christmas sweater and compete for a prize!",
      "location": "Stevens Commons",
      "start": "2022-12-15T19:00:00.000Z",
      "end": "2022-12-15T22:00:00.000Z",
      "modified": "2022-12-08T19:12:06.160Z",
      "color": "#b65151",
      "disableResizing": false,
      "createdByUserId": "_30005_1"
    }
  ]
}
```

### UPDATE a calendarItem

To update a calendarItem you must know the calendarItem Id. This may be found by calling the appropriate READ endpoint as outlined above. Once you have a collection of calendarItems you may then update using the Update endpoint:

`PATCH /learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}`

#### Payload example

```json
{
  "type": "Course",
  "calendarId": "_12594_1",
  "title": "Study Group 2 Session",
  "description": "Meeting for Study Group 3",
  "location": "Castle Room 2-202",
  "start": "2022-09-30T16:36:40.313Z",
  "end": "2022-09-30T16:36:40.313Z",
  "modified": "2022-09-30T16:36:40.313Z",
  "disableResizing": true,
  "dynamicCalendarItemProps": {
    "attemptable": true,
    "categoryId": "string",
    "dateRangeLimited": true,
    "eventType": "string",
    "gradable": true
  },
  "recurrence": {
    "count": 0,
    "frequency": "Monthly",
    "interval": 0,
    "monthRepeatDay": 0,
    "monthPosition": 0,
    "originalStart": "2022-09-30T16:36:40.313Z",
    "originalEnd": "2022-09-30T16:36:40.313Z",
    "repeatBroken": true,
    "repeatDay": "Sunday",
    "until": "2022-09-30T16:36:40.313Z",
    "weekDays": ["Sunday"]
  }
}
```

**Success** 200 - results match above payload if calendarType were Course with the additional data of "id": "string", "calendarName": "string", "color": "string", "createdByUserId": "string".

### DELETE a calendarItem

As with Update you must know the calendarItem Id of the calendarItem you wish to delete. This may be found by calling the appropriate READ endpoint as outlined above. Once you have a collection of calendarItems you may then delete one using the delete endpoint:

`DELETE /learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}`

#### _Delete Example_

`DELETE /learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}`

**Success**
204 No content

## A Sidebar on ISO-8601, UTC, and REST APIs

Public REST APIs always return ISO 8601 UTC Zulu time zone formatted date/time data. To properly manage conversion to your time zone to display and use dates in your requests it is important to understand the relationship between UTC and the ISO 8601 date-time format and how the REST APIs handle date/times.

### In brief:

- All Learn instances store date-times in the database as localized server time – which may or may not be the consumers time zone – this is why…
- All REST APIs return date-times in UTC Zulu format and as such developers need to adjust to the appropriate time zone for their UI.
- UTC stands for Coordinated Universal Time, a standard used to set all time zones around the world.
- All REST API requests intake ISO 8601 date-time format allowing for specifying the UTC offset for time zone adjustment (see below).ISO 8601 provides a standardized way of presenting dates and times:
  - Date
  - Time of day
  - Coordinated Universal Time (UTC)
  - Local time with offset to UTC
  - Date and time
  - Time intervals
  - Recurring time intervals
- UTC could be considered a subset of the ISO 8601 standard – a date without a specified time zone is referred to as UTC time and may use the optional ‘Z’ (Zulu) time zone indicator. Zulu date-times are what are returned by the REST APIs.
  - 2023-10-15T13:15:30Z represents 1:15:30 PM in Greenwich England (previously called Greenwich Mean Time)
- ISO 8601 may be used with an optional offset to designate the time zone. Following the above example:
  - 2023-10-15T13:15:30Z represents 1:15:30 PM in Greenwich England
  - 2023-10-15T13:15:30Z-05:00 corresponds to October 10, 2023, 8:15:30 am, US Eastern Standard Time.

The ISO 8601 standard provides the following format for a date-time:

`[yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]`

Following the above formatting these are all the same date and time (October 10, 2023, 1:15:30 pm):

- 2023-10-15T13:15:30Z << this is the format returned in REST API results
- 20231015T15T13:15:30Z
- 20231015T15T131530Z
- 2023-10-15T13:15:30
- 20231015T15T13:15:30
- 20231015T15T131530
- 20231015T15T13:15:30
- 2023-10-15T18:15:30-5:00
- 20231015T15T18:15:30Z-5:00
- 20231015T15T181530Z-5:00
- 2023-10-15T18:15:30 -5:00
- 20231015T15T18:15:30-5:00
- 20231015T15T181530-5:00
- 20231015T15T18:15:30-5:00

Some useful URLs to help with better understanding dates:

- ISO 8601 standard: https://www.rfc-editor.org/rfc/rfc3339, https://www.w3.org/TR/NOTE-datetime and https://en.wikipedia.org/wiki/ISO_8601
- Time zones:
- A useful conversion tool: https://www.calculator.net/time-zone-calculator.html

## Entitlements and System Role Privileges

### Three-Legged-OAuth (3LO)

Calling Calendar APIs in a 3LO context enables access based on the privileges of the 3LO authenticated user. You do not need to do anything privileges specific to enable your application when using 3LO.

### Non-3LO

Calling Calendar APIs when not using 3LO requires that you have a REST Application user configured in Learn with the necessary privileges assigned to that user’s role. These privileges are derived from the entitlements required. For mapping entitlements to privileges see: [How to map entitlements to privileges](/docs/blackboard/rest-apis/getting-started/mapping-entitlements-to-privileges.md).

#### Necessary Entitlements

Calendar entitlements required per endpoint are listed in the calendar API documentation.

1. To create a calendar event in Course,
   - `course.calendar-entry.CREATE`
2. To edit a calendar event in Course,
   - `course.calendar-entry.MODIFY`
3. To delete a calendar event in Course
   - `course.calendar-entry.DELETE`
4. To create/edit/delete calendar event in Institution
   - `system.calendar-item.EXECUTE`

#### Necessary System Role Privileges

**Note**: You must share these System Role Privileges with Learn System Admins via documentation for deployment of your application on their Learn server.

1. To create a calendar event in Course,
   - `Course/Organization Control Panel (Tools) > Calendar > Create Entry`
2. To edit a calendar event in Course,
   - `Course/Organization Control Panel (Tools) > Calendar > Edit Entry`
3. To delete a calendar event in Course
   - `Course/Organization Control Panel (Tools) > Calendar > Delete Entry`
4. To create/edit/delete calendar event in Institution
   - `Administrator Panel (Tools and Utilities) > Calendar`

## Calendar API Best Practices

Note: Please review our General REST API Best Practices which are outlined in our [REST API Best Practices](/docs/blackboard/rest-apis/best-practices.md) guide.

1. Never, use GET /learn/api/public/v1/calendars/items in a non-3LO capacity!

> 3LO always limits calendar data to what a specific user may view. Non-3LO use of the calendar endpoints is more data inclusive. While safe to use as a 3LO authenticated user, using the /calendars/items endpoint as a non-3LO user will attempt to dump the entire calendar db for the the specified timebox (maximum of 14 week’s worth for every course). THIS WILL POTENTIALLY IMPAIR SYSTEM PERFORMANCE. DO NOT DO THIS!

2. Target your requests based on calendarType and Ids

> Always target your requests based on the Id of the target course and use calendarTypes to limit the scope of the request. Failure to do so may have negative performance impact.

> Use calendarType, calendarItem, or courseId as required to manage the impacted data set.

3. Timebox your requests

> Always timebox your requests. Failure to do so may have negative performance impact. By default all requests are timeboxed to 14 weeks ahead of the date/time of the request.

> Use the since and until parameters to timebox your requests:

| **since**                             |                                                                                                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- | ------------ |
| Query parameter: `string($date-time)` | Specifies only calendar items after the 'since' date (inclusive) are to be returned. Maximum of 16 weeks after the 'since' date will be returned. ISO-8601 date-time format is expected: `[yyyy-MM-dd | yyyyMMdd][T(hh:mm[:ss[.sss]] | hhmm[ss[.sss]])]?[Z | [+-]hh:mm]]` |

| **until**                             |                                                                                                                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- | ------------ |
| Query parameter: `string($date-time)` | Specifies only calendar items before the 'until' date (inclusive) are to be returned. Maximum of 16 weeks prior to the 'until' date will be returned. ISO-8601 date-time format is expected: `[yyyy-MM-dd | yyyyMMdd][T(hh:mm[:ss[.sss]] | hhmm[ss[.sss]])]?[Z | [+-]hh:mm]]` |
