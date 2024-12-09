---
title: "Managing Class Sections via APIs"
id: studentapi-classsectionapi-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

Creating and managing class sections is a fundamental requirement for the Academics domain within Anthology Student. Several different use scenarios exist whereby external applications have a need to create and update data for a class section. This data can be the class section data itself or peripheral data such as class section meeting schedules, instructor assignments to a class section, meeting location data, cross referenced class sections etc. This document will outline the various APIs available within Anthology Student that can be utilized to manage class section data.

This document will cover the following endpoints:

api/commands/Academics/ClassSection/SaveNew
api/commands/Academics/ClassSection/Save
api/commands/Academics/ClassSection/SaveClassSectionPeriods
api/commands/Academics/ClassSection/SaveInstructorAndPortalOptions
api/commands/Academics/ClassSectionMeetingDate/SaveNew
api/commands/Academics/ClassSectionMeetingDate/Save
api/commands/Academics/CrossListClassSection/SaveCrossListClassSection

## Data model notes

There are multiple entities that store the data for class sections. Below is a list of the relevant entities that will be updated within the API endpoints this document will cover.

ClassSection - This is the main entity for class section data. There will be 1 row per class section stored in this entity. All other entities listed are child entities and will be associated to this entity via the ClassSectionId property or another Id property for an entity that is associated to the ClassSection record via the ClassSectionId property.

ClassSectionTerm - This entity holds the term that the class section is offered in. There is a separate entity for this because at one point in time it was possible for a class section to be associated to more than 1 term. This is no longer the case. So, each ClassSection instance will have 1 associated row in this entity. The TermId will hold the Id of the term the class section is being offered in.

ClassSectionSecondaryInstructor - This entity will store the secondary instructors associated to the class section. The primary instructor is stored in the InstructorId property on the ClassSection record. If there are any additional instructors to assign to the class section besides the primary instructor, they will be stored in this entity.

CrossListClassSectionGroup, CrossListClassSection - If class sections are cross listed with each other, then these entities will store the details of the cross listing. The CrossListClassSectionGroup will store the header record for the group of class sections cross listed with one another. The CrossListClassSection entity will store one row for each class section in the group of cross listed class sections.

ClassSectionInstructorAttribute - If utilizing the instructor attributes feature, then this entity will be populated with the associated attributes for each instructor assigned to the class section.

The entities listed below will hold data related to class section meeting schedules and individual class section meetings. For class sections that are student self paced and do not have any scheduled meetings where all registered students are required to attend, then there will likely be no data in the entities listed below.

ClassSectionMeetingPattern - This entity will hold one row for each recurring meeting pattern that is specified for a class section. When choosing a meeting pattern, the user can either select from a pre-configured meeting pattern (ds/odata/MeetingPatterns) or create one on the fly. If selected from one of the configured meeting patterns, then the MeetingPatternId property will store the Id of the MeetingPattern row that was selected. The value of the Type property will be 'L'. If a meeting pattern is entered on the fly, then the MeetingPatternId property will store the Id of the ClassSectionCustomMeetingPattern row that stores the summary data of the meeting pattern entered (see below). The value of the Type property will be 'D'. IMPORTANT NOTE: There are two navigation properties defined that both use the MeetingPatternId property. The MeetingPattern navigation property expands to the MeetingPattern entity. The CustomMeetingPattern navigation property expands to the ClassSectionCustomMeetingPattern entity. In order to retrieve expected result sets, you MUST use a filter on the Type property. When utilizing the MeetingPattern navigation property, you need to filter on rows where Type equals 'L'. When utilizing the CustomMeetingPattern navigation property you need to filter on rows where Type equals 'D'.

MeetingPattern, ClassSectionCustomMeetingPattern - these entities store meta data for the recurring meeting pattern. Days of week meetings will be on, when does recurring meeting pattern start relative to class section start date, duration of recurring meeting pattern etc. As discussed above, the pre-configured meeting patterns will be stored in the MeetingPattern entity. Recurring meeting patterns created on the fly while building out a class section will be stored in the ClassSectionCustomMeetinPattern entity.

