---
title: Optional authentication for additional services
id: optional-requests
sidebar_position: 4
published: ""
edited: "2024-09-04"
---

As seen in the workflow in previous sections, once the JWt token is sent to your tool, you can verify its content and then, render the page corresponding to your application or data, however, if you want to perform additional calls through REST APIs or, use the additional services from LTI advantage (Assignments and Grades Service or Names and Roles Provisioning Service), you will need to perform additional authentication processes.

### Learn REST Token

If your tool is going to use the Learn public REST API in order to get or set information it can't via LTI then it should retrieve a Learn OAuth 2 access token at this time and cache it. There are choices as to what OAuth 2 flow you can use, so please refer to this document on how to [retrieve a Learn OAuth 2 access token](/docs/blackboard/rest-apis/getting-started/first-steps.md).

In the workflow image referenced from other section, we use with 3-Legged oAuth flow as its the most common for UI-based work where you want the API call to be done on behalf of the interacting user. See this document on using [3-legged oauth](/docs/blackboard/rest-apis/getting-started/3lo.md).

### LTI Rest Token

If your tool wants to take advantage of the LTI services, such as Assignment & Grades, or Names & Roles, then you'll need to retrieve an LTI access token. This token is of a different format and uses a different security model than the Learn public API.

You'll need to construct a signed (with your private key) JWT and post that to the LTI OAuth 2 token endpoint provided by the Developer Portal when registering your application. If all is well, you will receive an access token back which you should cache, and use for making service calls back to Learn. Keep in mind that the LTI access token has the same time constraints as the REST API token which is a 1 hour expiration time.

The workflow, parameters and information needed to perform this authentication flow will be covered under the Assignments and Grades and Names and Roles PRovisioning System sections.
