---
title: "Payment Reversals using APIs"
id: studentapi-paymentreversal-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

<VersioningTracker frontMatter={frontMatter}/>

A common use case for integrators is the need to reverse a payment received.  Alternative terminology for a payment reversal can be to void the payment, refund the entire payment or refund a portion of the payment that was received.  The correct way to handle via the Anthology Student APIs will depend on the specific use case/requirement the integrator needs to achieve.  The two APIs that will be covered within this document are api/commands/StudentAccounts/StudentAccountTransaction/voidAccountTransactionPayment and api/student-accounting/ledger-refund-transactions.  The voidAccountTransactionPayment API can be used ONLY if the entire payment is being reversed.  The ledger-refund-transactions can be used for full or partial payment reversals.  Details of using each of these APIs are outlined below.

## api/commands/StudentAccounts/StudentAccountTransaction/voidAccountTransactionPayment

This API should be used for the use case where a payment that was received is being 100% reversed.  As stated above, if the use case is to partially reverse a payment, then this API should NOT be used.  The unit of work within this API will be to post a new transaction on the ledger card that reverses the original received payment transaction.  Additionally, there is capability to post an additional charge (if configured) for any NSF fees that will be charged to the student.  See the Auto Charges option in Configuration - Student Accounts for more information on how to auto charge a NSF fee when a payment transaction is voided.

The request payload for this endpoint is quite small and simple to work with.  However, a few important notes need to be made.  First is that there is a StudentSubsidiaryAccountTransactionId property defined in the request.  This should be completely ignored.  This endpoint can ONLY be used for voiding a payment transaction on the main ledger card.  If the use case is to void a payment transaction on a subsidiary ledger, then a different API needs to be used:
(api/commands/StudentAccounts/StudentSubsidiaryAccountTransaction/voidSubsidiaryAccountPayment).  The remainder of the request needs to be populated as follows:

- StudentAccountTransactionId - set to the Id value of the payment transaction that is being voided.  This property is required and must reference a transaction that is a payment and has not previously been voided.  NOTE:  If Anthology Student is integrated with the Anthology Finance application AND the payment transaction has already been reconciled within the Bank Reconciliation feature within the Finance application, then the payment transaction will not be allowed to be voided and a validation message will be returned.

- StudentId - set to the StudentId value on the StudentAccountTransaction row that is being voided

- StudentEnrollmentPeriodId - set to the StudentEnrollmentPeriodId value on the StudentAccountTransaction row that is being voided

- Note - set to a comment that provides the reason this payment transaction is being voided.  This property is required.  If an empty string is provided, then a validation message will be returned stating this property is required.

- ContinueIfAmountLessThanRefund - validation exists within the API that will recalculate the net amount received for the StudentAward record that the payment transaction being voided is associated to if applicable.  If the StudentAwardId property on the StudentAccountTransaction row being voided is null or 0, then this validation logic is not applicable.  If the net amount received for the StudentAward will be less than 0 after this payment is voided, then setting this property to 0 in the request will prevent the payment from being voided and return a validation message.

- IsPreviousYear - if the payment transaction being voided was reported on a 1098T tax form for a prior year, then set this value to 1.

### Other Notes

If the Fund Source Security feature is being used and the payment transaction being voided is associated to a StudentAward record (see above), then the user that the API call is being authenticated under must have Void permission set for the fund source associated to the StudentAward record. If not, then a validation message will be returned and the payment transaction will not be able to be voided.

![PaymentReversal](/assets/img/PaymentReversalUsingAPI1.png)

If the payment transaction being voided is associated to a payment plan, then the payment plan will beadjusted to reflect the voided payment transaction as part of the unit of work.  Total amount received towards the payment plan will be reduced.  Additionally, the payment installment schedule will also be updated to show the expected payment(s) the payment being voided was associated to as being expected and not received.

## api/student-accounting/ledger-refund-transactions

This API can be used to partially or fully reverse a payment.  If fully reversing a payment, it is important to understand the different behavior when using this API verses the void payment transaction endpoint discussed above.  The key difference is that if reversing a payment received for a payment plan, there will be no logic executed within this API that will auto adjust the installment payment plan schedule.  Although the total amount refunded for the payment plan header record (StudentAward entity) will be updated, the detailed payment schedule will not.  Therefore, if a full payment that was made against a payment plan is being reversed, then it is recommended to use the VoidAccountTransactionPayment API discussed above.  

This API endpoint is well documented in the Swagger file.  Thus, details on how to populate the request payload will not be provided here.  To access this API in Swagger, select 'Integration' in the Type dropdown and then click Refresh.

![PaymentReversal](/assets/img/PaymentReversalUsingAPI2.png)

Select Student Accounting and then you will see the ledger-refund-transactions endpoint towards the middle of the page.

![PaymentReversal](/assets/img/PaymentReversalUsingAPI3.png)

A common validation message that is received when using this API endpoint is "Refund amount cannot exceed .......".  There is another article (Refund Amount API Validation) that explains the details behind this validation message and the steps needed to resolve.


## Authorization

In order to execute the APIs that have been discussed above, proper authorization needs to be configured.  Whether using Basic Auth or OAuth with application key to authenticate, the user context the APIs are executing under will be a user record from the Staff entity.  This is the user that authorization needs to be configured for.    Access to the security console application is needed in order to set the needed permissions.  In order to execute the VoidAccountTransactionPayment API, the user must be authorized for the Student Accounts - Student Account Transaction - Edit task.

![PaymentReversal](/assets/img/PaymentReversalUsingAPI4.png)

In order for the user to execute the ledger-refund-transactions API, the user must be authorized to the API - Student Accounting task.

![PaymentReversal](/assets/img/PaymentReversalUsingAPI5.png)


## Conclusion

There can likely be additional nuances/details around utilizing the these APIs that are not covered within this document.  If there are any questions after reviewing this document, you can submit them by sending an email to developers@anthology.com.

<AuthorBox frontMatter={frontMatter}/>