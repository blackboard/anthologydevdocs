---
title: "Add a Future Course for a Student"
id: studentapi-savestudentcoursefuture-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

The StudentCourse entity in the Student data model will hold a record for all courses that a student has completed, is currently taking, is registered for and plans to take in the future. There are instances where there is a need to add a record to this entity for a course that the student plans to take in the future. Other actions that are taken on records in this entity are to register the student for a course, post a final grade for a course, drop a student from a course and unregister a student from a course. The scope of this article will be to provide the details needed for using the API to add a course that the student will take in the future. These other actions that can be performed using this API endpoint will be covered in other articles. Once a future status course is inserted/added to the StudentCourse entity, the action of registering the student for the course can then be taken at the applicable time in the future. NOTE: If the integration use case is to register a student for a course that does not yet exist in the StudentCourse entity for the student, then two API calls will be required. The first will be to add the course in a future status (scope of this document) and the second will be to register the student into the course which will be covered in another document.

The API endpoint that is used to add a future course for a student is api/commands/Academics/StudentCourse/SaveStudentCourse.

## Swagger documentation

To access the Swagger documentation, append 'swagger' to the end of the base URI that is used to launch the Anthology Student web client application. Once the Swagger landing page is loaded, use the Domain and Functional Area drop down filters at the top of the swagger page to access the documentation. To access this API endpoint, select 'Academics' for Domain and 'Course Registration' for Functional Area and then select Refresh. Find the StudentCourse entity in the displayed list of entities and then click the lightning bolt icon. The list of APIs for this entity will be listed. Find the SaveStudentCourse operation.

![SaveStudentCourseFuture](/assets/img/SaveStudentCourseFuture1.png)

![SaveStudentCourseFuture](/assets/img/SaveStudentCourseFuture2.png)

## API request details

Pertinent details for some of the properties in the request for adding a course in future status are below. Additionally, an example payload is provided at the end of this section. Because the SaveStudentCourse API endpoint is also used for registering a student for a course, unregistering a student from a course and dropping a student from a course, there will be multiple properties that are defined in the request that have no relevance to the unit of work for adding a future course for a student. These properties can be ignored. All properties that need to be populated for adding a future course will be included below.

AcademicYearId - REQUIRED: Specify the academic year sequence that this course will be associated to if applicable. If not applicable then populate with 0.

Action - REQUIRED: populate with 1. This informs the API execution logic that the action requested is to add a course in future status

CampusId - REQUIRED: populate with the CampusId of the StudenEnrollmentPeriod record the new course is being associated to

ClassSectionId - REQUIRED: populate with 0. Associating a class section is not applicable when adding a course in Future status. However, failure to set this property to 0 will result in a validation error being returned with response status code of 400.

Comments - OPTIONAL: Specify a comment/Note for this course record

CourseId - REQUIRED: The Id of the course that is being added

Status - REQUIRED: populate with "F"

StudentCourseFeeScheduleId - REQUIRED: populate with 0. Not applicable for adding a course in Future status. However, failure to set this property to 0 will result in a validation error being returned with response status code of 400.

StudentEnrollmentDpaCourseCategoryId - CONDITIONALLY REQUIRED: Provide this if the course will appear on the DPA under a specific course category. If the course is an elective and not required within a given course category then you do not need to provide this value. This is the FK to the course category record for the Student’s DPA. To see the course categories for a specific student, the entity to query is StudentEnrollmentDpaCourseCategories – ds/odata/StudentEnrollmentDpaCourseCategories?$filter = StudentEnrollmentPeriodId eq ########.

StudentEnrollmentPeriodId: REQUIRED: populate with the Id of the StudentEnrollmentPeriod record this course will be associated to

TermId: OPTIONAL: populate with Id of Term that the student plans to take this course in

### Sample JSON payload

{
"payload" : {
"academicyearid": 0,
"action": 1,
"campusId": 5,
"classsectionid": 0,
"comments": "test comment/note",
"courseid": 46,
"status": "F",
"studentcoursefeescheduleid": 0,
"studentenrollmentdpacoursecategoryid": 889,
"studentenrollmentperiodid": 257
}
}

## Authorization

In order to execute this API, the authenticated user must be authorized to the Academics - Student Course - Edit task which is done in the Security Console application.

![SaveStudentCourseFuture](/assets/img/SaveStudentCourseFuture3.png)

## Conclusion

As can be the case, there may be additional nuances for how to properly leverage this API to address a client's specific use cases that are not covered within this document.

If there are questions after reviewing this document and the corresponding swagger documentation, you can submit them by sending an email to developers@anthology.com.
