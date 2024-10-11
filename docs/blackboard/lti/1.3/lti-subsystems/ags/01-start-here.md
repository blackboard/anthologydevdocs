---
title: Working with the Grades service
id: ags-start
sidebar_position: 1
edited: "2024-09-26"
---

The Assignments and Grades Service (AGS for short) is the gateway created by 1EdTech for LTI Advantage to interact with grades and grade column information. This service has additional functions within it that allows your tool to create columns, create attempts, grade user data or pull the existing grades from Blackboard Learn.

:::caution CAVEAT
This service will not give you the information of all the grades and columns created in the course but rather, it will give you the access and data of the columns created by the LTI tool itself (through direct calls to the Assignments and Grades Service or created through Deep Linking 2.0)
:::

## Authenticating to the LTI REST service and authorizing the requests

This step will provide you a bearer token that can be used to authenticate your request to AGS. To generate this token, you can follow the document [Authenticating to the LTI Subsystems](../01-authenticating-to-ags.md). Once you have the token, you can perform request to the LTI REST service, however, you need to be wary to add the proper headers for AGS. The following are the required headers for a successful request:

| Name            | Value                                                 |
| --------------- | ----------------------------------------------------- |
| `Content-Type`  | `application/vnd.ims.lis.v2.lineitem+json`            |
| `Authorization` | Bearer token received from the authentication request |

## Available endpoints

Once the authentication process has been completed, you have access to different OpenAPI endpoints for AGS that will return or retrieve data depending on the context, these endpoints are the following:

| Endpoint                         | Description                                                                                                      | Available methods      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `/lineItem/{lineItemId}`         | Returns or receives the information about the specific column such as maximum grades, due date, name, tags, etc. | `GET`, `PUT`, `DELETE` |
| `/lineItem/`                     | Returns the information about all the columns created by your tool                                               | `GET`, `POST`          |
| `/lineItem/{lineItemId}/results` | Returns the existing grades for the specified column (only if the column was created by your tool)               | `GET`                  |
| `/lineItem/{lineItemId}/score`   | Receives the grading data based on the AGS container specification                                               | `POST`                 |

More information about each endpoint can be found here: <https://www.imsglobal.org/spec/lti-ags/v2p0/openapi/#/default>
