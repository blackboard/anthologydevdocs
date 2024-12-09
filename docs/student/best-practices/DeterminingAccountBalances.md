---
title: "Determining Account Balances for Students"
id: studentapi-accountbalance-details
sidebar_position: 1
author: Jim Burns
published: ""
edited: ""
---

One of the common use cases for integrators is to determine an account balance for a student. There are several different types of balances that may need to be retrieved. There are overall balances such as overall account balance for the student and an overall balance for a specific enrollment record for a student. There is also a balance for a subsidiary ledger for a student. And finally, there are use cases where an account balance for a specific term for a student needs to be determined. This document will cover these use cases and provide the details on how to return/calculate these balances using the Anthology data model.

For the use cases where an overall balance for a student, enrollment or subsidiary ledger is needed, a simple odata query can be used. If the requirement is to calculate a balance for a given term, then the logic will be more complex and potentially require multiple odata queries with additional calculations needed on the returned data.

## Account Balance for a Student or Student Enrollment Period record

The overall account balance for a student is stored on the student master record (Student entity). The property that stores this balance is ArBalance. This property is recalculated every time there is any transaction posted to the student's ledger card. This balance will reflect the overall AR balance for the student regardless of which student enrollment period each individual transaction on the ledger card is associated to. To retrieve this balance you only need to know the StudentId value for the student: ds/odata/Students?$filter=Id eq ########&$select=ArBalance where ######## is the Id of the Student record the balance is being retrieved for.

The overall account balance for a student enrollment period is stored on the student enrollment period record (StudentEnrollmentPeriod entity). The property that stores this is AccountReceivableBalance. The property is recalculated every time there is any transaction posted to the student's ledger card that is associated to the StudentEnrollmentPeriod record. A Student can have multiple enrollments. The AR Balance for each enrollment will be stored in this property: ds/odata/StudentEnrollmentPeriods?$filter=Id eq #######&$select=AccountReceivableBalance where ####### is the Id of the StudentEnrollmentPeriod record the balance is being retrieved for.

## Account Balance for a Subsidiary Ledger

Subsidiary Ledgers is a feature in Anthology Student that allows for separate ledgers to be created that are isolated from the transactions posted to a student's main ledger card. Student Subsidiary ledgers are associated at the StudentEnrollmentPeriod entity level. The entity that stores the ledgers being tracked for students is StudentSubsidiaryAccount. If you want to see all subsidiary ledgers for a given student you can use the SubsisiaryAccount navigation property on the StudentEnrollmentPeriod entity: ds/odata/StudentEnrollmentPeriods?$expand=SubsidiaryAccount

Once the subsidiary ledger you need the balance for is identified, you just need to retrieve the value in the AccountBalance property on the StudentSubsidiaryAccount record.

## Account Balance for a term

Account Balances for specific terms are not persisted anywhere in the Anthology Student data model and will need to be calculated. At a high level, the calculation logic will need to isolate transactions for the specific term the balance is being calculated for and then sum the debits/credits in order to derive the balance. The logic needed for this will vary depending on how the client is utilizing the Apply Payments feature. There are configuration options that specify if payments will be auto applied to charges when posted, the effective date of the auto apply logic, details on the order of how payments are applied etc. At a high level, there are 2 key configuration data points that must be determined in order to decide the best logic to use for calculating the term balance. The first is to determine if payments are being auto applied. This is a campus specific setting. When set to auto apply, any payment or credit adjustment transaction that is posted will be automatically applied to charge transactions using the Credits Apply Order configuration. If not set to auto apply, then each payment transaction and credit adjustment transaction will have to be manually applied by the user. If this is not done, then the apply payment details will not exist for a given payment/credit adjustment transaction. Navigate to Settings - Campuses - Student Accounts to see this setting.

![AccountBalances](/assets/img/AccountBalances1.png)

The value of this setting is stored in the ApplyPaymentsMethod property on the Campus entity. To retrieve this setting value for a given campus: ds/odata/Campuses?$filter=Id eq ######&$select=ApplyPaymentMethod where ###### is the Id of the Campus the setting value is being retrieved for. Use the CampusId on the Student entity record if the scope of the balance calculation is at the Student level. Use the CampusId on the StudentEnrollmentPeriod entity record if the scope of the balance calculation is at the StudentEnrollmentPeriod level.

If the setting to auto apply is turned on, then a determination needs to be made as to if a payment is allowed to be applied to a different term than the term the payment transaction itself is associated to. This is configured within the Credits Apply Order option. To access, navigate to Configuration - Student Accounts - Credits Apply Order. This specific setting is set at the apply line item level meaning that it can vary between credit billing codes/fund sources.

![AccountBalances](/assets/img/AccountBalances2.png)

If the Basis is set to Payment Period, then any payments/credit adjustments posted for the specified fund source/credit adjustment billing code can only be applied to other charge transactions that are associated to the term that the given payment transaction is associated to. If a different Basis is selected, then the payment/credit adjustment transaction can be associated to charge transactions for different terms.

