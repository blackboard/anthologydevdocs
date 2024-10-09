---
title: Interacting with Columns
id: ags-columns
sidebar_position: 2
edited: "2024-10-09"
---

Now that you are authenticated, (if not, follow the document [Authenticating to the LTI Subsystems](../01-authenticating-to-ags.md) to complete the authentication), we can start working with the column itself. The endpoint that will be used will vary depending of whether you want to perform actions on a single column or multiple.

## Before we start

The following is a list of property definitions available for column operations, this will be used throughout the document and most (if not all) will be available in some responses or required in some requests

| Field            | Description                                                                                                                                         | Value             | Example                                                          |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------- |
| `id`             | Internal identifier for the specific column                                                                                                         | String            | `{learn_domain}/learn/api/v1/lti/courses/_4_1_/lineItems/_13_1_` |
| `scoreMaximum`   | Maximum grade assigned to the column                                                                                                                | Integer           | 100                                                              |
| `label`          | Name of the column, visible in the Gradebook                                                                                                        | String            | "Final Exam - 40%"                                               |
| `resourceLinkId` | Id of the Course content item linked to the column (if any)                                                                                         | String            | `_3712_1`                                                        |
| `endDateTime`    | Due date of the gradebook column (if any)                                                                                                           | Date String (ISO) | `2024-10-11T04:59:59.999Z`                                       |
| `gradesReleased` | Whether the systems should show the grades to the student right away or not                                                                         | boolean           | true                                                             |
| `tag`            | Identifier provided by you, it could be an identifier of your systems - Not visible to students (only for columns created through a `POST` request) | String            | `0192719f-c182-7ccd-91a3-9a67497253d9`                           |
| `resourceId`     | Identifier provided by you, it could be an identifier of your systems (only for columns created through a `POST` request)                           | String            | `3880c5df-cc17-47c5-87cd-bcd4100dabe3`                           |

## Available endpoints

As seen in previous documents, the endpoints that will be used are included in the LTI launch and can be sourced from there with all the required information, if this is not available or you're trying to perform actions without an LTI launch, the endpoints are the following:

#### Endpoint for multiple column operations

```
{learn_domain}/learn/api/v1/lti/courses/{courseId}/lineItems
```

#### Endpoint for single column operations

```
{learn_domain}/learn/api/v1/lti/courses/{courseId}/lineItems/{lineItemId}/
```

## Multiple column operations

The available operations for multiple columns are limited, the two available supported are `GET` and `POST`.

### `GET`

When performing a `GET` request to the endpoint mentioned above, the system will return an array with the information about all the columns created by the tool in the specific `courseId`, each of the items of the array will be an object that contains the following structure:

```json
[
  {
    "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1",
    "scoreMaximum": 100,
    "label": "Anthology Tool - Course Content Tool",
    "resourceLinkId": "_3712_1",
    "endDateTime": "2024-10-11T04:59:59.999Z",
    "gradesReleased": true
  },
  {
    "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1398_1",
    "scoreMaximum": 100,
    "label": "Anthology Tool - Course Content Tool",
    "resourceLinkId": "_3713_1",
    "endDateTime": "2024-10-11T04:59:59.999Z",
    "gradesReleased": true
  },
  {
    "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1399_1",
    "scoreMaximum": 90,
    "label": "AGS Created",
    "tag": "AGS Created tag",
    "resourceId": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",
    "gradesReleased": true
  }
]
```

### `POST`

The post operation to this endpoint will create a new column on the indicated course, which will be automatically linked to your tool and will show if you query for all the columns. Keep in mind that columns created through this method will not allow you to set a specific `resourceLinkId` since that can only be set when creating a deep linking item.

To create the column, you must sent a JSON payload with the required fields outlined here:

| field          | Required | Type              | Description                                                                            | Default value |
| -------------- | -------- | ----------------- | -------------------------------------------------------------------------------------- | ------------- |
| label          | Yes      | String            | Name of the column - Visible to users                                                  | N/A           |
| scoreMaximum   | Yes      | Integer           | Maximum grade assigned to this column                                                  | N/A           |
| resourceId     | No       | String            | An identifier of the resource on the tool's end                                        | `null`        |
| tag            | No       | String            | An identifier of the resource on the tool's end                                        | `null`        |
| endDateTime    | No       | Date String (ISO) | Due date of the column                                                                 | `null`        |
| gradesreleased | No       | boolean           | Flag to indicate whether the grades are available to students after adding them or not | `true`        |

The response of this request will return a 201 code with the object of the column created and its corresponding IDs in Blackboard Learn.

## For single column operations

If the initial LTI launch was performed through a Deep Linking item or Course Content placement, the information about the `learn_domain` and `courseId` will be available on the token, if the request is being performed from your tool directly, you will need to source this information from other places such as REST API or using the call to `GET` multiple columns (see above).

The available operations for single column operations are `GET`, `PUT`, `DELETE`.

### `GET`

Just as its "multiple columns operations" counterpart, the `GET` endpoint returns the information about the columns, however, this just returns the information based on the column ID you provide. The URL of the request will look like this:

```
{learn_domain}/learn/api/v1/lti/courses/{courseId}/lineItems/{lineItemId}
```

The response will look like this:

#### For columns created through Deep Linking or Course Content Tool placements

```json
{
  "id": "https://{learn_domain}/learn/api/v1/lti/courses/_220_1/lineItems/_1398_1",
  "scoreMaximum": 100,
  "label": "Anthology Tool - Course Content Tool",
  "resourceLinkId": "_3713_1",
  "endDateTime": "2024-10-11T04:59:59.999Z",
  "gradesReleased": true
}
```

#### For columns created through the Assignments and Grades service directly

```json
{
  "id": "https://{learn_domain}/learn/api/v1/lti/courses/_220_1/lineItems/_1399_1",
  "scoreMaximum": 90,
  "label": "AGS Created",
  "tag": "AGS Created tag",
  "resourceId": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",
  "gradesReleased": true
}
```

### `PUT`

The `PUT` method is used to update information about the grading column such as label, score, due date, etc. This endpoint can receive any of the object properties and updates the existing columns with the updated data.

:::info Read-Only properties
When updating the information of a grading column, make sure you don't include any ready-only fields (such as the `id` field) since this will result on a 400 response from the server
:::

As a response, the system will send the updated object with a 200 response code.

### `DELETE`

This method is quite simple since it will just delete the existing gradebook column from the system

:::caution Destructive action
Please be wary when performing this action, this will remove the column completely from the system, including any attempt and/or grades already saved or posted. Blackboard Learn support doesn't have a way to restore these columns.
:::
