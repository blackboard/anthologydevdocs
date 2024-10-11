---
title: Interacting with Grades
id: ags-grades
sidebar_position: 3
edited: "2024-10-09"
---

Now that you have a way to get the column information from the course and/or create new columns in a course, we can start working with grades, specially posting grades and creating attempts on LTI columns. This part of the service only accepts a `POST` request to either create a new grade or update/delete an existing grade (this will depend on the properties and values included on the request body).

## Gather the user ID

Before you can post a new grade, you need to get the information of the user that will receive the grade on Blackboard Learn, this can be gathered through the different methods outlined next.

### REST API

If your LTI application is also registered in the environment as a REST API integration, you can get the user information (querying by email, username, names, etc.) from the endpoint /learn/api/public/v1/users (more information about this endpoint and the query parameters needed here: <https://developer.blackboard.com/portal/displayApi/Learn>).

From the response, you need to get the `uuid` field which will be ID required to post grades. An example of an API request for a user looks like this:

```json
{
  "results": [
    {
      "id": "_702_1",
      "uuid": "b317a895e7f64796a3fd01bb18a61d65",
      "externalId": "student-acc",
      "dataSourceId": "_2_1",
      "userName": "student-acc",
      "created": "2023-08-04T14:43:09.623Z",
      "modified": "2024-09-12T15:16:23.925Z",
      "lastLogin": "2024-09-12T15:16:23.925Z",
      "institutionRoleIds": ["STUDENT"],
      "systemRoleIds": ["User"],
      "availability": {
        "available": "Yes"
      },
      "name": {
        "given": "Student",
        "family": "Account",
        "preferredDisplayName": "GivenName"
      },
      "contact": {
        "email": "student@example.com"
      }
    }
  ]
}
```

### LTI launch

If the user that will receive the grade on Blackboard Learn is the one performing the LTI launch, the claim `sub` included in the JWT token sent to your tool can be used to get the ID of the user

### Names and Roles Provisioning Service

The last option to get the user ID from Blackboard Learn is to use the Names and Roles Provisioning Service (NRPS) to get the roster from the course and extract the ID of the user. This service will be outlined in detail in later sections but from the response objects of the service you can obtain the ID from the `user_id` property. The example below is a response object from NRPS with the information:

```json
{
  "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/external/namesandroles/_220_1?groups=true",
  "context": {
    "id": "c2d7fe850a8e4af2b7f6d483edea773b",
    "label": "adv-math-fall24",
    "title": "Advanced Math - Fall 2024"
  },
  "members": [
    {
      "status": "Active",
      "name": "Student Account",
      "given_name": "Student",
      "family_name": "Account",
      "middle_name": "",
      "email": "student@example.com",
      "user_id": "b317a895e7f64796a3fd01bb18a61d65",
      "lis_person_sourcedid": "student-acc",
      "roles": [
        "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner",
        "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student"
      ],
      "group_enrollments": []
    }
  ]
}
```

## Posting the user grade

Now that you have the ID of the user, you can perform a POST request to send the grade details to Blackboard Learn. The request sent to blackboard should contain the following information:

### Headers

| Header          | Value                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------- |
| `Content-Type`  | `application/vnd.ims.lis.v2.lineitem+json`                                                   |
| `Anthorization` | Bearer token obtained from the authentication section [Here](../01-authenticating-to-ags.md) |

### Body

Based on the type of action that you want to perform, the body will change. The following are the minimum required properties needed for each action. The breakdown of required and optional properties can be found at the end of the document

#### Create a new grade or update an existing grade

```json
{
  "userId": "c2d7fe850a8e4af2b7f6d483edea773b",
  "scoreGiven": 95.4,
  "timestamp": "2008-05-26T01:32:13Z",
  "activityProgress": "Completed",
  "gradingProgress": "FullyGraded"
}
```

#### Delete an existing grade

```json
{
  "userId": "c2d7fe850a8e4af2b7f6d483edea773b",
  "timestamp": "2008-05-26T01:32:13Z",
  "activityProgress": "Initialized",
  "gradingProgress": "NotReady"
}
```

## Table of Reference for grade properties

the table below outlines and defines the possible properties the JSON body could have at any given time

| Property           | Description                                                                       | Required | Type              | Default |
| ------------------ | --------------------------------------------------------------------------------- | -------- | ----------------- | ------- |
| `userId`           | The ID of the user gathered from any of the methods above                         | Yes      | String            | N/A     |
| `scoreGiven`       | The grade of the user                                                             | No       | double            | `null`  |
| `timestamp`        | Date where the grade was sent to Blackboard Learn                                 | Yes      | Date String (ISO) | N/A     |
| `activityProgress` | Completion status of the activity started by the user/learner                     | Yes      | String            | N/A     |
| `gradingProgress`  | Completion status of the grading by the instructor/teacher                        | Yes      | String            | N/A     |
| `comment`          | Feedback to the user, visible through the feedback section of Blackboard Learn    | No       | String            | `null`  |
| `submission`       | Object that contains the properties `submissionId`, `startedAt` and `submittedAt` | No       | Object            | N/A     |
| `submissionId`     | An ID from the LTI tool to cross-Reference                                        | No       | String            | `null`  |
| `startedAt`        | The timestamp of when the user started the activity                               | No       | Date String (ISO) | `null`  |
| `submittedAt`      | The timestamp of when the activity was submitted                                  | No       | Date String (ISO) | `null`  |

:::info
Information about the activityProgress and gradingProgress values can be found here: <https://www.imsglobal.org/spec/lti-ags/v2p0#activityprogress>
:::
