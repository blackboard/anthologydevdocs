---
title: "Payment Partner Overview"
id: studentapi-paymentpartner-overview
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

The Anthology Student API library has a number of APIs that are designed to support the most common use cases for facilitating an integration between a payment provider and the Anthology student application. The purpose of this document is to provided the details needed for a payment provider to build an integration with the Anthology Student product that supports the base use cases that are common for most payment providers. These common use cases will be discussed below providing details in how to implement utilizing the Anthology Student APIs. An additional section on authorization permissions that are required for executing the APIs will also be included.

## Common Payment vendor use cases

Common integration use cases between a payment vendor and Anthology Student are:

- Post Payments
- Post Charges and Adjustments
- Apply posted payments
- Process/post scheduled refunds
- Create a payment plan
- Update an existing payment plan
- Post misc cash receipt transactions that are not associated to a student ledger card in the SIS.

This section will outline the API endpoint(s) that can be used to satisfy each of these use cases. Additional details relevant to the execution logic for each API will be included.

To see additional details for the APIs within Student, access the Swagger output. This can be done while logged into the Student web application. Append 'swagger' to the base URI used to launch the Student application. For purposes of this document, all of the APIs that will be referenced can be found in the Swagger output by using the Type filter. Choose "Integration" from this drop down and click Refresh. All of the APIs referenced in this document will be documented in the Student Accounting and Student Payment Plan sections.

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview1.png)

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview2.png)

### Post Payment

The most basic use case for an integration between a payment provider and Anthology Student is to be able to process a payment within the payment vendor application and then post that payment to the student's ledger card within Anthology Student. At a high level, there are two different kinds of payments within the Student application. The first is a payment that is not associated with expected funding and the second is a payment that is associated to an expected disbursement. One of the features in Student is the ability to package a student for Financial Aid which results in a list of scheduled disbursements being created. Included in this are Student payment plans. A student payment plan will have 1 or more expected payments/installments created as part of the payment plan data. When posting a payment that is made against a payment plan, the payment will be associated with the expected disbursement record. Regardless of whether the payment being posted is for an expected disbursement or is not associated to an expected disbursement, the same API endpoint will be used. There are properies in the request payload that informs the API if the payment being posted is associated to an expected disbursement record or is not associated to an expected disbursement record.

The API to use for posting payments is POST api/student-accounting/ledger-payment-transactions

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview3.png)

#### Installment on Payment Plan

If a payment is being posted for an expected installment on a payment plan, then the request payload will include this information either by providing the Id of the expected installment record the payment is for (ScheduledDisbursementId property) or setting the UseNextScheduledPayment property to true. If this is not done in the request, then the API will assume that the payment being posted is NOT for an expected disbursement. If UseNextScheduledPayment property is true, then the payment being posted will be associated to the expected disbursement record for the payment plan that has a status of scheduled and the earliest expected payment date. If the amount of the payment being posted does not match the amount of the expected disbursement it is being associated to, then the expected payment schedule will be auto adjusted accordingly. If the amount of payment is less than the amount of the expected disbursement, then a new expected disbursement record with a status of scheduled will be created with an amount that is the difference between the amount that was expected and the payment amount. If the amount of the payment being posted is greater than the the amount of the expected payment it is being associated to, then the difference will be applied to the next expected payment. See examples below:

**Expected payment schedule:**

| Payment # | Expected Amount | Expected Date | Paid Amount | Status    |
|-----------|-----------------|----------------|-------------|-----------|
| 1         | $100            | 04/01/2024     | $0          | Scheduled |
| 2         | $100            | 05/01/2024     | $0          | Scheduled |
| 3         | $100            | 06/01/2024     | $0          | Scheduled |


Payment is posted and is associated to Expected payment # 1 above. Payment amount is $125. Payment schedule after API completes is as follows:

| Payment # | Expected Amount | Expected Date | Paid Amount | Status    |
|-----------|-----------------|----------------|-------------|-----------|
| 1         | $100            | 04/01/2024     | $100        | Paid      |
| 2         | $25             | 05/01/2024     | $25         | Paid      |
| 2         | $75             | 05/01/2024     | $0          | Scheduled |
| 3         | $100            | 06/01/2024     | $0          | Scheduled |

Payment is posted and is associated to Expected payment #1. Payment amount is $75. Payment schedule after API completes is as follows:

