---
title: "Refund API Amount Validation"
id: studentapi-refundamountvalidation-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

<VersioningTracker frontMatter={frontMatter}/>

A common use case for integrators is to post a refund transaction to a student's ledger card.   The refund transaction can be a full payment reversal, a partial refund of a particular payment or a refund due to the student withdrawing from school.  A common validation message that is returned when attempting to post this refund is "Refund amount cannot exceed #####.##".  This document will provide the details on the execution logic that is generating this validation message and steps for calculating the maximum amount that is allowed to be refunded from the Anthology Student data model.   Understanding this logic will allow for the necessary corrective steps/actions to be taken to properly address the validation message being returned.

The API endpoint that is used to post an unscheduled refund is api/student-accounting/ledger-refund-transactions. This is the API where this validation message can be returned.    

## Root cause of "Refund amount cannot exceed #####.##" validation message

Validation logic exists in Anthology Student that will not allow the net amount received for a given packaged student award to be less than 0.  Additionally, the net amount received for all other payment/refund transactions that are not associated to a packaged award cannot be less than 0.  Transactions not associated to a StudentAward record are grouped by the associated Academic Year Sequence.  If the refund is being posted for a packaged award, then certain properties in the request must be populated.  The StudentAwardId property in the request will hold the Id of the StudentAward record the refund is associated to.  There is also a PaidDisbursementId property as well.   If the StudentAwardId property is populated, then the PaidDisbursementId property is optional and can be used to specify the specific received disbursement that is being refunded. If a specific disbursement is referenced with the PaidDisbursementId property, then the refund amount cannot exceed the net amount received for that disbursement.  

If the refund being posted is not for a packaged award, then the StudentAwardId property will not be populated in the request.  When this is the case, the validation logic will use the AcademicYearSequence provided in the request within the calculation to determine the net amount received.  The net amount received calculation will include all relevant transactions that are NOT associated to a StudentAward AND have an AcademicYearSequence value that matches what is provided in the request. 

A good visual aid for how this validation logic works can be found on the Refunds tab when accessing the student's ledger card in the web client UI. Once a student record is accessed in the UI, expand Student Accounts and then select the Ledger Card tile.  Then select the Refunds tab.  When attempting to post a refund or schedule a refund, the validation logic on the proposed refund amount will calculate the net amount received which is "Amount Received" - ("Amount Refunded" + "Amount Scheduled" + "Stipend Amount").  The amount of the refund attempting to be posted is then subtracted from this amount. If the result is less than 0, then the validation message "Refund amount cannot exceed....." will be generated.  Note that there will be one row displayed on the grid per StudentAward record that exists for the student.  If there are any payment transactions on a student's ledger card that are not associated to a StudentAward record, then a row will be displayed on the grid with a Fund Source label of "Student".  Also, if these payment transactions have different Academic Year sequence associations, then multiple rows will be listed -- one for each Academic Year sequence.

![RefundAmountValidation](/assets/img/RefundAmountValidation1.png)


### Amount Received

This column on the grid is the sum of all payments received for the listed fund source on the grid.  As mentioned above, all rows with a fund source label of "Student" are NOT associated to a StudentAward entity record.  Depending on how the AcademicYearSequence is associated to "Student" transactions, there may be 1 or more rows shown with this fund source.  If there are multiple rows, then this means that there are different values for AcademicYearSequence that have been associated to the "Student" fund source transactions.

### Amount Refunded

This column on the grid is the sum of refunds that have been paid/processed for the listed fund source on the grid.  The entity that stores this information is the Refunds entity.  The amount listed will also take into account any processed refunds that have been subsequently been voided.  Rows in the Refunds entity with a status of 'P' or 'V' will be included in the calculated amount for this column.

### Amount Scheduled

This column on the grid is the sum of refunds that are scheduled to be paid but have not yet been processed.  Rows in the Refunds entity with a Status of 'N' or 'S' are included in the calculated amount for this column.

### Stipend Amount

This column on the grid is the sum of processed stipends as well as scheduled stipends.  A processed stipend will have a row in the Refunds entity.  If the row in the Refunds entity is a stipend, then there will be a value in the StipendScheduleId property.  If this property is null or 0, then the row is a Refund.  A stipend that is scheduled but not yet processed will reside in the StipendSchedule entity and will have a value of 'S' in the Status property.


## Conclusion

If the "Refund amount cannot exceed......" validation message is received and the refund that is being posted is NOT for a packaged student award record, then the most likely cause of this error is that the AcademicYearSequence property is not being set correctly in the request.  As mentioned above, the amount allowed for posting for "Student" fund sources is calculated using the AcademicYearSequence as a grouping value.  So if a payment was previously posted and was associated to AcademicYearSequence of 1 but the value in the Refund API payload for AcademicYearSequence is 0, then this validation message will be returned (assuming there are no other payment transactions associated to an AcademicYearSequence of 0). 

If there are questions after reviewing this document, you can submit them by sending an email to developers@anthology.com.

<AuthorBox frontMatter={frontMatter}/>