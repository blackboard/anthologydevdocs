---
title: "Registering and Managing a REST or LTI Application"
id: "creating-new-rest-or-lti-application"
categories: Developer Portal
sidebar_position: 2
published: "2023-05-09"
edited: "2023-05-09"
author: Davey Herrera
---
<VersioningTracker frontMatter={frontMatter}/>

> Please note that all urls such as devcon.blackboard.com, trial.blackboard.com or devone.com are examples. Those must be replaced with your current urls. These environments are for Anthology's internal purposes and we do not provide access to them.

After registering on our Developer Portal or signing up for the first time, you will be received with a page that looks just like this:

![Developer portal first look after sign up](/assets/img/create-rest-or-lti-app-1.png)

If you notice, there are two buttons that show up in the middle of the page:

![Developer portal first look after sign up centered buttons](/assets/img/create-rest-or-lti-app-2.png)

1. **Register a REST or LTI application**

   - This link will take you to register a new REST or LTI application, if you already have an application registered and you want to create a new one, this button will no longer be available, and it will be replaced to a (+) button. We will cover this when Managing our REST or LTI application.

2. **LTI Dynamic Registration**
   - This is explained at length in this page: [LTI Dynamic Registration](/docs/lti/sanctioned-lti-registration-deployment.md)

## Register a REST or LTI application

When you click on the button to register a new REST or LTI application, you will be received by this form:

This new application can be only a REST API or LTI, it depends on what you are looking for.

> If you need a REST API only application, the first part of the form is enough, however, if you need an LTI application, you need to toggle the "My integration supports LTI 1.3" button and it will display additional information that needs to be entered.

### Manual Registration of a REST API Integration

All fields with a red \* are mandatory. (Yes, all of them)

![Registering a REST application](/assets/img/create-rest-or-lti-app-3.png)

1. **Application Name**

- Here you should enter your application's name.

2. **Description**

- In 450 characters, you need to describe your application. It should answer the questions: {Who is this intended for} {What is the main goal} such as:
- "First application allows students and instructors to sync grades with our system and centralize them in the institution's system."

3. **Domain(s)**

- The domain you want to use this in without the http or //, you can enter several domains separated by commas such as:
- devcon.blackboard.com, trial.blackboard.com

4. **Group**

- The group which this application should be a part of, we will talk about groups deeper in this page

5. **My integration Supports LTI 1.3**

- This is a toggle that is, by default, off. You can toggle this if you need your application to support LTI 1.3
- We only support LTI 1.3

6. **Register Application**

- Once all the information has been entered correctly, you may register your applicaton by clicking on this button.

### Manual registration of an LTI integration

First, you need to follow the same steps as (above) [Manual registration of a REST API integration](#manual-registration-of-a-rest-api-integration) and you need to toggle the button that reads "My integration supports LTI 1.3", By doing this, it will enable a second part of the form with the information required for the integration to communicate with your application on your end.

1. **Login Initiation URL**
2. **Tool Redirect URL(s)**
3. **Tool JWKS URL**
4. **Signing Algorithm**
5. **Custom Parameters**

All of these fields are explained in length, in this page [LTI 1.3 Fields](/docs/lti/getting-started-with-lti.md#lti-13-fields)

### Register Application

Once the information that is requested in this form is completed, you may Click on the register Application button, the page will then return diferent things depending if you added LTI information or not.

#### Register REST API application

When you register a REST API only application, you will see three values that the developer portal returns, **Please keep mind these are shown only once, we are unable to retrieve them in the backend**:

1. Application Key
2. Secret
3. Application ID

![Registering a REST application](/assets/img/create-rest-or-lti-app-4.png)

> Make sure to grab them and store them in a safe space! If you pass this screen and didn't save the data, we are unable to recover it internally.

Once you have this information stored correctly and verified, click in Done and you will be redirected to our Applications Manager.

#### Register an LTI application

When you register a LTI application, you will see seven values that the developer portal returns, **Please keep mind these are shown only once, we are unable to retrieve them in the backend**:

1. Application Key
2. Secret
3. Application ID
4. Issuer
5. Public Keyset URL
6. Auth token endpoint
7. OIDC auth request endpoint

![Registering an LTI application](/assets/img/create-rest-or-lti-app-5.png)

after you have saved your application and data correctly you will be presented with a page that looks like this:

![My Application](/assets/img/create-rest-or-lti-app-6.png)

## My Applications

On this page, you will see all of your REST API or LTI applications that have been registered on your account.

![My Application parts](/assets/img/create-rest-or-lti-app-7.png)

Here you will be able to:

1. **Register a new application Manually**
   - See [Manual registration of a REST API application](#manual-registration-of-a-rest-api-integration)
   - See [Manual registration of a LTI application](#manual-registration-of-an-lti-integration)
2. **See the name, description, Application ID and group of the application**
   - This data cannot be edited
3. **Edit your application (General data including LTI endpoints)**
   - You will be presented with the same form as the manual registration, here you will be able to edit: Application Name, Description, Domains, Login intiation url, Tool redirect URLs, Tool JWKS URL, Signing Algorithm and custom paramenters. Data as Issuer, Public keyset URL, Auth token endpoint, OIDC auth request endpoit cannot be changed.
4. **Delete your application**
   - This removes your application. This is a one way operation and cannot be undone.
5. **Manage your keys**
   - You can create new keys (Key, secret) but it will keep the same application ID. This can be used when you want to rotate your keys or make the old key and secret unusuable. You may never need to create additional keys. When you click on the Plus button it will generate new values that will be shown only once, make sure to store them in a safe place, we are unable to retrieve this data.
     ![Manage keys](/assets/img/create-rest-or-lti-app-8.png)
6. **Manage your application's Placements**
   - Here you will be able to register a placement (LTI) that will be applied whenever a new client adds this to their own Blackboard Learn instance and click on . This will request the following data: Placement name, Description, Type [Course Tool, Course content tool, deep linking content tool, System tool, administrator, ultra extension], [Allow student access or/and Launch in new window], target link URI, Icon URL, custom parameters
     ![registering a new placement](/assets/img/create-rest-or-lti-app-9.png)
7. **Review the schools that have integrated your application**
   - This will display (At the top right of the page) a list of sites that are registered and using your application, this is how it looks by default
     ![What schools](/assets/img/create-rest-or-lti-app-10.png)
   - This is how it looks like when you have already registered an application
     ![What schools with a registered school](/assets/img/create-rest-or-lti-app-11.png)

## My Registrations

On this tab you will be able to delete the registrations for sites that are no longer using your application, or you can block the access to a particular site on a specific group, it defaults to All groups. By default you will not see any registration when the application was just registered.

When a site is registered it will be displayed here and it will look like this:

![Registrations](/assets/img/create-rest-or-lti-app-12.png)
<AuthorBox frontMatter={frontMatter}/>