| Payment # | Expected Amount | Expected Date | Paid Amount | Status    |
|-----------|-----------------|----------------|-------------|-----------|
| 1         | $75             | 04/01/2024     | $75         | Paid      |
| 1         | $25             | 04/01/2024     | $0          | Scheduled |
| 2         | $75             | 05/01/2024     | $0          | Scheduled |
| 3         | $100            | 06/01/2024     | $0          | Scheduled |

The above auto adjust logic will execute as part of the post payment transaction unit of work. If the Payment vendor application creates and manages payment plans for students and is considered the system of record for payment plans, then the Payment Plan APIs will be utilized to push the payment plan data into Student. These APIs are designed to allow for data to be pushed into Student and replace the expected payment plan data that is auto adjusted per logic explained above keeping the payment plan data in Student synchronized with the payment plan data in the Payment provider data store.

#### Cashiering

If the school is using the Cashiering feature in Anthology Student, then a couple of additional properties in the request payload will be required. The Cashiering feature is enabled by campus. To see if cashiering is enabled for a given campus, navigate to Settings - System - Campuses. Select the campus you want to check. Choose the Student Accounts tile. The setting will be on the General tab.

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview5.png)

As a best practice, it is recommended that a cash drawer be created for exclusive use by the payment provider. After creating the cash drawer, create a cash drawer session and associate it to the user that the payment provider will be authenticating under. This user needs to be configured as a cashier user within the Staff configuration. Once the Cash Drawer is created then the Id of the Cash Drawer is the value that will be used for the CashDrawerId property in the post payment request payload. There is also the option to just create the Cash Drawer record without creating the cash drawer session. For this to work, a CashierUserId must also be specified when executing the post payment API. This Id would be the Id of the Staff user the API call is being authenticated under.

### Post Charges or Adjustments

Another common use case is to be able to post charges and/or adjustments to a student's ledger card. Many times a student will be making a payment for a fee that is charged via the Payment Vendor application. There also may be some instances where a credit adjustment will need to be posted to a student's ledger card as well.

The API to use for posting charges and credit adustments is POST api/student-accounting/ledger-chargeoradjustment-transactions

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview4.png)

The minimum required properties for this payload are StudentId, BillingTransactionCodeId, Type, TransactionAmount, TransactionDate and Description. Other properties are conditionally required dependent on Student configuration settings. For example, TermId may be required if the setting to require term when posting charges is set to true. Other time period based properties (StudentAcademcYearId, StudentAcademicYearPaymentPeriodId) may or may not need to be provided depending on the time frame(s) that the school bases revenue/refund calculations on. Clarifying if/how to populate these properties in the payload will likely need to be worked out on a case by case basis via collaboration with the institution being worked with.

### Apply Posted Payments

The apply payments endpoint is used when there is a need to explicitly specify which charge/adjustment transactions a given payment transaction will be applied to. Anthology has a feature that allows for payments to be automatically applied to charge and adjustment transactions using the auto apply configuration. If all of the institution's requirements for how payments should be applied to charges are satisfied via the configuration, then this endpoint is not needed. However, if there are cases, where the rules for how to apply payments are not fully covered via the auto payment apply configuration OR the setting to auto apply payments is turned off, then there may be a need to utilize this endpoint. If/how this endpoint is utilized will need to be clarified with the institution being worked with.

The API to use for applying payments is POST api/student-accounting/ledger-transactions-applypayments

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview6.png)

The request payload for this API is pretty straight forward. The payment or credit adjustment transaction you are applying is specified along with the charge/debit adjustment transaction ids you are applying the payment/credit adjustment transaction to. There is built in validation logic that will not allow you to apply an amount that is greater than the amount left to apply for a given charge/debit adjustment transaction.

IMPORTANT: If the institution has the setting to auto apply payments on, and a payment is applied using this API, a flag will be set on the payment and charge transactions specifying that manual applyment was done. This will prevent the applied transaction data from being overwritten by subsequent auto applyment processes that execute. The only way to edit this information will be via the manual apply page within the Student web client UI.

### Process and Post Scheduled Refunds

Many Payment providers have a capability for processing refunds that are scheduled. The concept is similar to the payment plan installment payments discussed above. A refund is owed to a student, the refund is scheduled in the Student application and then that refund is paid on or before the refund due date. The high level flow of this use case for Payment providers who process refunds is as follows:

