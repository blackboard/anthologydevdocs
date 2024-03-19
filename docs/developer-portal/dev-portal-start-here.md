---
title: 'Start here'
id: 'start-here'
categories: Developer Portal
published: '2023-05-09'
edited: '2024-03-19'
sidebar_position: 1
author: Davey Herrera
---

<VersioningTracker frontMatter={frontMatter}/>

On this page learn about the Anthology Developer Portal. Learn how to register for and navigate in the Portal. Selecting a navigation link on the side panel of this page takes you to that section.

## What is the Anthology Developer Portal?

The [Anthology Developer Portal](https://developer.anthology.com) is for anyone interested in developing integrations with the Anthology product portfolio. Find information about our REST APIs, our developer-facing documentation, and Portal-related announcements.

Create an account to register an application. Registration is a required step for testing and releasing your integration.

> Contact us at developers@anthology.com for any issues related to integrations.

## Navigating the Anthology Developer Portal

When you enter our developer portal, you will find several links starting from the top left. Select an item in this list for more details and instructions.

1.  **Developer Documentation.** Directs you to docs.anthology.com.
2.  **Explore APIs.** Directs you to our Learn, Ally, or student Swagger for up-to-date lists of APIs.
3.  **Sign up.** Create a brand-new Developer Portal account.
4.  **Log in.** Log in to your existing Developer Portal account.
5.  **Explore (Browser APIs).** Another way to navigate to our Learn, Ally, or student Swagger.
6.  **Sign up to manage your applications.** Another way to create a brand-new Developer Portal account.

![Developer portal links enumerated](/assets/img/dev-portal-start-here-1.png)

### Developer Documentation

Anthology’s Developer Documentation (which includes this page) helps you explore Anthology’s product resources. It includes tutorials, sample code, articles, and API references. For an overview, visit https://docs.anthology.com/docs/site-intro.

### Explore APIs

Explore Public APIs for:

- [Ally](https://developer.anthology.com/portal/displayApi/Ally)
- [Learn](https://developer.anthology.com/portal/displayApi/Learn)
- [Student](https://developer.anthology.com/portal/displayApi/Student)

Each link directs you to a Swagger that displays all available APIs and their endpoints. Swagger is a suite of open-source tools for API developers from SmartBear Software. To learn more about how Swaggers work, visit [Swagger’s documentation](https://swagger.io/docs).

### Sign up for a new account

If you do not already have a Developer Portal Account, select **Sign up**.

A modal window is displayed that contains our Terms and Conditions. Please note that sometimes tracking blockers or ad blockers will disable this window. Turn off these blockers before signing up for a Developer Portal account.

Once you review the Terms & Conditions, select **I Agree**. Selecting **I Decline** will close out the window, and you will not move forward with account set up.

![Developer portal terms and condition window](/assets/img/dev-portal-start-here-3.png)

when you select **I Agree**, a form appears for user data input. Add the following data:

- Email address
- Password
- First name/Company Name
- Last name/Company Name

For your password, use the following rules:

- Use between 12-32 characters
- Use at least 1 uppercase letter [A, B, C, ...Z]
- Use at least 1 lowercase letter [a, b, c, ...z]
- Use at least 1 number [0, 1, 2, ...9]
- Use 1 special character (!, $, #, %...)

<PasswordChecker />

What you enter into the **First Name** and **Last name** fields is what is displayed on Blackboard Learn to identify your integration. Entering a company name in the name fields can be done in this way:

- **First name:** Anthology
- **Last name:** Inc.

Confirm your identity in the CAPTCHA box. Then select **Create Account**.

If you are encountering issues when you select **Create Account**, make sure you have disabled tracking and ad blockers on your device.

> If this is a company account, We suggest you use an email everyone on your team has access to.

![Developer portal sign up form](/assets/img/dev-portal-start-here-4.png)

Once you have successfully created your account, you will receive an email that gives information about our Documentation, Community, Partnerships, GitHub, and about our Amazon Machine Images [AMIs](https://docs.anthology.com/docs/rest-apis/learn/sandbox/developer-ami).

Once you have created your account, you will be presented with a page that looks like this:

![Developer portal first page after sign up](/assets/img/dev-portal-start-here-5.png)

### Log in on your account

If you have an existing account, select **Log In**. A modal window is displayed to enter your email and password. If you have forgotten your password, select **Reset password**. Enter your email address, and you will receive an email with a link to reset it.

Please note that you will be automatically signed out of your account after 60 minutes of inactivity. If this happens, simply log in again.

![Developer portal login modal window](/assets/img/dev-portal-start-here-6.png)

#### Managing your Developer Portal account

When your account is created and you have logged in, you will notice that the top menu contains several new items.

1. **My Applications.** Manage your registered applications here.
2. **My Groups.** Manage your groups here.
3. **Bell Icon (🔔).** View Notifications in the Developer Portal. Select 🔔 to see your notifications.
4. **My Account.** Select **My Account** to review or edit your information. You are not able to edit your email (Anthology also cannot change this email). Your password can be reset by selecting **Change password**.

   ![Developer portal menu when logged in](/assets/img/dev-portal-start-here-12.png)

### Browse APIs

When you click the Browse APIs you will be redirected to our Swagger for APIs: [https://developer.anthology.com/portal/displayApi](https://developer.anthology.com/portal/displayApi)

#### Overall Swagger API structure

This applies to our Learn, Ally and Student APIs that user Swagger for documentation.

1. **Version Selector.** This defaults to the the latest supported version. The dropdown menu also contains older versions and newer, not-yet-supported versions.
2. **Link to JSON version.** This is a JSON version of the Swagger page. The JSON version can be used to import all endpoints in a program such as Postman.
3. **Topic Title.** Group of APIs related to that specific topic. You will find APIs divided by group with different methods.
4. **API method.** Learn more about [API methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
5. **API endpoint.** Read about endpoint structure further down the page.
6. **Endpoint name.** This is also known as Summary.
   ![Developer browse APIs endpoints](/assets/img/dev-portal-start-here-14.png)

#### Endpoint structure

1. Select the arrow to expand details about the API endpoint.
2. The field below the endpoint listing gives a short description of what each endpoint returns.
3. The field below the short descriptions lists entitlements that the endpoint requires. For more information, visit Mapping entitlements to enrollments.
4. The field in the middle of the page lists limitations on the endpoint.
5. The bottom lists the version of Learn when this endpoint became available.

![Endpoint structure](/assets/img/dev-portal-start-here-15.png)

#### Endpoint parameter structure

1. Beneath the **Name** is the name of the query parameter. The query parameter must be used in the same way it is written here.
2. Beneath the query parameter describes three things:

   1. Type of value
   2. Character limit
   3. Type of parameter (either query parameter or path parameter).

3. Beneath **Description** is a description of the parameter.
4. The label next to **Since** lists the version of Blackboard Learn when the parameter was made available.
5. Beneath the version indicator is a field that lists **Available values** when the parameter allows specific values.

![Endpoit parameter values](/assets/img/dev-portal-start-here-16.png)

#### Endpoint response structure

1. Beneath **Code** lists the HTTP response code.
2. Beneath **Description** lists the message result of the HTTP code.
3. You can toggle between **Example Value** and **Model**. Selecting **Example Value** displays an example of the JSON object (shown as item 4 in the screenshot). Selecting **Model** displays a data dictionary of the response.
4. Example of the result as application/json

![Response structure](/assets/img/dev-portal-start-here-17.png)

#### Endpoint response model structure

1. When you select **Model** you are shown a data dictionary.
2. Data dictionary of the result, which is available for all http codes. The data dictionary contains: Attribute value, value type, and description of the value of the attribute.
3. **Attribute value**
4. Type of value it returns and boolean of readOnly.
5. Description of the value of the attribute.

![Response model](/assets/img/dev-portal-start-here-18.png)

<AuthorBox frontMatter={frontMatter}/>
