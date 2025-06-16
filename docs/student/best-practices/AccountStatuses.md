---
title: "Updating Account Statuses"
id: studentapi-updateaccountstatus-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

There is capability within Anthology Student to associate one or more account statuses with a student enrollment period record.  This makes it possible for an institution to perform various actions on groups of students based on the account status values associated.  Many times, the assignment of an account status will be triggered by an action that occurs or a specific data point.  For example, an account status of "Delinquent" may be associated with a student who has one or more expected installments for a payment plan that have not been received but have a due date in the past.  In many cases, managing the account statuses for students is a key use case that needs to be accomplished within an overall integration project.  This document will cover the details for how to effectively manage account statuses for students utilizing the available API endpoints.  

## Data model notes

The entity that stores account statuses associated with a given student is StudentAccountStatus. A couple of important points to note are that each account status is associated with a StudentEnrollmentPeriod and not a Student.   Thus, you will see a StudentEnrollmentPeriodId property on this entity but there is not a StudentId property.  Additionally, a student enrollment period can have multiple statuses assigned.  It is also important to note, that this entity can hold account status associations for two different types.   There are account statuses that are used for the Collections feature in the Student Accounts domain as well as account statuses that are utilized for the student's main ledger card account.  When configuring account statuses, there is a property that specifies how that account status will be used.  It can be configured to be used only for the Collections feature, only for the main ledger card or be used for both.  The entity that stores the account statuses that have been configured is AccountStatus.

To see the account statuses that have been configured, execute an odata query as follows:   ds/odata/AccountStatuses?$select=Id,Code,Name,IsActive,CampusGroupId,Usage

The IsActive property specifies if the record is active.  If this value is 0, then the account status is inactive and not able to be assigned to a student.  The Usage property specifies the type of account status.  As mentioned above, if the value is 'C', then it is used exclusively for the Collections feature.  If this is the case, then this status cannot be associated with a student via the updateStudentAccountStatus endpoint outlined below.   If the value is 'A' (used for main ledger card account status) or 'B' (used for both) then the account status can be assigned via the endpoint below.

## API endpoint

The API to use for managing account statuses associated to an enrollment is api/commands/StudentAccounts/StudentAccountTransaction/updateStudentAccountStatus .  

To access the Swagger documentation, append 'swagger' to the end of the base URI that is used to launch the Anthology Student web client application.  Once the Swagger landing page is loaded, use the Domain and Functional Area dropdown filters at the top of the swagger page to access the documentation.  To access this API endpoint, select 'Student Accounts' for Domain and 'Ledger Card' for Functional Area and then select Refresh.  Find the StudentAccountTransaction entity in the displayed list of entities and then click the lightning bolt icon.  The list of APIs for this entity will be displayed.  The api/commands/StudentAccountTransaction/updateStudentAccountStatus will be one of the endpoints in the displayed list.

![AccountStatuses](/assets/img/AccountStatuses1.png) 


Some important points regarding this API:

The only two properties that need to be provided in the request payload are the StudentEnrollmentPeriodId and the StudentAccountStatusList.  The StudentAccountStatusList is defined as a List of type int.  Provide the AccountStatusId for each account status that will be associated with the student enrollment period.  The other properties defined in the request can be ignored.

Account statuses are assigned at the StudentEnrollmentPeriod level and not the Student. So if a student has more than 1 enrollment period record, an initial step may need to be done to determine which enrollment period you need to associate the account status(es) to. See additional details below

An enrollment period can have multiple account statuses associated.  The logic within this API will fully replace any account statuses that are currently associated with the provided StudentEnrollmentPeriodId with the AccountStatusIds specified in the StudentAccountStatusList property. So if a student enrollment already has one account status associated and an additional account status needs to be associated, make sure the StudentAccountStatusList property includes the Id of the existing account status already associated plus the Id of the new account status being associated.

### Determining the StudentEnrollmentPeriodId

If you do not have the correct value for the StudentEnrollmentPeriodId property, then this can be determined using one of two approaches.  The prerequisite to using either of these approaches is that you must have the StudentId of the student that the account statuses are being updated for.  The first approach is to use an available API endpoint that will take the StudentId as an input parameter and return the StudentEnrollmentPeriodId of the "current" enrollment.  Anthology Student has built in logic that uses the school status and enrollment date for enrollment period records for a student to determine the "current" enrollment.  This option works well if it is uncommon for a student to have more than one enrollment record that has an Active school status at any given point in time.  The endpoint that returns the current enrollment is ds/campusnexus/Students/CampusNexus.GetCurrentEnrollmentByStudentId. To find this in Swagger, select 'Common' as the Domain and 'Students' as the Functional Area and then click Refresh.

![AccountStatuses](/assets/img/AccountStatuses2.png) 

If concurrently active enrollment records is a common scenario at an institution, then it is recommended to use the second approach which is to execute an OData query to return the enrollment records for a given StudentId.  Additional logic must be applied on the result set returned to determine which StudentEnrollmentPeriodId to associate the Account Statuses to.   This logic will depend on the requirements of the institution on what criteria/rules are in place for knowing which enrollment record is the correct enrollment to associate the account statuses to.  The basic odata query to execute for returning enrollment records for a student is ds/odata/StudentEnrollmentPeriods?$filter=StudentId eq #######&$select=Id,SchoolStatusId,EnrollmentDate,ProgramVersionName&$expand=SchoolStatus($select=Code)  where ######## is the StudentId of the student.  The specific data to return via the $select clause will depend on what data from the StudentEnrollmentPeriod entity needs to be evaluated in order to determine the correct StudentEnrollmentperiodId to associate the account statuses to.

## Authorization

In order to execute the APIs that have been discussed above, proper authorization needs to be configured. Whether using Basic Auth or OAuth with application key to authenticate, the user context the APIs are executing under will be a user record from the Staff entity. This is the user that authorization needs to be configured for. You must have access to the Security Console application in order to set the needed permissions. In order to execute the updateStudentAccountStatus API, the user must be authorized for the Student Accounts - Student Account Transaction - Edit task.

![AccountStatuses](/assets/img/AccountStatuses3.png) 

## Conclusion

There can likely be additional nuances/details around utilizing this API that are not covered within this document. If there are any questions after reviewing this document, you can submit them by sending an email to developers@anthology.com.