- Retrieve batch of refunds that are due to be paid and need to be processed
- Flag the scheduled refund records that were retrieved indicating that these refunds have been selected for processing
- Process the refunds in the Payment provider software
- Post the refunds as processed back into the Student application

#### Retrieve scheduled refunds

The first step is to retrieve the scheduled refunds that need to be processed. The best way to do this is to constuct an odata query to retrieve the needed information. The scheduled refunds will reside in the Refunds entity. One of the filters needed in the query will be on the Status property. A value of 'N' in the Status property indicates that the refund is scheduled but has not yet been processed/paid. Other valid values for this property are P= Processed/Paid, V= Processed but has since been Voided and S= Selected for Processing. The other key filters needed in the OData query will be on the DueDate property which indicates the date that the refund is due. Also, there will likely need to be filtering based on the fund source the refund is for. In many cases, refunds that are being returned to Title IV fund sources are not processed by Payment providers. The StudentAward navigation property on the Refunds entity will need to be utilized to construct the filtering condition needed to filter on the fund source(s) that should be included.

#### Flag the selected refund records

The next step after selecting the refunds to be processed is to utilize an API to mark these refunds as selected for processing. This is critical to ensure the refunds retrieved in the prior step are not eligible to be processed within the Student application and/or included in a subsequent query for retrieving refunds to be processed. There is an API that allows for manipulation of the Status property on the Refunds entity.

The API to use for setting the Status value on the Refund entity is PATCH api/student-accounting/scheduled-refunds-status

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview7.png)

This API is very easy to use. There are only two units of work that occur. Change the Status on the Refund entity row from N to S or change the Status on the Refund row from S to N. There may be some times where for whatever reason the processing of the refund in the Payment provider application was not successful. For these cases, where the refund is not able to be processed in the Payment provider software, the Status on that scheduled refund record will need to be changed from Selected for processing back to Not Processed.

#### Post the Processed/Paid Refunds

After the refunds have been processed in the Payment Provider application, these refunds need to be posted in Student utilizing an API.

The API to use for posting these scheduled refunds is POST api/student-accounting/ledger-scheduled-refund-transactions

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview8.png)

It is important to note that there is another API that allows for posting refunds. However, this API is used when posting a refund to a student's ledger card that is NOT scheduled. If there is a need to post a refund that is not scheduled and has no row in the Refunds entity then use the POST api/student-accounting/ledger-refund-transactions endpoint.

The request payload for posting scheduled refunds is a collection allowing for all refunds that have been processed in the Payment provider application to be posted via a single API call. The key property that must be specified in the request for each refund posted is the RefundId value which identifies the row in the Refund entity that has been paid/posted. The high level unit of work that will occur within the execution of this API will be to post a refund transaction on the student's ledger card AND also update the Status on the Refund entity row from Selected for processing to P= Processed/Paid.

The response returned will be a collection having one element for each element that was provided in the request. The success/failure for each individual refund record provided in the request will be articulated in the response.

### Create a payment plan

Another common use case for Payment providers is to create and manage payment plans for Students. If the payment plan data is persisted in the Payment provider data store, then the Payment Provider application will be considered the system of record for student payment plan data. Because there are numerous reports and other processes in Student that have a dependency on ALL expected funding to be represented for a student, it is imperative that the payment plan data stored in Anthology Student is kept in synch with the payment plan data in the Payment Provider software. The create payment plan and update existing payment plan APIs will be used for this purpose.

The API to use for creating a new payment plan in Anthology Student is POST api/student-accounting/student-payment-plan

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview9.png)

Payment Plans can be interest bearing or non-interest bearing plans in Anthology Student. Several properties in the request payload can be ignored for non-interest bearing payment plans. The request payload needed should be able to be created fairly easily by using the property level documentation found in the swagger output.

### Update an existing payment plan

This API will be used to ensure existing payment plans are kept in sync between the Payment provider application and Anthology Student. A very common use case is when a student makes an installment payment but the amount of the payment does not match the amount of the expected installment. In these cases, the remainder of the expected payment schedule needs to be adjusted. Assuming the Payment Provider application is the system of record, this adjustment would occur in the Payment provider application. The resulting data would then be pushed into Anthology Student using the API to update an existing payment plan.

