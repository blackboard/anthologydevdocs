---
title: Registering a new LTI application
id: register-an-application
published: ''
edited: ''
author: Scott Hurrey
---

In this section, we cover how you register your application with Anthology and deploy it to a Learn instance. Registration and deployment are not covered in the specification provided by 1EdTech, and each LMS vendor handles it slightly differently.

## Anthology Developer Portal

The first thing to understand about registering your application is that Anthology has you register your tool **ONCE** with our developer portal here [https://developer.anthology.com](https://developer.anthology.com). This is a central, self-service application, running in AWS where you enter information about your application, and are given the values you need for your application to work with LTI Advantage and Learn. It is also the same place you get the ID, key, and secret if you are going to use our public REST API.

:::caution
Do not ask institutions to register your tool with the Anthology Developer Portal. You register it **ONCE** with Anthology, and institutions can deploy it with the Client ID you give them. They will receive a Deployment ID, which they will exchange with you to set up the account. It is the deployment ID, in conjunction with the client ID and issuer, that uniquely identifies the business agreement between the tool vendor and the institution.
:::

### Information you Provide

#### Domain

We will use the terms `Application` and `Tool` interchangeably throughout this document. What we refer to as an `Application` may be different from how you see it. For Learn, an `Application` is a web application, accepting GET and POST requests at a URL. That application is defined by its fully-qualified domain name (FQDN). An application can have many FQDNs, but two applications cannot share the same FQDN. The reason has to do with needing to be able to import course archives, such as from IMS Common Cartridge. If there are LTI links in that archive, the only way we have today to map those links to a particular LTI Application is through domain matching. If that seems like a limitation, please read on.

#### LTI 1.3 Fields

The LTI 1.3 spec defines the information you must provide to a Platform (LMS) such as Blackbaord Learn. Those values are:

1. **OIDC Login initiation URL**
   - This is the URL that Learn makes a GET request to in order to initiate an LTI launch. Without going into too much detail, the OIDC login establishes the identity of the user launching and you validate that you recognize this person. Due to the way that 3rd-party-initiated logins work in OIDC, you are not given the Client ID, so you must determine that by including a unique registration ID on the OIDC Login URL. What you provide is completely up to you, but it must distinguish a Learn login request from a request from any other LMS.
2. **Tool Redirect URL(s)**
   - This is the URL to which the LTI launch is POSTed. An LTI launch is a FORM POST with a form parameter named `id_token`. That `id_token` is a JWT that you then parse, verify, and handle. You can provide as many Tool Redirect URLs as you like, separated by commas in the UI, but we strongly recommend you provide only **ONE**. There is enough information in the id_token JWT for you to determine what to do with the LTI launch. Think of your web application as a router for LTI. You may have one or you may have hundreds of "applications" behind that "router", directing LTI launches to their appropriate places.
3. **Tool JWKS URL**
   - This is the URL for your public key with which Learn validates that the messages it receives (such as Deep Linking, Names & Roles, Assignment & Grades) are from your application. It must adhere to the JWKS specification.
4. **Signing Algorithm**
   - Anthology currently supports RS256 and RS512. We can support more as we are requested to do so.

#### Custom Parameters

The LTI spec supports the notion of custom parameters with a launch. These are arbitrary `name=value` tuples that you can provide to uniquely identify the launch, or any other piece of information you need from the platform at launch time. See the following two documents on how to use substitution parameters within custom parameters to receive context-specific data on an LTI launch:

[IMS LTI 1.3 Parameter Substitution](https://www.imsglobal.org/spec/lti/v1p3/#customproperty)  
[Learn Template Variables](/docs/blackboard/rest-apis/advanced/dynamic-rendering-with-template-variables.md)

### Information you Receive

Once you have registered your application with the Blackboard Developer Portal, you will receive [almost] all the information you need to configuration your application to receive LTI 1.3 launches from a Learn instance.

1. Application ID - this is the same as the Client ID in the OIDC spec. Because we already had the concept of registering an application for using our public REST API, and we use the same UI to register for both, we call it Application ID in some places, and Client ID in others. We apologize in advance for the confusion this causes.
2. Issuer - is always `https://blackboard.com` because Blackboard is issuing the credentials
3. Public keyset URL - Blackboard's public JWKS URL so you can validate the signature of messages a Learn instance sends you
4. Auth token endpoint - the endpoint you use to get an OAuth 2 Bearer Token if you wish to make service calls, such as Assignment & Grades, or Names & Roles back to Learn
5. OIDC auth request endpoint - the endpoint you respond to after you receive an OIDC login initiation request from Learn.

:::info
You will also receive an application key and secret. These are your credentials for using our public REST API. Be sure to save these off as you won't be able to get back at them later. We do not store the secret on our side.
:::

## LTI Placements

In Learn the way an LTI tool is surfaced in the user interface (UI) is through the definition of one or more `Placements`. An application developer can define these placements so a Learn admin doesn't have to. There are currently six types of placements you can create:

| Type           | Description                                                                                                 | Options              |
| -------------- | ----------------------------------------------------------------------------------------------------------- | -------------------- |
| Deep Linking   | Supports [LTI Deep Linking](https://www.imsglobal.org/spec/lti-dl/v2p0) to get content in outline or editor | Allow student access |
| Course Content | Can be placed in the course outline or editor                                                               | Can be graded        |
| Course         | Appears in Ultra Books & Tools, Original Tools                                                              | Allow student access |
| System         | Appears in Ultra Base Nav Tools, Original Institution module                                                |                      |
| Admin          | Appears in Admin Tools module                                                                               |                      |
| UEF            | Special type for extending the Ultra UI; see [UEF docs](../../uef/01-getting-started.md)                    |                      |

### Placement properties

In the table above, some placements allow you to control whether students have access or not. Some placements allow you to configure if it can be graded or not. All placements have the following properties in common:

- Name - up to 50 characters
- Description - up to 1000 characters; only shows up in the admin area currently
- Type - see above
- Target link URI - because target_link_uri is part of the OIDC spec we support it here, however it's really just a property of the placement. It can be anything you want. We don't launch to it, e.g., no FORM POST to this URL. It can be used for routing within your application.
- Icon - we currently suggest a 50x50 pixel icon (PNG, GIF, JPEG). I don't think we support SVG currently. We will resize as needed.
- Custom parameters - a list of `name=value` pairs, each on their own line. These override any set on the tool level if they have the same `name` value. See the section above on using substitution parameters.

### LTI Placement to Building Block Link Mapping

As new LTI Placement options are added to the Learn platform, the
naming conventions can be a bit confusing for Building Block Developers. The
purpose of this document is to give a high-level mapping of the terminology
for Developers.

| Description                                        |      LTI Placement       |     B2 Type     |
| -------------------------------------------------- | :----------------------: | :-------------: |
| A tool available to all users in a course          |   Course Tool->Student   |      tool       |
| A tool available only to instructors in a course   | Course Tool->Non-Student |   course_tool   |
| A course content tool                              |   Course Content Tool    | content-handler |
| A tool available outside of a course for all users |       System Tool        |    user_tool    |
| A tool available only to system administrators     |    Administrator Tool    |   system_tool   |

## Make Your LTI Tool Available to Learn Servers

Once you have developed or are developing an application and want to test it with Blackboard Learn, you can register the application on the Developer Portal and make it available to Learn Administrators so that they can configure their Learn servers to work with it.

To deploy your application to a Learn instance, share the Application ID with the administrator of that Learn server. The administrator can access within the Learn instance to `Admin > LTI Tool Providers` and click on `Register a new LTI 1.3/Advantage tool`. In the field that shows up, paste the Application ID and then click Submit.

Once submitted, they will see the properties of the application you configured through the Developer Portal. Once the administrator clicks "Submit" again, a new piece of information will be available, which is the **Deployment ID**. This deployment ID is sent with every LTI launch, and uniquely identifies the Learn instance that launch is coming from. This can be seen by clicking the chevron next to the newly installed tool and clicking on "Edit" which shows the configuration parameters of the tool, including the Deployment ID

It is likely that you'll need to use that deployment ID to map which Learn instance a launch is coming from. This is a bit of a chicken-and-egg problem, in that you have registered your application with the developer portal, but you don't know what Learn instances are using it yet. You can automatically handle that at launch time, e.g., if you haven't seen that deployment ID previously then prompt the user to set it up, or you can do the set-up out of band.

At this point, your application is connected to a Learn instance. All that remains is for an instructor or other user to create links in a course or use some of the automatically deployed links, such as a course tool placement.

## Deleting an LTI tool or placement from Blackboard Learn

Deleting a registered LTI domain and/or the associated managed placements from the Administrator Panel -> LTI Tool Providers page will invalidate all the associated LTI launch links in courses. The data will be gone from the database. There is no way to fix this. **NEVER** delete a registered domain or managed placements without considering these consequences.

If you create an LTI 1.3 Tool that uses the same domain as a currently registered LTI 1.1 tool on a Learn system, there is code in Learn that will prompt you to migrate from LTI 1.1 to LTI 1.3. Generally that's a great option.

Finally, only very brave people make changes on a production system without testing first on a test or staging system. We recommend you be more cautious than brave.

## Ready to register your application?

Now that we covered what information is needed from the system and what information can the system expect from Learn, we can register the application and start the development of the LTI 1.3 tool. To register your application, you can follow the steps outlined here (along with the information of this article) which will provide you a visual aid of what to expect when navigating the Developer Portal: [Registering and Managing a REST or LTI application](/docs/developer-portal/creating-new-rest-or-lti-application)
