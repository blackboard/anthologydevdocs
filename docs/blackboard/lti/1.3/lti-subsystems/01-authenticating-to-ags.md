---
title: Authenticating to the LTI Subsystems
id: lti-sub-authentication
sidebar_position: 1
edited: "2024-09-26"
---

Now that you know what LTI is, how it works, how the information is sent, and how you can create items within courses, we can move on to interacting with the additional subsystems available with LTI Advantage, which are Assignments and Grades Provisioning Service and Names and Roles Provisioning Service.

But before we start to interact with them, we need to authenticate with the LTI API

## Identifying the information

Based on the entry point of the user, certain information will be available for you right away, which is outlined below and will give you the necessary information to integrate your tool. For other entry points, such as independent management websites from your tool, you will need to build this information based on your needs.

### For Assignments and Grades Service

If the item that is performing the request has a grading column attached (regardless if it was created through a Deep Linking request or adding the Course Content placement as a link and enabling grading), the JWT token sent will include a claim with the following information:

```json
"https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
  "lineitems": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems",
  "lineitem": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems/_40_1",
  "scope": [
    "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
    "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
    "https://purl.imsglobal.org/spec/lti-ags/scope/score",
    "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly"
  ]
}
```

### Names and Roles Provisioning Service

For other items, a Names and Roles claim might be included, depending on the tool's configuration and access to the Roles service. If available, the claim should look like this:

```json
"https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
  context_memberships_url: "https://partner-test3.blackboard.com/learn/api/v1/lti/external/namesandroles/_220_1",
  scope: [
    "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly"
  ],
  service_versions: [
    "2.0"
  ]
}
```

As seen, each of the services (if available in the token) will give information about the scopes, endpoints and, in the case of the Names and Roles Provisioning Service, the version being used. From here, we can start working on authenticating the request based on that data.

### Launching from a non-gradable content item

If the entry point of your tool was not a Deep Linking item but rather a Course Tool placement or Course Content Tool without grading enabled, the claim will still be included in the initial token, but it will not have the specific lineItem ID and will look something like this:

```json
"https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
  "lineitems": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems",
  "scope": [
    "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
    "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
    "https://purl.imsglobal.org/spec/lti-ags/scope/score",
    "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly"
  ]
}
```

### Other entry points

For other types of entry points, such as System Placements, Admin placements or a management UI from your tool directly, the claim for lineItems will not be included, and the necessary scopes will have to be gathered from previous interactions and tailored accordingly.

More information about scopes and an explanation of each one is here: <https://www.imsglobal.org/spec/lti-ags/v2p0#assignment-and-grade-service-claim>

:::info Service access without LTI launch
If your system needs access to these services at any point without relying on an LTI launch, you can cache the endpoints received on an initial launch and use them directly to interact with any of the services.

Keep in mind that the cache will have to be updated regularly to have the latest IDs available. This can be done by getting the information through an LTI launch or by requesting the ID from the column or content through REST API
:::

## Requesting the authentication token

The authentication process is based on the 2LO authentication flow of oAuth2, with certain changes, mostly in the data being sent. When the authentication process is completed, you will receive a bearer token that you will need to include on any subsequent request (this token will also work to make calls through other LTI Advantage services such as the Names and Roles Provisioning Service, which will be outlined in later sections).

The steps to complete the flow are:

- Gathering the data and building the authentication body
- Submitting the request
- Receiving the bearer token.

### Gathering the data and building the authentication body

Before performing the authentication flow, you will need to gather certain information from your tool and the server where you want to authenticate. Initially, you will need the scopes of the request, which can be gathered from the initial launch token as outlined above or can be added manually depending on the requirements of your tool.

You will also need to the following information from your tool, some properties will have to be created/provided by your tool and others can be gathered from the registration information provided by the Developer Portal

| Property | Description                                                                                                                            | Value                                                               | Type           |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------- |
| `iss`    | Issuer of the request                                                                                                                  | Value with the ID of your tool - Not tied to anything in particular | String         |
| `sub`    | ID of the user performing the request                                                                                                  | Your Application ID                                                 | String         |
| `aud`    | Audience of the request - URL provided by the Developer Portal when registering your application, under the name "Auth token endpoint" | [`https://developer.blackboard.com/api/v1/gateway/oauth2/jwttoken`] | Array[String]  |
| `iat`    | Issued at time                                                                                                                         | Unix timestamp                                                      | Number/Integer |
| `exp`    | Expires at time                                                                                                                        | Unix timestamp                                                      | Number/Integer |
| `jti`    | JWT Identifier                                                                                                                         | Random string value generated from your tool                        | String         |

:::caution Required values
Please make sure to send all the properties in the payload since they are required, failure to do so will result on a 400 response from the server
:::

After this, you will need to build a JSON object that has the following structure, replacing the properties with the data gathered:

Once this object is built, you will need to create a JWT token with it and sign it with your JWKS key. This is important since the Blackboard Learn server will later connect to your system and retrieve your public JWKS key for signature validation.

Now that you have the JWT token (which from now on we will call `client_assertion`), you can submit the request and retrieve your Bearer token.

### Submitting the request

To submit the request to the authentication endpoint, you need to make sure your system sends the following information:

#### Headers

| Property       | Value                               |
| -------------- | ----------------------------------- |
| `Content-Type` | `application/x-www-form-urlencoded` |

#### Options