The API to use for updating an existing payment plan in Anthology Student is PATCH api/student-accounting/student-payment-plan

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview10.png)

One of the key capabilities with this API is to be able to remove ALL expected payments for a payment plan and replace them with the scheduled payments that are specified in the request. The IsScheduledPaymentsRemoved property in the request is used for this purpose. It is important to note that ONLY rows with a Status of S or C in the payment plan expected payments entity (ScheduledDisbursements) can be removed. Any expected disbursement record that has been marked as Paid will not be touched. The request payload has property level documentation and should be reviewed carefully as a guide for constructing the desired request payload for this API.

### Post misc cash receipts

Another common use case is the need to post transactions in Anthology Student that will not appear on an individual student's ledger card. These transactions are labeled in Anthology Student as miscellaneous cash receipts.

The API to use for posting a miscellaneous cash receipt is POST api/student-accounting/misc-cash-receipts

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview11.png)

One of the required properties for the request is to specify the transaction billing code that the misc cash receipt will be applied to. This controls how the transaction will ultimately be posted to the general ledger. Not all transaction billing codes are eligible to be used when posting miscellaneous cash receipts. Validation logic in this API requires that the transaction billing code specified in the request has been configured in Student to be able to be used for miscellaneous cash receipt posting. An OData query can be used to retrieve the transaction billing codes that are able to be used for miscellaneous cash receipt posting. The entity to query is BillingTransactionCodes. All rows from this entity where Usage is equal to M or A can be used.

There is also a PATCH endpoint that allows for updating a previously posted miscellaneous cash receipt transaction. Validation is in place that will not allow any updates to a miscellaneous cash receipt transaction that has already been release to the general ledger.

## Authorization

In order to execute the APIs that have been discussed above, proper authorization needs to be configured. Whether using Basic Auth or OAuth with application key to authenticate, the user context the APIs are executing under will be a user record from the Staff entity. This is the user that authorization needs to be configured for. Access to the security console application is needed in order to set the needed permissions. Unlike the Anthology Student command APIs, the API endpoints discussed above have separate explicit tasks that need to be authorized. The Anthology Student command APIs are coupled with UI tasks. In order to properly authorize an API user to execute a command API, the applicable UI task needs to be identified and added for that user. For the APIs discussed in this document that exercise is not needed. Details are outlined below.

Within the Security console, the API - Student Accounting and API - Student Payment Plan tasks should be added for the user. These 2 tasks will authorize the user to execute every operation contained within the Student Accounting and Student Payment Plan sections within the swagger document. If more refined permissions are needed and you want to authorize the execution of specific operations with Student Accounting or Student Payment Plan, then the applicable individual operations will need to be authorized. Typically, this level of granularity is not needed and authorizing the two tasks mentioned above is all that should be done.

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview12.png)

For any OData queries that will be executed, additional authorization is needed. The authorization model for the odata endpoint is to either grant permission to query all entities contained within the data model or to authorize each individual entity that data will be extracted from. Currently there are no tasks available for authorizing by business area of domain. Best practice is to NOT authorize access to the entire query data model so it will be necessary to create a list of each entity that data will be retrieved from and add the applicable operation for the user. In order to authorize at the operation level, select the role that the user is a member of. Then select Add Permissions. On the resulting page that is displayed, check the Show Operations checkbox. To make the resulting list easier to navigate, you may want to uncheck the Show Tasks, Show Built In Tasks and Show Roles check boxes. Click Apply.

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview13.png)

All of the odata query model operations are named as follows: domain + entity name (singluar) + query. So to authorize the permission to retrieve data from the BillingCodeTransaction entity, the StudentAccounts.BillingTransactionCode.Query operation would need to be added for the user.

![PaymentVendorPartnerOverview](/assets/img/PaymentVendorPartnerOverview14.png)

Once all query model operations for the list of entities are added for the user, then the authorization permissions should be complete for the user being authenticated when executing the APIs/OData queries.

## Conclusion

The purpose of this document is to provide enough information to provide a Payment provider new to Anthology Student a jump start on building an integration that satisfy common integration requirements. This document is not intended to include all of the finer points and nuances for utilizing the APIs that have been covered. If there are questions after reviewing this document and the corresponding swagger documentation, you can submit any questions by sending an email to developers@anthology.com.
