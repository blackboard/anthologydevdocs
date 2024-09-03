---
title: "Working with Rubrics APIs"
id: rubrics-apis
categories: Learn REST Working-with APIs Rubrics
published: "2023-10-20"
edited: "2023-10-20"
author: Mark O'Neil
---

> Tested with Blackboard Learn version 3900.69.0

## Topic

Learn supports the use of Rubrics to provide consistency in grading which enhances the consistency, transparency, and fairness for assessing student work.

Our Public APIs support the reading of Rubric information and enables the development of analytic tooling for validating rubrics use and fine-tuning the adoption of rubrics.

## General API Use

There are several use cases supported by our Rubrics APIs and they share a common workflow. Some use cases are determining:

- which, if any, Rubric(s) a course is using.
- the details of a specific Rubric.
- the selected Rubric cells used for a grade.
- the feedback provided on the rubric selection and graded item.

The general workflow for using rubrics is based on the goal of the use case, but goes something like this:

1. Get the courseId
   1. Use appropriate Get `/courses` API
2. Get the rubricId
   1. Use appropriate Get `/courses/rubric` API
3. Get the rubric to gradebookColumnId association(s)
   1. Use appropriate get `/courses/rubric/associations` api
4. Get the attempt rubric evaluation:
   1. Use `/courses/gradebook/attempt` API
   2. Use `/courses/gradebook/attempts/rubric/evaluations` or `/courses/rubric/associations/evaluations` API

The API you use in the above steps is largely determined by data previously collected. In all cases you will need the courseId - additional Ids are discovered as part of the work flow supporting the use case.

Let's look at each of the steps assuming you have already completed step 1 and identified the course of interest.

### Rubrics used by a course

Not all courses may be using rubrics as part of their grading process. Identifying whether a course is using rubrics is straight forward.

You may discover rubrics use either via the courseId alone or via a gradebookColumnId.

#### 1. Starting with an identified course

Assuming a courseId of `_12345_1` you would call the Get Rubrics endpoint `GET /learn/api/public/v1/courses/{courseId}/rubrics`:

`GET /learn/api/public/v1/courses/_12345_1/rubrics`

which would either return Rubric(s) information or an empty set:

```json
{
  "results": [
    {
      "id": "_11964_1",
      "courseId": "_12345_1",
      "title": "DEMO-RUBRIC",
      "created": "2023-10-03T18:55:23.332Z",
      "modified": "2023-10-03T18:55:23.332Z",
      "rubricType": "Percentage",
      "readOnly": false
    }
  ]
}
```

or

```json
{ "results": [] }
```

In the above results `id` is the `rubricId` - this should be noted as it and the `courseId` are used in _nearly_ every rubrics API request. A course may be using multiple rubrics and the rubicId is used to differentiate between them.

For example once you know the rubricId for a rubric used by a course you may call `GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}` to request a specific rubric.

#### 2. Starting with an identified gradebook column

Step 1 helps identify whether a course is potentially using rubrics, but it does not tell us if the instructor has a gradeable item using a rubric. The next step is to determine if the rubric has been applied to a gradeable item or `gradeColumn`.

There are a couple ways of determining this. You may get get a course's grade columns and inspect the following elements which will exist if a rubric is being used, the `gradebookColumnId` associated, and whether it is currently being `usedForGrading`:

```json
{
    "results": [
        {
            ...
            "rubricAssociations": [
                {
                    "id": "string",
                    "rubricId": "string",
                    "associationEntity": {
                        "gradebookColumnId": "string",
                        "questionId": "string"
                    },
                    "usedForGrading": true,
                    ...
                }
            ]
        }
    ]
}
```

You may also use the Rubric associations APIs to determine the columns in the course which have rubrics applied as shown below.

##### A known column:

`GET /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/rubrics/associations
`
`/learn/api/public/v1/courses/_12594_1/gradebook/columns/_120127_1/rubrics/associations
`

```json
{
	"results" : [
		{
			"id" : "_15388_1",
			"rubricId" : "_11964_1",
			"associationEntity" : {
				"gradebookColumnId" : "_120127_1"
			},
			"usedForGrading" : true,
			"rubricVisibility" : "Enabled",
			...
		}
	]
}
```

##### A known rubricId

`GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations`

`/learn/api/public/v1/courses/_12594_1/rubrics/_11964_1/associations`

```json
{
	"results" : [
		{
			"id" : "_15388_1",
			"rubricId" : "_11964_1",
			"associationEntity" : {
				"gradebookColumnId" : "_120127_1"
			},
			"usedForGrading" : true,
			"rubricVisibility" : "Enabled",
			...
		}
	]
}
```

Notice the same data is returned regardless of the endpoint used - the difference is the data which you had on hand to make the request.

Of note in each of the above results examples is the `"gradebookColumnId": "string",` and `"rubricId" : "_11964_1",` which will be required for further investigation into rubrics use and most importantly the applied evaluations which used the rubric.

Additionally the associationId or id in the get /associations results is used in evaluations requests.

The pertinent data we have collected thus far on our rubric quest is:

