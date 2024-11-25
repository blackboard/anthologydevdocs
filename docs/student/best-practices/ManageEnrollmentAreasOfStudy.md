---
title: "Managing Areas of Study for a Student Enrollment record via APIs"
id: studentapi-enrollmentareaofstudyapi-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

<VersioningTracker frontMatter={frontMatter}/>

One of the key data points for a student enrollment period record in Anthology Student are the area of studies that are associated to the enrollment record.  Every student enrollment period record must be enrolled in a program version.  However, in many instances additional areas of study are added which bring additional requirements for the student in order to fully complete and graduate from their enrollment. It is common for students to modify associated areas of study during initial enrollment creation as well as after the enrollment record has been created.  This document will cover the details of how to manage associated areas of study to an enrollment record using the available command APIs.  Two API endpoints will be referenced in this document.  The first is the API that is used to create a new student enrollment period record - api/commands/Academics/StudentEnrollmentPeriod/enrollStudent.  The second is an API that can be used to modify the list of associated Areas of Study to an existing student enrollment period record - api/commands/Academics/updateStudentEnrollmentAreaOfStudy.

## Data model notes

StudentEnrollmentPeriod is the entity that holds the data for a student enrollment period.  StudentAreaOfStudy is the entity that stores the data for each area of study that is associated to the student enrollment.   A StudentEnrollmentPeriod can have 0, 1 or many associated rows in the StudentAreaOfStudy entity.  To retrieve area of studies that are associated to a given student enrollment period, an odata query can be executed:   ds/odata/StudentAreasOfStudy?$filter=StudentEnrollmentPeriodId eq #######  where ###### is the Id of the StudentEnrollmentPeriod record you are retrieving areas of study for. 

AreaOfStudy is the entity that stores the list of Concentrations/Areas of Studies that have been configured. To retrieve additional data for a given area of study when retrieving data from the StudentAreasOfStudy entity, expand to the AreaOfStudy navigation property in the odata query being executed. To see all of the areas of study that have been configured:  ds/odata/AreasOfStudy (NOTE: When constructing odata queries, entities must be referenced using their plural name - in this case AreasOfStudy -- not AreaOfStudy)

ProgramVersionAreaOfStudy - this entity stores the list of Areas of Study that are associated to each program version.  The areas of study that are available to select for a given student enrollment record will be restricted to only those areas of study that are configured for the program version the student is enrolled into.  To retrieve areas of study configured for a given program version: ds/odata/ProgramVersionAreasOfStudy?$filter=ProgramVersionId eq ####### where ####### is the Id of the program version you are retrieving associated areas of study for.

## Swagger documentation

To access the Swagger documentation, append 'swagger' to the end of the base URI that is used to launch the Anthology Student web client application.  Once the Swagger landing page is loaded, use the Domain and Functional Area drop down filters at the top of the swagger page to access the documentation.  To access the API endpoints mentioned above, select 'Academics' for Domain and 'Student Enrollment' for Functional Area and then select Refresh.  Find the StudentEnrollmentPeriod entity in the displayed list of entities and then click the lightning bolt icon.  The list of APIs for this entity will be listed.  You will see enrollStudent and updateStudentEnrollmentAreaOfStudy in the displayed list of operations.

![ManageEnrollmentAreasOfStudy](/assets/img/ManageEnrollmentAreasOfStudy1.png)

![ManageEnrollmentAreasOfStudy](/assets/img/ManageEnrollmentAreasOfStudy2.png)

## Request payloads

The request payload for the enrollStudent endpoint is very large as this is used for creating a new enrollment period record.  The request payload for the updateStudentEnrollmentAreaOfStudy endpoint is much smaller since this API has a single responsibility of updating associated areas of study for the existing student enrollment period record.  Both requests however contain a collection property called programVersionAreaOfStudyConfigList.  It is this property that will be the focus of this document as this is where the information for the associated areas of study is specified.  Additional notes on the request payload for updateStudentEnrollmentAreaOfStudy will also be outlined below.

programVersionAreaOfStudyConfigList[]

-  pkId – This property is only applicable when using the UpdateStudentEnrollmentAreaOfStudy endpoint and you are updating an existing area of study or removing an area of study.  This can be ignored if using the enrollStudent endpoint.  If updating or removing an area of study record for the student enrollment, then set this to the Id of the applicable row in the 	 StudentAreaOfStudy entity that is being updated/removed