ClassSectionMeetingSchedule - This entity will hold one row for each day of the week specified in each of the recurring meeting patterns configured for the class section. This is the entity that stores the detail of each recurring meeting such as Instructor, Length of meeting, start/end time of meeting, location of meeting and day of week that the meeting occurs on. The DayOfWeek property specifies which day of the week the recurring meeting will occur. This is an Enum with the following values: 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday

ClassSectionMeetingDate - this entity stores 1 row for each meeting instance for a class section. When a meeting pattern is specified for a class section, the daily meeting dates will be derived from the meeting patterns and 1 row per scheduled meeting will be inserted into to this entity. Additional meeting date records can be added and/or existing meeting date records can be edited.

## Swagger documentation

To access the Swagger documentation, append 'swagger' to the end of the base URI that is used to launch the Anthology Student web client application. Once the Swagger landing page is loaded, use the Domain and Functional Area drop down filters at the top of the swagger page to access the documentation. To access the API endpoints mentioned above, select 'Academics' for Domain and 'Class Section Scheduling' for Functional Area and then select Refresh. Find the ClassSection, ClassSectionMeetingDate and CrossListClassSection entities in the displayed list of entities and then click the lightning bolt icon. The list of APIs for each of these entities will be listed. Find the applicable API operation in the displayed list.

![ManageClassSections](/assets/img/ManageClassSections1.png)

![ManageClassSections](/assets/img/ManageClassSections2.png)

## Request payloads

### Creating and Updating a ClassSection record

api/commands/Academics/ClassSection/SaveNew
api/commands/Academics/ClassSection/Save

The request payload for these endpoints is the ClassSection entity. As a best practice, when using these endpoints, the api/commands/Academics/ClassSection/Create should be used in conjunction with SaveNew and the api/commands/Academics/ClassSection/Get should be used in conjunction with Save. See "Tips for Using the Get and Save API Operations" and "Tips for Using the Create and SaveNew API Operations" articles for more info.

The minimum required properties for saving a new class section is listed below:

- CampusId - populate with Id of campus the class section is being offered at

- CourseCode - populate with the course code of the class section

- CourseId - populate with the Id of the course of the class section

- DeliveryMethodId - populate with the Id of the Delivery Method of the class section. Must be a valid reference to a row in the DeliveryMethod entity.

- EndDate - populate with the end date of the class section

- EnrollmentStatusClockHours, EnrollmentStatusCreditHours - populate with the number of credits and/or clock hours that will be used in the enrollment status (i.e. Full Time, Half Time etc.) calculation for a student. In the vast majority of cases, these values are inherited from the EnrollmentStatusClockHours and EnrollmentStatusCreditHours stored on the associated Course entity record (see CourseId above).

- EntityState - populate with 0 if adding a new class section. 2 if updating an existing class section

- Id - populate with -1 if adding a new class section. Existing Id value of row if updating a class section.

- InstructorId - Id of Staff record for the primary instructor of the class section

- IsActive - populate with 1 if adding class section

- MaximumStudents - populate with max students allowed to be registered in class section

- PassFailSetting - populate with 1 if NOT pass/fail, 2 if class section is pass/fail, 4 if it is student choice

- PostAttendanceType - specify the type of attendance entry that will occur for this class section. Valid Values: P= Only Time Present will be entered A= Only Time Absent will be entered T= Both Time Present and Time Absent will be entered N= No Attendance will be entered

- SectionName - populate with the course title

- StartDate - populate with the start date of the class section

- Terms - this is a collection property. Only 1 element will be added.

  - TermId - Populate with Id of term class section is being offered in.

    - ClassSectionId - populate with -1

    - EntityState - populate with 0

There are numerous other properties defined for the class section entity. These are optional. Depending on the specifics of the client requirements, some of the these optional properties may need to be populated in order to achieve the desired result when executing these APIs.

