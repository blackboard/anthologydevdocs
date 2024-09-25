---
title: Building the JWT token with the content
id: dl-return-token
published: ""
edited: "2024-09-25"
sidebar_position: 3
---

Learn expects a JWT token signed from your tool (based on the specifications from 1EdTech), however, this token requires certain properties or claims to be included. We'll review the information that needs to be sent back to Learn to properly create items.

## The claims needed (object properties)

To properly create an item, the body of the JWT token should have the following required and optional claims (or properties). Please keep in mind that the body itself has to be a JSON object.

| Property name                                                  | Description                                                | Value                                                                                                                            | Required by Learn |
| -------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `iss`                                                          | Issuer of the JWT token                                    | Your Application ID                                                                                                              | Yes               |
| `aud`                                                          | Target server or service where the JWT must have been sent | `https://blackboard.com`                                                                                                         | Yes               |
| `sub`                                                          | ID of the user that is performing the changes or           | Your Application ID                                                                                                              | Yes               |
| `iat`                                                          | Date and time when the token was created                   | Numeric date time in Unix time                                                                                                   | Yes               |
| `exp`                                                          | Date and time when the token will expire                   | Numeric date time in Unix time                                                                                                   | Yes               |
| `locale`                                                       | Locale of the content being created                        | locale code using the format languageCode_regionCode                                                                             | No                |
| `"https://purl.imsglobal.org/spec/lti/claim/deployment_id"`    | Deployment ID sent by Learn                                | Unique ID sent by Learn in the Deep Linking Launch request                                                                       | Yes               |
| `"https://purl.imsglobal.org/spec/lti/claim/message_type"`     | Type of response                                           | `LtiDeepLinkingResponse`                                                                                                         | Yes               |
| `"https://purl.imsglobal.org/spec/lti/claim/version"`          | Deep linking object versopon                               | `1.3.0`                                                                                                                          | Yes               |
| `"https://purl.imsglobal.org/spec/lti-dl/claim/data"`          | Data object used by Learn to validate the creation request | `data` value sent in the `https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings` claim. Must be sent back unaltered | Yes               |
| `"https://purl.imsglobal.org/spec/lti-dl/claim/content_items"` | Array of Content objects                                   | `[{<ContentTypeItem>},{ContentTypeItem},{}]`                                                                                     | Yes               |

## Response sample

<details>
<summary>Deep Linking response body</summary>

```json
{
  "iss": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",
  "aud": "https://blackboard.com",
  "sub": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",
  "iat": 1727287883,
  "exp": 1727288183,
  "locale": "en_US",
  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "86e8b331-a6cd-486c-b006-9893c749e242",
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiDeepLinkingResponse",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti-dl/claim/data": "_4_1::_14_1::2::false::true::_13_1::e7a75af804fd4d9fb76812c7cde8ca70::false::false",
  "https://purl.imsglobal.org/spec/lti-dl/claim/content_items": [
    {
      "type": "ltiResourceLink",
      "title": "A title for LTI & 1.3 \" Link",
      "text": "A & description with quotes \"",
      "url": "https://dev.writingcode.dev/lti13",
      "available": {
        "startDateTime": "2024-09-25T13:00:00.000Z",
        "endDateTime": "2024-10-25T13:00:00.000Z"
      },
      "submission": {
        "endDateTime": "2024-10-25T13:00:00.000Z"
      },
      "lineItem": {
        "scoreMaximum": 100,
        "label": "Chapter 12 quiz",
        "resourceId": "xyzpdq1234",
        "tag": "originality"
      }
    }
  ]
}
```

</details>
