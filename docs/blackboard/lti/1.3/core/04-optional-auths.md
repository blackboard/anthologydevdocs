---
title: Optional authentication for additional services
id: optional-requests
sidebar_position: 4
published: ""
edited: "2024-09-04"
---

As seen in the workflow in previous sections, once the JWT token is sent to your tool, you can verify its content and then, render the page corresponding to your application or data, however, if you want to perform additional calls through REST APIs or, use the additional services from LTI advantage (such as Assignments and Grades Service or Names and Roles Provisioning Service), you will need to perform additional authentication processes.

### Learn REST Token

If your tool is going to use the Learn public REST API in order to get or set information it can't via LTI, then it should retrieve a Learn OAuth 2 access token at this time which can be used during one hour (you can request a new one once the expiration time has passed). There are choices as to what OAuth 2.0 flow you can use, so please refer to this document on how to [retrieve a Learn OAuth 2 access token](/docs/blackboard/rest-apis/getting-started/first-steps.md).

In the workflow image referenced from earlier sections, we use the 3-Legged oAuth flow as its the most common for UI-based work where you want the API call to be done on behalf of the interacting user. See this document on using [3-legged oauth](/docs/blackboard/rest-apis/getting-started/3lo.md).

### LTI Rest Token

As for additional LTI services such as Assignments and Grades Service and Names and Roles Provisioning Service, you'll need to retrieve an LTI access token. Keep in mind that this token uses a different format and a different security model than the Learn public API which changes the way its requested.

As an overview of the process of requesting an LTI API token, you'll need to construct a signed JWT (using the private key of your tool, configured when registering the application) and perform a POST request to the LTI OAuth 2 token endpoint provided by the Developer Portal (which has the name "Auth token endpoint"). If all is well, you will receive an access token back which you should cache, and use for making service calls back to Learn. Keep in mind that the LTI access token has the same time constraints as the REST API token which is a 1 hour expiration time.

The workflow, parameters and information needed to perform this authentication flow will be covered under the Assignments and Grades and Names and Roles PRovisioning System sections.