### Managing Meeting Schedule data

api/commands/Academics/ClassSection/SaveClassSectionPeriods

This endpoint should be used for updating any aspect of the meeting schedule for the class section. The request payload includes some complex type properties. Details of how this payload should be populated are below.

- IsContactHoursConfirmed - set this property to 1 if you want to override validation done on total contact hours scheduled for the class section. There is capability in Anthology Student to require the total daily meeting schedule for a class section to equal the expected contact hours total for the course the class section is for. If set to 0 and there is a conflict found, then a validation message will be returned.

- IsRequireLDAConfirmed - this property does not impact execution logic within the API. However, if set to 0 and you are updating a meeting schedule for a class section AND at least 1 day of attendance has been posted for a scheduled meeting date, a validation message of type Warning will be returned in the response. It is recommended that you populate this with 1 so that the warning message will not be included in the response so as to not cause any unnecessary confusion.

- IsScheduleConflictsConfirmed - set this property to 1 if you want to override any scheduling conflicts that are found and save the meeting schedule data as provided in the request. Conflict validation logic will check for conflicts in building/room scheduling as well as instructor conflicts. If set to 0, then the validation logic will execute and return a validation message if any conflicts are found.

- ClassSectionId - populate with Id of class section the meeting schedule data is being updated for

- ClassSection - this property is of type ClassSectionEntity and should be ignored. There are no dependencies within the execution logic of the API on any data in this property

- MeetingPatterns - this property is a collection of type ClassSectionMeetingPatternEntity.

       - Id - populate with 0 if a new instance of ClassSectionMeetingPatternEntity is being created.  Populate with Id of ClassSectionMeetingPatternEntity record if an existing instance
              is being updated.

       - MeetingPatternId - if the recurring meeting pattern is a pre-configured meeting pattern, then set this to the Id of the MeetingPattern entity instance being used.  If a new
                            recurring meeting pattern is being created, then set to 0.  If an existing meeting pattern is being updated that was not created from a pre-configured meeting
                            pattern, then set to the Id value of the ClassSectionCustomMeetingPatternEntity that is being updated

       - Type - If the recurring meeting pattern is a pre-configured meeting pattern, then set to 'L'.  If the recurring meeting pattern is not created from a pre-configured meeting
                pattern, then set to 'D'.

       - ClassSectionId - populate with Id of class section the meeting schedule data is being updated for

       - DayOfWeekRooms - this is a complex type and is a collection.  One element should be populated in this property for each day of week in the recurring schedule meeting pattern

              - DayOfWeek - This is an Enum with the following values:  1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday

              - BuildingId - populate with Id of Building that the scheduled meeting will occur in

              - RoomId - populate with Id of Room that the scheduled meeting will occur in

              - LocationId - populate with Id of Location that the scheduled meeting will occur in

              - PrimaryInstructorId - populate with Id of primary instructor that will be teaching this class section meeting

              - SecondaryInstructorList - this is collection property and should be populated with one element for each secondary instructor that will be teaching this class section
                                          meeting.  Only the InstructorId property in the element needs to be populated.

       - MeetingPattern - this is a complex type - ClassSectionCustomMeetingPatternEntity

              - StartTime - populate with the start time of the class section scheduled meeting.  This is a datetime type.  However, only the time portion of the value is relevant.
                            Populate the date portion of the value with "1899/12/30".

              - EndTime - populate with the end time of the class section scheduled meeting.  This is a datetime type.  However, only the time portion of the value is relevant. Populate
                          the date portion of the value with "1899/12/30".

              - IsMeetingOn properties - a boolean type property exists for each day of the week.  Set the applicable bool properties to 1 for the days of the week that the class section
                                         will be meeting on

              - Id - if the recurring meeting pattern is a pre-configured meeting pattern, then set this to the Id of the MeetingPattern entity instance being used.  If a new recurring
                     meeting pattern is being created, then set to 0.  If an existing meeting pattern is being updated that was not created from a pre-configured meeting pattern, then set
                     to the Id value of the ClassSectionCustomMeetingPatternEntity that is being updated

              - MeetingLength - set to the duration of the scheduled meeting in minutes

              - PatternType - W= Weekly, M= Monthly

              - Frequency - set to frequency of pattern type.  For example, if pattern type is Weekly and recurring pattern is the same every week, then Frequency would be set to 1. If
                            recurring pattern is every other week, then Frequeny would be 2.

              - RecurrenceStartWeeks - if recurring meeting pattern will start sometime AFTER the class section begins meeting, then specify the number of weeks after the start of the
                                       class section when the recurring meeting pattern will begin.  If the meeting pattern begins when the class section starts, then set this value to 0.

              - RecurrenceEndNumber - if recurring meeting pattern will occur only a set number of times and not carry through to the end date of the class section, then set this value
                                      to the number of times it will occur. Otherwise, set to 0.