NOTE: There are some built-in rules that cannot be controlled via configuration that could cause payments to be applied to different terms even when the selected Basis is "Payment Period". This could result in an incorrect balance calculation when using ONLY the StudentAccountTransaction entity (see balance calculation logic options below) even when the configured Basis is "Payment Period". Thus it is recommended to implement the Balance calculation using BOTH StudentAccountTransaction and StudentAccountTransactionAppliedPayment entities if the setting to Auto Apply payments is set for a given campus. If the payment apply setting for a campus is "Manual/User Applied", then the best logic to use for calculating the term account balance will need to be worked out with the client. If it cannot be assumed that accurate payment apply details are stored in the StudentAccountTransactionAppliedPayment entity, then logic using ONLY the StudentAccountTransaction entity must be used.

### Balance calculation logic using ONLY the StudentAccountTransaction entity

The first step for calculating the term account balance will be to retrieve all rows from the StudentAccountTransactions entity for the term the balance is being calculated for. Additionally, if the scope of the balance calculation is the Student, then an additional filter on StudentId will be needed: ds/odata/StudentAccountTransactions?$filter=StudentId eq ####### and TermId eq 99999999 where ######## is the student id you are filtering on and 99999999 is the term id of the term the balance is being calculated for.

If the scope of the balance calculation is a specific student enrollment period, then an additional filter on StudentEnrollmentPeriodId will be needed: ds/odata/StudentAccountTransactions?$filter=StudentEnrollmentPeriodId eq ####### and TermId eq 99999999 where ######## is the student enrollment period id you are filtering on and 99999999 is the term id of the term the balance is being calculated for.

Using the result set from the above query, you can then calculate the account balance. Sum the TransactionAmount property for all rows where Type is equal to D or I. Then sum TransactionAmount property for all rows where Type is equal to C or P. Subtract this summed amount from the sum of all rows where Type is equal to D or I. This will be the term account balance.

### Balance calculation logic using BOTH the StudentAccountTransaction and StudentAccountTransactionAppliedPayment entities

The first step for calculating the term account balance will be to retrieve all charge transactions from the StudentAccountTransaction entity for the term the balance is being calculated for. Additionally, the filter needs to include whether it is for the student or a specific student enrollment period (see above). Odata query using student as the scope would be: ds/odata/StudentAccountTransactions?$$filter=StudentId eq ######### and TermId eq 99999999 and (Type eq 'I' or Type eq 'D').

Using the result set returned from the query above, sum the TransactionAmount property for all rows. This is the total amount of charges for the term. The next step is to reduce the balance by the amount of payments/credits that have been applied against each of these charges. The amount of applied payments to a given charge transaction can be determined by retrieving all rows from the StudentAccountTransactionAppliedPayment entity where AppliedToStudentAccountTransactionId equals the Id of the StudentAccountTransaction charge record being evaluated. Since multiple payments can be applied to a single charge, there may be multiple rows in the StudentAccountTransactionAppliedPayment entity that have amounts applied to the given charge transaction. Sum the AppliedAmount value for all rows returned. Perform this calculation for each charge transaction returned from the StudentAccountTransaction query above. Once the total applied amount for all charges has been calculated subtract this from the total amount of charges calculated for the term. The result is the account balance for the term.

NOTE: There is an AmountPaid property on the StudentAccountTransaction entity. The intent is that this property will store the amount of applied payments/credits that have been applied to the charge. This property can be used to greatly simplify the processing logic needed to calculate the term account balance. However, there have been instances in the past whereby this property has not always been correctly maintained and does not reconcile to the specific payment apply details in the StudentAccountTransactionAppliedPayment entity. This is why it is recommended to utilize the data in the apply payment entity itself as opposed to using the amount stored on this property.

## Authorization

In order to execute the OData queries needed for retrieving the data to calculate account balances, proper authorization needs to be configured. Whether using Basic Auth or OAuth with application key to authenticate, the user context the OData queries are executing under will be a user record from the Staff entity. This is the user that authorization needs to be configured for. Access to the security console application is needed in order to set the needed permissions.

The authorization model for the odata endpoint is to either grant permission to query all entities contained within the query data model or to authorize each individual entity that data will be extracted from. Currently there are no tasks available for authorizing by business area or domain. Best practice is to NOT authorize access to the entire query data model so it will be necessary to create an inventoried list of each entity that data will be retrieved from and add the applicable operation for the user. In order to authorize at the operation level, select the role that the user is a member of. Then select Add Permissions. On the resulting page that is displayed, check the Show Operations checkbox. To make the resulting list easier to navigate, you may want to uncheck the Show Tasks, Show Built In Tasks and Show Roles check boxes. Click Apply.

![AccountBalances](/assets/img/AccountBalances3.png)

All of the odata query model operations are named as follows: domain + entity name (singluar) + query. So to authorize the permission to retrieve data from the BillingCodeTransaction entity, the StudentAccounts.BillingTransactionCode.Query operation would need to be added for the user.

![AccountBalances](/assets/img/AccountBalances4.png)

For the queries discussed in this document, the minimum authorization for the authenticated user will be to the Student, StudentEnrollmentPeriod, StudentAccountTransaction, StudentAccountTransactionAppliedPayment, StudentAccountTransactionConfigureAppliedPayment and Campus entities. Additional entities may be needed depending on the specific use cases being implemented.

## Conclusion

As can be the case, there may be additional nuances for how to calculate account balances that best match up to the use case at hand that are not covered within this document.

If there are questions after reviewing this document, you can submit them by sending an email to developers@anthology.com.