- `"courseId":"_1234_1`
- `"rubricId": "_11964_1"`
- `"gradebookColumnId": "_120127_1"`
- and `"associationId": "_15388_1"`

With the above derived information you now know which rubric(s) a course is using and which columns are using which rubric.

### Rubric Details

Using the above information you may also pull the full rubric details by expanding the `GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}` to include the `cells, columns, and rows`.

`/learn/api/public/v1/courses/_12594_1/rubrics/_11964_1?expand=cells,columns,rows`

Results:

```json
{
  "id": "_11964_1",
  "courseId": "_12594_1",
  "title": "Demo-Rubric",
  "description": "Created via the Original Rubric UI",
  "created": "2023-10-13T12:24:10.696Z",
  "modified": "2023-10-13T12:27:18.899Z",
  "rubricType": "Percentage",
  "readOnly": false,
  "columns": [
    {
      "id": "_43512_1",
      "header": "Novice 1",
      "position": 0
    },
    {
      "id": "_43513_1",
      "header": "Competent 2",
      "position": 1
    },
    {
      "id": "_43514_1",
      "header": "Proficient 3",
      "position": 2
    }
  ],
  "rows": [
    {
      "id": "_45496_1",
      "header": "Formatting A",
      "position": 0,
      "percentage": 33.0
    },
    {
      "id": "_45497_1",
      "header": "Organization B",
      "position": 1,
      "percentage": 34.0
    },
    {
      "id": "_45498_1",
      "header": "Grammar C",
      "position": 2,
      "percentage": 33.0
    }
  ],
  "cells": [
    {
      "id": "_168718_1",
      "rowId": "_45496_1",
      "columnId": "_43512_1",
      "description": "",
      "rowPosition": 0,
      "columnPosition": 0,
      "percentage": {
        "value": 0.0
      }
    },
    {
      "id": "_168719_1",
      "rowId": "_45496_1",
      "columnId": "_43513_1",
      "description": "",
      "rowPosition": 0,
      "columnPosition": 1,
      "percentage": {
        "value": 50.0
      }
    },
    {
      "id": "_168720_1",
      "rowId": "_45496_1",
      "columnId": "_43514_1",
      "description": "",
      "rowPosition": 0,
      "columnPosition": 2,
      "percentage": {
        "value": 100.0
      }
    },
    {
      "id": "_168721_1",
      "rowId": "_45497_1",
      "columnId": "_43512_1",
      "description": "",
      "rowPosition": 1,
      "columnPosition": 0,
      "percentage": {
        "value": 0.0
      }
    },
    {
      "id": "_168722_1",
      "rowId": "_45497_1",
      "columnId": "_43513_1",
      "description": "",
      "rowPosition": 1,
      "columnPosition": 1,
      "percentage": {
        "value": 50.0
      }
    },
    {
      "id": "_168723_1",
      "rowId": "_45497_1",
      "columnId": "_43514_1",
      "description": "",
      "rowPosition": 1,
      "columnPosition": 2,
      "percentage": {
        "value": 100.0
      }
    },
    {
      "id": "_168724_1",
      "rowId": "_45498_1",
      "columnId": "_43512_1",
      "description": "",
      "rowPosition": 2,
      "columnPosition": 0,
      "percentage": {
        "value": 0.0
      }
    },
    {
      "id": "_168725_1",
      "rowId": "_45498_1",
      "columnId": "_43513_1",
      "description": "",
      "rowPosition": 2,
      "columnPosition": 1,
      "percentage": {
        "value": 50.0
      }
    },
    {
      "id": "_168726_1",
      "rowId": "_45498_1",
      "columnId": "_43514_1",
      "description": "",
      "rowPosition": 2,
      "columnPosition": 2,
      "percentage": {
        "value": 100.0
      }
    }
  ]
}
```

### Rubrics Evaluations

Evaluations are part of the grading workflow and as such require accessing gradebook data - specifically attempts.

#### Attempts

`GET /learn/api/public/v2/courses/{courseId}/gradebook/columns/gradebookColumnId/attempts`

`/learn/api/public/v2/courses/_12594_1/gradebook/columns/_120127_1/attempts`

Results:

```json
{
  "results": [
    {
      "id": "_844981_1",
      "userId": "_28497_1",
      "status": "Completed",
      "displayGrade": {
        "scaleType": "Score",
        "score": 62.5
      },
      "text": "62.50000",
      "score": 62.5,
      "feedback": "<h5>Overall Feedback</h5>",
      "studentSubmission": "<p>your 200 word story</p>",
      "exempt": false,
      "created": "2023-10-09T18:40:34.278Z",
      "attemptDate": "2023-10-09T18:41:00.562Z",
      "modified": "2023-10-12T13:03:14.372Z",
      "attemptReceipt": {
        "receiptId": "eec942431d4f4266b5571ecade1fe4c1",
        "submissionDate": "2023-10-09T18:41:00.562Z",
        "submissionTotalSize": 26
      }
    }
  ]
}
```