### Managing Secondary Instructor Assignments and Instructor attribute data

api/commands/Academics/ClassSection/SaveInstructorAndPortalOptions

This endpoint should be used to manage any changes in secondary instructor assignments or any applicable instructor attribute associations for this specific class section. NOTE: Although the primary instructor assignment is managed in the ClassSection SaveNew and Save endpoints discussed above, the class section instructor attribute data for the primary instructor is managed within this endpoint. Additionally if using the Faculty Workload Management module, the Staff Position Assignment can also be set for the primary instructor using this endpoint.

When calling this endpoint, make sure the request is populated with each secondary instructor that should be assigned to the class section. This API behaves like a REST PUT action. Whatever is provided in the request will overwrite the existing secondary instructor assignments for the class section.

- ClassSectionId - set to the Id of the class section that instructor information is being updated for

- HideFaculty - ignore. not used in API execution logic

- HideLocation - ignore. not used in API execution logic

- Instructors - this is a collection property and will hold one element per instructor that is assigned to the class section. The primary instructor for the class section should always be in element 0.

       - Id - set this to the Id of the StaffEntity instance for the Instructor that is assigned to the class section

       - CanPostAttendance - Only applicable if this is a secondary instructor.  If set to 1, the instructor will be able to post attendance for the class section.

       - CanPostFinalGrades - Only applicable if this is a secondary instructor.  If set to 1, the instructor will be able to post final grades for the class section.

       - CanPostLessons - Only applicable if this is a secondary instructor.  If set to 1, the instructor will be able to post lesson scores for the class section.

       - StaffPositionAssignmentId - Only applicable is using the Faculty Workload Management module.  Set to the Id of the StaffPositionAssignmentEntity instance associated to this
                                     instructor for this class section.

       - Attributes - this is a collection of int.  Specify the Id of each InstructorAttribute (ds/odata/InstructorAttributes) that is associated to the instructor for this class section.

### Managing data for individual scheduled class section meetings

api/commands/Academics/ClassSectionMeetingDate/SaveNew
api/commands/Academics/ClassSectionMeetingDate/Save

These endpoints allow for the creation and update of individual class section meeting dates. This is useful if there are any exceptions to the class section recurring meeting schedules for the class section.

The request payload for these endpoints is the ClassSectionMeetingDate entity. As a best practice, when using these endpoints, the api/commands/Academics/ClassSectionMeetingDate/Create should be used in conjunction with SaveNew and the api/commands/Academics/ClassSectionMeetingDate/Get should be used in conjunction with Save. See "Tips for Using the Get and Save API Operations" and "Tips for Using the Create and SaveNew API Operations" articles for more info.

- IsMeetingScheduleConflicted - ignore. The value of this property is manipulated within the API execution logic

- IsMeetingScheduleConflictOverridden - set to 1 if you want to override any scheduling conflicts that are found and save this meeting date record as provided in the request. Conflict
  validation logic will check for conflicts in building/room scheduling as well as instructor conflicts. If set to 0, then the validation logic will
  execute and return a validation message if any conflicts are found.

