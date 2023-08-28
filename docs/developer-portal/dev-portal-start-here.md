---
title: "Start here"
id: "start-here"
categories: Developer Portal
published: "2023-05-09"
edited: "2023-05-09"
sidebar_position: 1
author: Davey Herrera
---
<VersioningTracker frontMatter={frontMatter}/>

## What is the Anthology Developer Portal?

The [Anthology Developer Portal](https://developer.anthology.com) is for anyone interested in developing integrations with the Anthology product portfolio. At the Portal you will find information about our REST APIs, our Developer facing documentation, and Developer Experience and Portal related announcements.

When you create an account you will be able to register an application which is a required step for testing and releasing your integration.

> Please remember that you can always write us to developers@anthology.com for any issues related to integrations!

## Navigating the Anthology Developer Portal

When you enter our developer portal, you will find several links starting from the top left:

1.  **Navigate to our developer documentation**
    - Here you will be redirected to this page, to docs.anthology.com
2.  **Explore our APIs (Ally, Learn and Student)**
    - You will be redirected to our Ally, Learn or Student Swagger.
3.  **Sign up for a new Developer Portal Account**
    - Here you can create a brand new developer portal account.
4.  **Log in to your existing Developer Portal Account**
    - Here you can login into your existing developer portal account
5.  **Browse Learn API**
    - You will be able to navigate our Learn API swagger.
6.  **Sign up for a new Developer Portal Account**
    - Here you can also create a brand new developer portal account

![Developer portal links enumerated](/assets/img/dev-portal-start-here-1.png)

Let's review each one of this buttons! except the first one... Since you are already there!

### Explore APIs

Here you will be able to explore _some_ of our products Public APIs:

1. [Ally](https://developer.anthology.com/portal/displayApi/Ally)
2. [Learn](https://developer.anthology.com/portal/displayApi/Learn)
3. [Student](https://developer.anthology.com/portal/displayApi/Student)

Each one of those links will send you to a Swagger ([what is a swagger?](https://swagger.io/)) that will allow you to see all the available endpoints. We will explain how that works here.

** todo: update the here with the Swagger docs**

### Sign up for a new account

> As an important note, sometimes tracking blockers or ad blockers will make this page work differently. We _advise_ to turn them off for this page.

When you click this link, you will see a "modal window" that will display our Terms and Conditions.

![Developer portal terms and condition window](/assets/img/dev-portal-start-here-2.png)

The "**I Agree**" button is grayed out on purpose, expecting you to read them. Once you reach the bottom of the terms, the button will switch to black allowing you to click on "I agree". You can always Decline, however, it will close the window and that's it.

![Developer portal terms and condition window](/assets/img/dev-portal-start-here-3.png)

when you click on "**I Agree**" you will see a form to input data.

> **If you plan this to be used on a company environment we discourage you to use your personal or personal corporate email. Instead use an email account that everyone within your team has access to and use your company name and "inc" when applies**

![Developer portal sign up form](/assets/img/dev-portal-start-here-4.png)

Once you have entered the data, you will receive an email that talks about our Documentation, Community, Partnerships, GitHub and a bit about our AMIs.

#### About password strenght

This is shown only when the password is not strong enough, please use the following guide:

- Use between 12-32 characters
- Use at least 1 uppercase letter [A, B, C, ...Z]
- Use at least 1 lowercase letter [a, b, c, ...z]
- Use at least 1 number [0, 1, 2, ...9]
- Use 1 special character (!, $, #, %...)

Once you have created your account, you will be presented with a page that looks like this:

![Developer portal first page after sign up](/assets/img/dev-portal-start-here-5.png d)

### Log in on your account

When you click on "Log In", you are presented with a "modal window" to enter your email and password.

![Developer portal login modal window](/assets/img/dev-portal-start-here-6.png)

#### Forgot your passoword?

Don't panic! We forget them too. You can click on the "reset password" button that shows up when you click in "Log in" button.

![Developer portal login modal window](/assets/img/dev-portal-start-here-7.png)

When you click it, you will see a new modal window where you need to enter your email. If found, you will receive an email with a link to reset it.

![Developer portal reset password modal window](/assets/img/dev-portal-start-here-8.png)
![Developer portal reset password modal window confirmation](/assets/img/dev-portal-start-here-9.png)

Once you receive the email, you will be presented with this page. Keep in mind it uses the same validation of the password.

![Developer portal reset password form](/assets/img/dev-portal-start-here-10.png)
![Developer portal reset password confirmation](/assets/img/dev-portal-start-here-11.png)

### Managing your devportal account

When your account is created and you have logged in, you will notice that the top menu will have several things that have been added to it.

1. **My Applications**
   - You will be able to manage your registered applications here.
2. **My Groups**
   - You will be able to manage your groups here
3. 🔔
   - Notifications related to events in the developer portal
4. **My Account**

   - Information about your account.

   ![Developer portal menu when logged in](/assets/img/dev-portal-start-here-12.png)

We will cover each one of these on their separate place in detail, for now, we will talk about the bell and my account:

- If you click the bell 🔔 , you should see notifications related to developer portal. Quite simple.

#### My Account

Now if you click on "My Account" you will be presented with a form to edit your information. You will not be able to edit the email (We, as Anthology, can't either). The password can be reseted by pressing the "Change password" at the bottom.

![Developer portal menu when logged in](/assets/img/dev-portal-start-here-13.png)

Now, you can Update your name and last name, but not your email. **We are unable to change your email.**

First and last name are important to be filled correctly since those will be shown on Learn when adding the integration.

### Browse Learn APIs

When you click the Browse APIs you will be redirected to this link: [https://developer.anthology.com/portal/displayApi](https://developer.anthology.com/portal/displayApi) Which has several components:

#### Overall Swagger API structure

This applies to most of our APIs, at least the ones that use Swagger for documentation.

1. This is a version selector, it defaults to the latest supported version, however the dropdown contains older and newer versions (unsupported)
2. This a json version of the complete page (Swagger) that can be used to import all endpoints in a program such as Postman.
3. Group of APIs related to that specific title. You will find lots of apis divided by group with different methods.
4. API method related to the endpoint right next to it. You can learn more about api methods reviewing this [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
5. API endpoint.
6. Name of the endpoint.
   ![Developer browse APIs endpoints](/assets/img/dev-portal-start-here-14.png)

#### Endpoint structure

1. The name of the API usually has an arrow that changes direction to let you know you are reviewing that specific api endpoint.
2. Endpoint short description of what it returns
3. Entitlements that this endpoint requires to work. We will review this in our Mapping entitlements to enrolments.
4. Limitations on the endpoint.
5. Learn version since this endpoint has been available.

![Endpoint structure](/assets/img/dev-portal-start-here-15.png)

#### Endpoint parameter structure

1. Name of the query paramenter, it must be used in the same way it is written here.
2. This describes 3 things: Type of value, Character limit and type of paramenter, it can be either query parameter or path paramenter.
3. Description of the parameter.
4. Since which Learn version this parameter is available.
5. When the parameter allows specific values those are specifies as "Available values".

![Endpoit paramenter values](/assets/img/dev-portal-start-here-16.png)

#### Endpoint response structure

1. HTTP Code of the response
2. Message result of the http code.
3. These are buttons, by default you are seeing an example value but "Model" can be clicked and will show a data dictionary of the response.
4. Example of the result as application/json

![Response structure](/assets/img/dev-portal-start-here-17.png)

#### Endpoint response model structure

1. When you click Model you are shown a data dictionary
2. Data dictionary of the result, this is available for all http codes.
3. Attribute value
4. Type of value it returns and boolean of readOnly.
5. Description of the value of the attribute.

![Response model](/assets/img/dev-portal-start-here-18.png)
<AuthorBox frontMatter={frontMatter}/>
