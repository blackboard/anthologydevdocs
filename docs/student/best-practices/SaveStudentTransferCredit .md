---
title: 'Using the SaveStudentTransferCredit command API'
id: studentapi-savestudenttransfercredit-details
sidebar_position: 1
author: Jim Burns
published: '2024-06-26'
edited: '2024-06-26'
---

A common use case for integrators is to persist data for courses completed at other institutions. There is capability in Anthology Student for a student to have course requirements satisfied with course work that has been completed at other institutions. The high level process is for a user to create a student transfer credit record which consists of the course(s) that have been completed at other institutions as well as the internal course(s) that the external course work will be satisfying. There are many cases where the process of articulating which external courses satisfy which internal courses is handled outside of the Anthology Student application boundary. In this case, it is critical to be able to persist this data into Anthology Student so that business processes that have dependencies on transfer credit data will operate as expected. The command API endpoint that is used for persisting this data is api/commands/Admissions/StudentTransferCredit/SaveStudentTransferCredit. This document will cover the pertinent details for being able to successfully leverage and execute this API.

## Swagger documentation

To access the Swagger documentation, append 'swagger' to the end of the base URI that is used to launch the Anthology Student web client application. Once the Swagger landing page is loaded, use the Domain and Functional Area drop down filters at the top of the swagger page to access the documentation for the save transfer credit endpoint. Select 'Admissions' for Domain and 'Student Transfer Credit' for Functional Area and then select Refresh. Then click the lightning bolt icon to see the command API endpoints for the StudentTransferCredit entity.

![Operations for Student entity](/assets/img/SaveStudentTransferCreditAPI1.png)
![Operations for Student entity](/assets/img/SaveStudentTransferCreditAPI2.png)

When the list of available operations is displayed, select the SaveStudentTransferCredit operation. NOTE: Do not use the SaveAdvanceStudentTransferCredit endpoint. This API is not fully implemented and will not provide the desired result of saving student transfer credit data.

![Operations for Student entity](/assets/img/SaveStudentTransferCreditAPI3.png)

## Request payload

The high level data model for persisting transfer credit data consists of 3 main entities. The StudentTransferCredit entity is the header record for the transfer credit information. This entity will store the summary of the transfer credit record such as College or High School the external courses were completed at, overall status of the transfer credit record and the transfer credit type. This entity also includes 2 child entities as part of its definition. StudentTransferCreditMultipleExternalCourse is the entity that contains 1 or more rows for each course the student completed at the external institution. The StudentTransferCreditMultipleInternalCourse entity will contain 1 or more rows for the institution courses that the external courses are satisfying. You will see that these are defined as collection properties within the request payload. -- StudentTransferCreditExternalCourseList and StudentTransferCreditInternalCourseList.

You will see properties on the StudentTransferCredit entity that are deprecated and no longer used. The original implementation of the Student Transfer Credit feature in Anthology Student did not have child tables defined for recording external course work and the internal courses that the external course work was satisfying. Instead a row would exist in the StudentTransferCredit entity for each external course that was taken. For this reason, the following properties on the StudentTransferCredit entity can be ignored as they are no longer used:

    - CollegeCourseId
    - CollegeId
    - LetterGrade
    - CourseId
    - CreditHoursEarned
    - CollegeCourseLetterGrade
    - CollegeCourseCreditHoursAttempted
    - CollegeCourseClockHoursAttempted
    - CollegeCourseGradePoints
    - CollegeCourseCreditHoursEarned
    - CollegeCourseClockHoursEarned
    - CollegeCourseStartDate
    - ClockHours
    - ClockHoursEarned
    - HighSchoolCourseId
    - HighSchoolId

All of the details for the external course work taken will reside on the ExternalCourses child entity collection property. All of the details for the internal courses that that the external course work is satisfying will reside on the InternalCourses child entity collection property.

IMPORTANT NOTE: When looking at the request payload documentation in Swagger, you will see the StudentTransferCreditEntity defined as a property in the StudentTransferCreditExternalCourseList property AND the StudentTransferCreditInternalCourseList property. This should be completely ignored and not populated as part of the request. Anything populated in the StudentTransferCreditEntity properties is ignored in the API execution logic.

An example payload for this API is below.

```json
{
  "payload": {
    "studentTransferCreditId": -1,
    "studentId": 50090,
    "studentEnrollmentPeriodId": 264,
    "transferCreditTypeId": "4",
    "approvedDate": null,
    "transferCreditStatusId": "1",
    "isApproved": false,
    "termId": null,
    "grade": "",
    "note": "Test note for Transfer credit",
    "studentTransferCreditExternalCourseList": [
      {
        "id": -1,
        "uid": "ffc5e67e-eb1e-4ec0-96e9-363c10595790",
        "collegeId": 4,
        "collegeCourseCredits": 0,
        "collegeCourseClockHours": null,
        "collegeCourseGrade": "B",
        "collegeCourseId": 8,
        "completionDate": "2018/03/01 00:00:00",
        "collegeCourseStartDate": null,
        "highSchoolCourseId": null,
        "highSchoolId": null,
        "entityState": 0,
        "collegeCourseClockHoursAttempted": null,
        "collegeCourseClockHoursEarned": null,
        "collegeCourseCreditHoursAttempted": 0,
        "collegeCourseCreditHoursEarned": 0,
        "collegeCourseGradePoints": 0
      }
    ],
    "studentTransferCreditInternalCourseList": [
      {
        "id": -1,
        "uid": "cd2d4d2b-2a48-49fb-adb8-147a1388ad29",
        "courseId": 35,
        "credits": 3,
        "hours": 0,
        "entityState": 0
      }
    ],
    "collegeCourseClockHoursAttempted": null,
    "collegeCourseClockHoursEarned": null,
    "collegeCourseCreditHoursAttempted": "0.00",
    "collegeCourseCreditHoursEarned": "0.00",
    "collegeCourseGradePoints": 0,
    "rowVersion": null
  }
}
```

In the example, there is 1 external courses taken that is satisfying the requirements for 1 internal course.

The TransferCreditStatusId property value will determine if the student's degree progress audit and transcript data will be updated when the API executes. The Transfer Credit Status table is reference data that is configured by the instituion. Any number of statuses can be configured that can be used to track the transfer credit process (i.e. Transfer credits are submitted, transfer credits are being reviewed, transfer credit is approved etc.). Each row in the Transfer Credit Status reference data entity has a boolean property called IsApproved. If the IsApproved attribute is true for the TransferCreditStatusId property value specified in the request, then the execution logic will perform the needed updates so that there is a Transfer grade recorded for the internal course Id provided and also update the degree progress audit data so that the requirement of taking the internal course Id shows as Fulfilled when generating the students Degree Progress Audit.

## Additional notes:

### Authorization required for this API endpoint

In order to be able to execute this API endpoint, the user that the API call is authenticating under must have the Academics - Student Transfer Credit - New task included in the list of tasks/operations that the user is authorized to. This is done from the security console application.

![Operations for Student entity](/assets/img/SaveStudentTransferCreditAPI4.png)

### Optional properties in request payload

There are a number of properties in the request payload that are optional. The nuances of if/how to populate these will need to be determine via iterative testing and validation with the client. The sample request payload provided above can be used as a starting point but will likely need to be fine tuned in order to satisfy all requirements for recording student transfer credit data.

If there are questions after reviewing this document and the corresponding swagger documentation, you can submit them by sending an email to developers@anthology.com.