| Property            | Value                                                             |
| ------------------- | ----------------------------------------------------------------- |
| Method              | `POST`                                                            |
| Auth endpoint / URL | `https://developer.blackboard.com/api/v1/gateway/oauth2/jwttoken` |

#### Body

| Property                | Value                                                    |
| ----------------------- | -------------------------------------------------------- |
| `grant_type`            | `client_credentials`                                     |
| `client_assertion_type` | `urn:ietf:params:oauth:client-assertion-type:jwt-bearer` |
| `client_assertion`      | The signed JWT token from the previous step              |
| `scope`                 | Space separated string with the scopes of the request    |

<details>
<summary>Example of the request using NodeJS (using Axios) </summary>

```js
await axios({
  method: "POST",
  url: "https://developer.blackboard.com/api/v1/gateway/oauth2/jwttoken",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: {
    grant_type: "client_credentials",
    client_assertion_type:
      "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMzQ1In0.eyJpc3MiOiJsdGktdG9vbCIsInN1YiI6ImJhYWY3ZGE4LWY5OWEtNDJjYS1hNzJmLTI5MmNmZDBlYjI3ZCIsImF1ZCI6WyJodHRwczovL2RldmVsb3Blci5ibGFja2JvYXJkLmNvbS9hcGkvdjEvZ2F0ZXdheS9vYXV0aDIvand0dG9rZW4iLCJmb28iXSwiaWF0IjoxNzI3Mzk2NDA3LCJleHAiOjE3MjczOTY3MDd9.UfC4Hmt_aZsrjlj2MWxWgZNCJ1trWEhIU0v5jt1yrBPHQm52CfY8Oj3XEsFIjkh6v6AwUdxTbvxqh9DL1xb3Wg4MZsqOIFNDS8BSWIEkv8lLdjO5P3PHYhf_LQZxZsgjWLPtf1bnu2KG5kUOQupSwdKDMBqSskd_ICbluLgFgJh8XWBPA7pE_q-W8TD_4IIrlF4M9voW1Uab9-ctLMQncV-2SOKdPuhAcmmfMyUtcK6UHvCgZwKhScrm-b1QkT1Ow1gnCuCnjcSwY74-cKYf0ik7dxTs9VdZ_7ggO2uhciMPU5xLyxP6Ca3Kl9qs8sqAImcMI1rPDNodta6bN0jOSw",
    scope:
      "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly https://purl.imsglobal.org/spec/lti-ags/scope/lineitem https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly https://purl.imsglobal.org/spec/lti-ags/scope/score",
  },
});
```

</details>

### Receiving the bearer token

If all went well and the data is correct, you will receive a `data` payload in the response that will contain the following information:

| Property       | Description                              |
| -------------- | ---------------------------------------- |
| `access_token` | The bearer token value                   |
| `token_type`   | Type of the token, in this case `bearer` |
| `expires_in`   | Valid time remaining in seconds          |
| `scope`        | Scopes of the token                      |

The sample below represents the data payload you will receive when authenticating correctly:

```json
{
  "access_token": "eyJraWQiOiJmYWQ2MTAwNy1lMmRjLTQ0OWUtODhkZS03OTQ3YTU1YzE1NmYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiYWFmN2RhOC1mOTlhLTQyY2EtYTcyZi0yOTJjZmQwZWIyN2QiLCJpbXNnbG9iYWwub3JnLnNlY3VyaXR5LnNjb3BlIjoiaHR0cHM6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvc3BlY1wvbHRpLW5ycHNcL3Njb3BlXC9jb250ZXh0bWVtYmVyc2hpcC5yZWFkb25seSBodHRwczpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC9zcGVjXC9sdGktYWdzXC9zY29wZVwvbGluZWl0ZW0gaHR0cHM6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvc3BlY1wvbHRpLWFnc1wvc2NvcGVcL2xpbmVpdGVtLnJlYWRvbmx5IGh0dHBzOlwvXC9wdXJsLmltc2dsb2JhbC5vcmdcL3NwZWNcL2x0aS1hZ3NcL3Njb3BlXC9yZXN1bHQucmVhZG9ubHkgaHR0cHM6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvc3BlY1wvbHRpLWFnc1wvc2NvcGVcL3Njb3JlIiwiZXhwIjoxNzI3NDAwNTI3LCJpYXQiOjE3MjczOTY5Mjd9.bWl_UeLCR3cyWoVV2dbN8lJvBS-Jt1kDwop_NPGcHhMTS8YppkHwec-H2Qa2ypHkIdiOJBJ3-VL8xbcH4OyCYPxX8G6isYPtvdx9zj8l-1NUjbEgU8EmwbOWIEj6i4P7Hu6bcOIgZsQK7KB5otDCaRTyekU270pxpOpW6R3p-TUtrAtvF8s8jc-9uYHC18MLYj_v30DGU5rObXJigOz7xZYPboc4DzHjkBvy1S6UmC5eoNvhPIyo0XE5eTcF7UYohBbwQD289dUZzAz5pIvocwbG55lmObjOl7l_qZsERBlEojJlyulB4ZuS9DnutlamBXqqidWkKduTEiOtFutXaw",
  "token_type": "bearer",
  "expires_in": 3600,
  "scope": "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly https://purl.imsglobal.org/spec/lti-ags/scope/lineitem https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly https://purl.imsglobal.org/spec/lti-ags/scope/score"
}
```

## Next steps

Now that you're authenticated, you can start creating graded columns, requesting column information and/or posting user grades to Blackboard Learn. Each one of these scenarios will be covered next.