- IsInstructorMeetingScheduleConflicted - ignore. The value of this property is manipulated within the API execution logic

- ClassSchedPeriodDayConflictList - this is a complex type with multiple properties. This property has no bearing on any of the API execution logic so this can be ignored.

- InstructorId - Id value of instructor record in the Staff entity that is teaching this class section meeting

- InstructorList - This is an array of type int. Add 1 element per instructor that is teaching the class meeting. Populate with the Id value of instructor record in the Staff entity.
  This allows for more than 1 instructor to be assigned for a single class meeting. If only 1 instructor is teaching the meeting, then this will have 1 element and be
  populated with the Id value that the InstructorId property above is populated with

- LoadTypeIdList - This is an array of type int. Only applicable if using the Faculty Workload Management module. Populate with one element per load type that will be associated to this
  class section meeting. The Id value will reference the applicable row in the WlmLoadTypeEntity.

- BuildingId - Id value of Building where class meeting will take place

- ClassSectionId - Id value of the ClassSection the meeting is being added/updated for

- ClassSectionMeetingPatternId - if adding a new meeting record, set this to null. If updating an existing meeting record, set this to the value returned when executing the Get command
  API as the first step prior to executing the Save endpoint. This value should never be modified for an existing record.

- EntityState - If adding new meeting record, set to 0. If updating an existing meeting record, set to 2.

- Id - If adding a new meeting record, set to -1. if updating an existing meeting record, set to the Id of the ClassSectioMeetingDateEntity record being updated

- IsManualEdit - if adding a new meeting record, set to 1. If updating an existing meeting record, set this to the value returned when executing the Get command API as the first step
  prior to executing the Save endpoint. This value should never be modified for an existing record.

- IsMeetingEdit - set to 0

- LengthMinutes - set to duration of class meeting in minutes

- LocationId - Id value of Location where class meeting will take place

- MeetingDate - date of meeting. This is DateTime type. However, only the date portion of the property value is relevant. i.e. "2024/05/28 00:00:00"

- Note - if cancelling a class meeting, provide text for reason meeting is being cancelled

- RoomId - Id value of Room where class meeting will take place

- StartTime - time the class meeting will begin. This is DateTime type. Set date portion of property to the MeetingDate above and the Time portion to the start time of the class
  meeting. i.e. "2024/08/29 07:30:00"

- Status - If adding a new meeting record, set to 'S'. If cancelling a class meeting, set to 'C'. If updating an existing record without cancelling, then do not change the value. Use
  the value returned when executing the Get command API as the first step prior to executing the Save endpoint.

### Crosslisting Class Sections

api/commands/Academics/CrossListClassSection/SaveCrossListClassSection

This endpoint is used to update cross listing information for class sections.

- ClassSectionId - Id value of Class Section being cross listed

- CrossListClassSections - this property is an array of type int. Add 1 element for each class section the ClassSectionId above is being cross listed with. Populated with the Id value
  for each class section being cross listed.

- TermId - Id value of Term the ClassSectionId above is associated to

- EntityState - set to 2

NOTE: When this API is executed, the class sections specified in the CrossListClassSections property will replace the class sections that are currently cross listed with the specified
ClassSectionId. Make sure that ALL of the class sections that should be cross listed with the specified ClassSectionId are provided in the CrossListClassSections property even if some are already saved as cross listed class sections.

## Authorization required for these API endpoints

In order to be able to execute the API endpoints covered in this document, the user that the API call is authenticating under must have the Academics - Class Scheduling - Edit task included in the list of tasks/operations that the user is authorized to. This is done from the security console application.

![ManageClassSections](/assets/img/ManageClassSections3.png)

## Conclusion

As is usually the case, there may be additional nuances for how to properly formulate the request for these APIs in order for them to produce the desired result that are not covered within this document.

If there are questions after reviewing this document and the corresponding swagger documentation, you can submit them by sending an email to developers@anthology.com.
