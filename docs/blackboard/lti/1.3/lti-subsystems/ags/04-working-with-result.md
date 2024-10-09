---
title: Interacting with Results
id: ags-result
sidebar_position: 4
edited: "2024-10-09"
---

This endpoint is mostly used to retrieve the grades from all the students in bulk, useful when the LTI tool requires a sync of the existing information in Blackboard Learn. The endpoint to call is the following and will only receive a `GET` request:

```
https://{learn_domain}/learn/api/v1/lti/courses/{courseId}/lineItems/{lineItemId}/results
```

The response of the endpoint will be an array of object, each having the following information:

| Property        | Description                                                | Type    |
| --------------- | ---------------------------------------------------------- | ------- |
| `id`            | ID of the association between lineItemId, userId and grade | String  |
| `scoreOf`       | ID of the lineItem associated with the grade               | String  |
| `userId`        | The ID of the user associated with the grade               | String  |
| `resultScore`   | Grade assigned to the user                                 | double  |
| `resultMaximum` | maximum grade assigned to the column                       | Integer |
| `comment`       | Feedback to the user                                       | String  |

A sample of a response from the `results` endpoint will be shown below

```json
[
  {
    "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1/results/_700_1",
    "scoreOf": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1",
    "userId": "b317a895e7f64796a3fd01bb18a61d65",
    "resultScore": 50,
    "resultMaximum": 100,
    "comment": ""
  },
  {
    "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1/results/_701_1",
    "scoreOf": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1",
    "userId": "77a1f06f53a1498fbf02eef7b34876c6",
    "resultScore": 95,
    "resultMaximum": 100,
    "comment": ""
  },
  {
    "id": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1/results/_702_1",
    "scoreOf": "https://partner-test3.blackboard.com/learn/api/v1/lti/courses/_220_1/lineItems/_1397_1",
    "userId": "77a1f06f53a1498fbf02eef7b34876c6",
    "resultScore": 10,
    "resultMaximum": 100,
    "comment": ""
  }
]
```
