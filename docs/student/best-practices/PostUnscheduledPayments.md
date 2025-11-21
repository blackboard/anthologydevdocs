---
title: "Post Unscheduled Payments"
id: studentapi-postunscheduledpayment-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

In order to comply with some of the 90/10 reporting requirements, it may be necessary to ensure that all payments posted to a student's ledger card are explicitly associated to a fund source. The main API endpoint used for posting payments provides the option in the request to associate the payment being posted to an expected payment for a packaged student award or post the payment and not associate it to a packaged award. When using the latter option, the payment will be posted to the ledger card and will not be associated to a fund source. This can potentially cause some challenges with providing complete and accurate data for the 90/10 reporting requirements. The API endpoint for posting "unscheduled" payments can be used to address this issue. The scope of this document will cover the details on how to utilize this API for posting unscheduled payments which ensure that each payment being posted is explicitly associated to a fund source.

## Unscheduled Payments API

The endpoint to use for posting unscheduled payments is api/commands/StudentAccounts/StudentAccountTransaction/PostAccountTransactionPayment. Posting an unscheduled payment means that the payment being posted is NOT associated to an expected disbursement record (ScheduledDisbursements entity). Instead, the fund source that the payment is associated to will be specified in the API request. The packaged award data will be created/updated within the unit of work for posting the payment. Once the payment is saved, it will be associated to the Student Award data created and thus be explicitly associated to a fund source.

### Swagger documentation

To access the Swagger documentation, append 'swagger' to the end of the base URI that is used to launch the Anthology Student web client application. Once the Swagger landing page is loaded, use the Domain and Functional Area drop down filters at the top of the swagger page to access the documentation. To access this API endpoint, select 'Student Accounts' for Domain and 'Ledger Card' for Functional Area and then select Refresh. Find the StudentAccountTransaction entity in the displayed list of entities and then click the lightning bolt icon. The list of APIs for this entity be listed including the PostAccountTransactionPayment operation.

![PostUnscheduledPayments](/assets/img/PostUnscheduledPayments1.png)

![PostUnscheduledPayments](/assets/img/PostUnscheduledPayments2.png)

This PostAccountTransactionPayment operation allows for posting a scheduled payment, adhoc payment and an unscheduled payment. The details for how to populate the request will be provided for posting an unscheduled payment. If the need is to post a scheduled payment or an adhoc payment, then it is recommended to use a different API endpoint. That endpoint is api/student-accounting/ledger-payment-transactions. Details for how to use this API can be found in the Payment Partner Overview article.

[Payment Partner Overview](https://docs.anthology.com/docs/student/best-practices/studentapi-paymentpartner-overview)

### API request details

Pertinent details for some of the properties in the request for posting an unscheduled payment are below. Additionally, an example payload is provided at the end of this section.

The base required fields in the request are AcademicYearSequence, AwardYear, BankAccountId, Description, FundSourceId, PaymentMode, PaymentType, StudentAcademicYearId, StudentEnrollmentPeriodId, StudentId, TransactionAmount and TransactionDate. Additionally, if Cashiering is turned on for the Campus that is associated to the student enrollment period record the payment is being posted for, then the CashDrawerId, CashDrawerSessionId and CashierUserId are also required.

AcademicYearSequence - this should be populated with the Sequence property value on the StudentAcademicYear row associated to the StudentAcademicYearId specified in the request (see below)

AwardYear - populate with the award year for the StudentAward record that will be created (if one does not already exist). Format is ####-## i.e. 2023-24, 2024-25

BankAccountId - Id of the Bank Account the payment will be associated to. NOTE: The row referenced in the BankAccount entity with this Id must be associated to a row in the Bank entity where CampusId equals the campus id on the Student Enrollment period record the payment is being posted for.

Description - description of the payment transaction

FundSourceId - Id of the Fund Source for this payment. A new StudentAward record will be created if a row does not already exist for the StudentEnrollmentPeriodId, FundSourceId and AwardYear provided in the request.

PaymentMode - This must be set to 2 for posting an unscheduled payment.

PaymentType - This is an Enum property. Valid values: C=Cash, E=EFT, H=Check, I=ACH, R=Credit Card, O=Other

StudentAcademicYearId - Id of the Student academic year record that the payment will be associated to. If a new StudentAward record will be created, it will be associated to the student academic year specified here

StudentEnrollmentPeriodId - Id of the Student enrollment period record the payment is being posted for

StudentId - Id of the student record the payment is being posted for

TransactionAmount - amount of the payment

TransactionDate - transaction date for payment. Specify "00:00:00" for the time portion of this value

IsNewPaymentSuccessful - This should be set to 1. This will cause unnecessary execution logic to be bypassed and avoid unexpected behavior to occur.

IgnoreTermRequired - The TermId property in the request is conditionally required dependent on configuration. There is a setting located in Settings - Student Accounts - General called "Require Term Codes". If this is set to Yes, then a term is required to be associated for transactions that are posted to the ledger card. Setting this property to 1 will override this setting and allow the payment to be posted without being associated to a term. Whether this is appropriate to use or not for overriding this will depend on the client's requirements that you are implementing this API for.

CashDrawerSessionId - Id of the Cash Drawer Session the payment will be associated to. The Cash Drawer session must be in an open state meaning the IsReconciled property on the cash drawer session record must be equal to 0.

CashDrawerId - Id of the Cash Drawer associated to the Cash Drawer Session record referenced above.

CashierUserId - Id of the user posting the payment. Typically, this would be the Id of the authenticated staff user executing this API. This user needs to be configured as a cashier in the application.

Below is a sample payload used to successfully execute this API.

![PostUnscheduledPayments](/assets/img/PostUnscheduledPayments3.png)

## Authorization

In order to execute this API, the authenticated user must be authorized to the Student Accounts - Student Account Transaction - New task which is done in the Security Console application.

![PostUnscheduledPayments](/assets/img/PostUnscheduledPayments4.png)

## Conclusion

As can be the case, there may be additional nuances for how to properly leverage this API to address a client's specific use cases that are not covered within this document.

If there are questions after reviewing this document and the corresponding swagger documentation, you can submit them by sending an email to developers@anthology.com.