The pertinent data we have collected thus far on our rubric quest is:

- `"courseId":"_1234_1`
- `"rubricId": "_11964_1"`
- `"gradebookColumnId": "_120127_1"`
- `"associationId": "_15388_1"`
- `"attemptId" : "_844981_1"`
- and `"userId" : "_28497_1"`

Note: You may leverage the grade `status` to determine whether to proceed with pulling any evaluation data. There is really no point in making the evaluation requests if the status is not "Completed".

#### Evaluations

You may use the attempt information, notably the `attemptId` and the `gradebookColumnId` to find the instructor entered evaluation data:
`GET /learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}/rubric/evaluations`

`/learn/api/public/v1/courses/_12594_1/gradebook/columns/_120127_1/attempts/_844981_1/rubric/evaluations`

Results:

```json
{
  "results": [
    {
      "id": "_47213_1",
      "rubricAssociationId": "_15388_1",
      "evaluationEntity": {
        "attemptId": "_844981_1"
      },
      "possibleScore": {
        "numerator": 100,
        "denominator": 1
      },
      "totalScore": {
        "numerator": 125,
        "denominator": 2
      },
      "submitted": "2023-10-11T19:56:19.483Z"
    }
  ]
}
```

The pertinent data we have collected thus far on our rubric quest is:

- `"courseId":"_1234_1`
- `"rubricId": "_11964_1"`
- `"gradebookColumnId": "_120127_1"`
- `"associationId": "_15388_1"`
- `"attemptId" : "_844981_1"`
- `"userId" : "_28497_1"`
- and `"evaluationId": "_47213_1"`

To access the actual rubric criteria applied for the evaluation and any feedback provided by the grader you need to expand the evaluation cells:

`GET /learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{associationId}/evaluations/{evaluationId}?expand=cells`

`/learn/api/public/v1/courses/_12594_1/rubrics/_11964_1/associations/_15388_1/evaluations/_47213_1?expand=cells`

Results:

```json
{
  "id": "_47213_1",
  "rubricAssociationId": "_15388_1",
  "evaluationEntity": {
    "attemptId": "_844981_1"
  },
  "possibleScore": {
    "numerator": 100,
    "denominator": 1
  },
  "totalScore": {
    "numerator": 125,
    "denominator": 2
  },
  "submitted": "2023-10-11T19:56:19.483Z",
  "cells": [
    {
      "id": "_95594_1",
      "rubricCellId": "_167078_1",
      "rubricRowId": "_45050_1",
      "selectedScore": {
        "numerator": 100,
        "denominator": 1
      },
      "feedback": "<p>comment 1</p>"
    },
    {
      "id": "_95596_1",
      "rubricCellId": "_167083_1",
      "rubricRowId": "_45051_1",
      "selectedScore": {
        "numerator": 75,
        "denominator": 1
      },
      "feedback": "<p>comment 2</p>"
    },
    {
      "id": "_95599_1",
      "rubricCellId": "_167088_1",
      "rubricRowId": "_45052_1",
      "selectedScore": {
        "numerator": 50,
        "denominator": 1
      },
      "feedback": "<p>comment 3</p>"
    },
    {
      "id": "_95603_1",
      "rubricCellId": "_167093_1",
      "rubricRowId": "_45053_1",
      "selectedScore": {
        "numerator": 25,
        "denominator": 1
      },
      "feedback": "<p>comment 4</p>"
    }
  ]
}
```

Now that you know the rubricCellId and rubricRowId you may inspect the original rubric data acquired above and pull details for each cell and headers for use in display or mapping to additional processes supporting evaluation workflows.

Also, by this point you have collected sufficient information (course, user, grade column, grade, rubric, etc) to inform any additional logic such as passing data to your SIS, Reporting, or User facing interfaces!

## Entitlements and System Role Privileges

### Necessary Entitlements

Rubrics entitlements required per endpoint are listed in the rubrics API documentation.

#### Read Rubrics

- course.rubrics.VIEW

#### Read Associations

- course.rubrics.VIEW
- course.gradebook-metadata.VIEW
- course.gradebook.MODIFY

#### Read Evaluations, and Columns and Attempts

- course.gradebook.MODIFY

### Necessary Role Privileges

**Note**: You must share these System Role Privileges with Learn System Admins via your documentation for successful deployment of your application on their Learn server.

#### Read Rubrics

- Course/Organization Control Panel (Tools) > Rubrics > View Rubric

#### Read Associations

- Course/Organization Control Panel (Tools) > Rubrics > View Rubric
- Course/Organization Control Panel (Grade Center) > View Grade Center Items and Settings
- Course/Organization Control Panel (Grade Center) > Full Control

#### Read Evaluations, and Columns and Attempts

- Course/Organization Control Panel (Grade Center) > Full Control

## Rubrics APIs Best Practices

Note: Please review our General REST API Best Practices which are outlined in our [REST API Best Practices](/docs/blackboard/rest-apis/best-practices.md) guide.

- Cache rubrics and gradebook data when working within a specific course and gradebook to reduce the number of requests required.
