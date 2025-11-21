---
title: "Student REST API: First Steps"
id: first-steps
categories: Student REST
author: Jim Burns
published: ""
edited: ""
---

Anthology offers a suite of education technology tools, both software and hardware. REST stands for Representational State Transfer. It is a lightweight, flexible web service architecture that allows HTTP commands to be sent to Web Applications without unnecessary overhead.

## Before You Get Started

#### Availability

Student APIs are made available exclusively to licensed Anthology member campuses. Third-party or public use of Student APIs is prohibited without the consent of Anthology.

## API Access

In order to authenticate to the Anthology Student APIs, you must have a user account created in the applicable Anthology Student environment that has been given the appropriate authorization permissions to access and execute the desired API endpoints.  For authentication, it is recommended that you authenticate using an application key. Details on these steps  are below.

#### Step 1: Request Creation of a User Account within Azure Active Directory (AAD)

Before accessing the API suite, a user account must exist within Azure Active Directory (AAD).

In most cases, users will **not have direct permissions** to create accounts within the AAD environment. Instead, the user will need to **contact the designated AAD administrator** or **IT support representative** for the applicable environment.

**Request Details to Provide:**
- **Full Name** of the user  NOTE: If the new user will be a generic user account that identifies an organization, then this is not necessary. 
- **Organization name** of the user
- **Email Address** 
- **Purpose** of the account (e.g., \"API Integration Access\")

**Next Steps After Submission:**
1. Await confirmation that the AAD account has been created.
2. Obtain the following information once the account is ready:
   - **Username** (typically the email address)
   - **Temporary Password** (if applicable)

> **Note:** Credentials should be stored securely, as they will be required during API authentication and setup steps.


#### Step 2: Create a Staff Record within the Anthology Student web client UI

After the Azure Active Directory (AAD) account has been created, a corresponding **staff record** must be created within Anthology Student.

This ensures that the AAD account is properly linked to a recognized internal user profile for authentication and authorization purposes.

Similar to step 1 above, it will be common for most users to not have the needed permissions to perform this action.  If that is the case, then a request will need to be submitted to the resource who has the permission to proceed with this action.  

Submit a request that includes the following details:

**Full name** of user or **Organization name** if a generic API user account is being created.

**AAD account user name** created in Step 1 above.

#### Step 3: Set Authorizations Using the Security Console Application

Once the staff record is created and linked to the AAD user, the appropriate **roles and permissions** must be assigned to enable API access.

This is performed using the standalone **Security Console Application** provided with the product.

Similar to Steps 1 and 2 above, it will be common for most users to not have access to the console application where authorizations are managed.  If that is the case, then a request will need to be submitted to the resource who has access to the security console application.

Submit a request that includes the following details:

**Full name** of user or **Organization name** if a generic API user account has been created. 

**AAD account user name** created in Step 1 above

**Staff Group(s)** the new staff user created in Step 2 are associated to

**List of the APIs and OData queries** that the new user needs permission to execute


#### Step 4: Create an Application Key and Associate it to the Staff Record

An **Application Key** is required for authenticating API requests securely.

The Application Key is generated and associated with the staff record created earlier to ensure that the API usage is correctly attributed and authorized.

Similar to Steps 1-3 above, it will be common for most users to not have access to the Settings area in the Student web client UI where application keys are managed. If that is the case, then a request will need to be submitted to the resource who has the permission to proceed with this action. Once the application key is generated and communicated back, each API request should include an "Authorization" key in the API request header.  The value should be specified as "ApplicationKey " and then the application key value.


**NOTE:**  It is likely that the same resource will have permissions to all of the areas mentioned above.  If this is the case, then a single request can be submitted requesting all four steps listed above be completed.  

Once the above steps have been completed, you should be able to begin to work with the Anthology Student API suite.