-  adConcentrationId – Populate this with the Id of Area of Study being added, updated or removed.  This should only be applicable when adding a new area of study for a student. However, it is safest to populate with the applicable Id even if you are updating or removing an existing associated area of study in case there are any dependencies on this value within the API execution code.

-  code – Ignore.  Not used in execution logic

-  descript – Ignore.  Not used in execution logic

-  adMajorId – If adding new area of study and the new area of study is a child of an existing student area of study, then set this to the Id of the StudentAreaOfStudy record that the new area of student will be a child of.  This use case can exist if there is an existing area of study record for the student were the Area of Study Type is MAJOR.  Areas of Study that are Majors can have child areas of study.  This property will only be applicable for the updateStudentEnrollmentAreaOfStudy endpoint since there must be an existing StudentAreaOfStudy row that is referenced by this Id.

-  adMajorCode – Ignore.  Not used in execution logic

-  selListId – Id of the ProgramVersionAreaOfStudy entity record (see Data Model notes above) for the Program version that has the Area of Study (see adConcentrationId above) being added/updated for the student. In order to associate an area of study to the student enrollment record, the area of study must be configured as an available area of study to select for the program version the student is enrolled into.

-  typeId – Ignore. Not used in execution logic

-  typeCode – Ignore.  Not used in execution logic

-  typeDescrip – Ignore. Not used in execution logic

-  mode – 1= New area of student record is being associated,  2= Existing Area of student record is being updated,  3= Existing Area of Study is being removed.     Mode will always be 1 when using the EnrollStudent endpoint.   NOTE:  If removing an area of study from a student enrollment, the data update that will occur will be to change the value of the IsActive property on the StudentAreaOfStudy record to 0 as well as an update to the DropDate property.  There is no property in the request payload for DropDate.  The DropDate will be updated to the system date.

-  AdprogramVersionId – Ignore. Not used in execution logic

-  adCatalogYearId – Ignore.  Not used in execution logic

-  effectiveDate – Effective date of the Area of Study record for the student.  When using the EnrollStudent endpoint, this would be the StartDate of the new enrollment record being created.  When using the updateStudentEnrollmentAreaOfStudy endpoint, this would be the date that the student declared for the area of study.

### Other properties in the UpdateStudentEnrollmentAreaOfStudy request

- EnrollId - populate this with the Id of the StudentEnrollmentPeriod record you are updating areas of study for

- CampusId - populate this with the CampusId value from the StudentEnrollmentPeriod record you are updating areas of study for

- ProgramVersionId - populate this with the ProgramVersionId value from the StudentEnrollmentPeriod record you are updating areas of study for

- SchoolStartDateId - if the system setting to require start dates is set to true, then a value must be provided for this property.  To determine the value of this setting, execute this odata query:  ds/odata/CampusNexusStudentSettings?$filter=SettingName eq 'versionStartDateRequired'&$select=SettingValue.  If the value of 1 is returned, then a value for SchoolStartDateId must be provided.  The value can be determined using this odata query:  ds/odata/SchoolStartDates?$select=Id&$filter=ProgramVersionId eq ######## and StartDate eq 99/99/9999 where ####### is the ProgramVersionId value and 99/99/9999 is the StartDate value from the StudentEnrollmentPeriod record you are updating areas of study for.

- FilterTypes - In order for the API execution logic to work as desired, this property must be populated with the Id value of each row in the AreaOfStudyType entity. The property is defined as List of type int.  To see the Id values for the AreaOfStudyType entity,execute ds/odata/AreaOfStudyTypes?$select=Id 

- CatalogYearId - populate this with the CatalogYearId value from the StudentEnrollmentPeriod record you are updating areas of study for
 
- IsUpdateAreaOfStudy - make sure this is populated with 1.  If not, then no data will be updated when executing the API.


## Authorization required for this API endpoint

In order to be able to execute these API endpoints, the user that the API call is authenticating under must have the Academics - Student Enrollment Period - New task included in the list of tasks/operations that the user is authorized to.  This is done from the security console application.

![ManageEnrollmentAreasOfStudy](/assets/img/ManageEnrollmentAreasOfStudy3.png)

## Conclusion

As is usually the case, there may be additional nuances for how to properly formulate the request for these APIs in order for them to produce the desired result that are not covered within this document.  

If there are questions after reviewing this document and the corresponding swagger documentation, you can submit them by sending an email to developers@anthology.com.

<AuthorBox frontMatter={frontMatter}/>