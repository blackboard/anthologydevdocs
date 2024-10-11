---
title: Course Content Types for Deep Linking 2.0
id: dl-types
published: ""
edited: "2024-09-25"
sidebar_position: 2
---

Based on the requirements of your tool (and its features), you can create and submit JWT with different content types, even more than one at the same time if you need to add several links at the same time.

The following is a brief overview of the types of content that can be created through Deep Linking (for full details, please refer to the specifications here: <https://www.imsglobal.org/spec/lti-dl/v2p0#deep-linking-response-example>):

| Type             | Has grading | Can be embedded into other course contents |
| ---------------- | ----------- | ------------------------------------------ |
| Link             | No          | Yes                                        |
| HTML             | No          | Yes                                        |
| Image            | No          | Yes                                        |
| ltiResourceLink  | Yes         | Yes (but grading will not be enabled)      |
| File             | No          | Yes                                        |
| Custom Data type | No          | No                                         |

## Content type structures

Below are suggested content type structures based on the specifications, please keep in mind that these can be changed at any time by the 1EdTech team. Please refer to the specifications for the latest changes or structures of each type of content:

<details>
<summary>Link</summary>

This type can be created as an independent link or can be embedded into other course items (such as Learn documents or learning modules).

### For Standalone links

```json
{
  "type": "link",
  "title": "My Home Page",
  "url": "https://something.example.com/page.html",
  "icon": {
    "url": "https://lti.example.com/image.jpg",
    "width": 100,
    "height": 100
  },
  "thumbnail": {
    "url": "https://lti.example.com/thumb.jpg",
    "width": 90,
    "height": 90
  }
}
```

### For embedded links

```json
{
  "type": "link",
  "url": "https://www.youtube.com/watch?v=corV3-WsIro",
  "embed": {
    "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/corV3-WsIro\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>"
  },
  "window": {
    "targetName": "youtube-corV3-WsIro",
    "windowFeatures": "height=560,width=315,menubar=no"
  },
  "iframe": {
    "width": 560,
    "height": 315,
    "src": "https://www.youtube.com/embed/corV3-WsIro"
  }
}
```

</details>

<details>
<summary>HTML</summary>

```json
{
  "type": "html",
  "html": "<h1>A Custom Title</h1>"
}
```

</details>

<details>
<summary>Image</summary>

```json
{
  "type": "image",
  "url": "https://www.example.com/image.png",
  "https://www.example.com/resourceMetadata": {
    "license": "CCBY4.0"
  }
}
```

</details>

<details>
<summary>LtiResourceLink</summary>

```json
{
  "type": "ltiResourceLink",
  "title": "A title",
  "text": "This is a link to an activity that will be graded",
  "url": "https://lti.example.com/launchMe",
  "icon": {
    "url": "https://lti.example.com/image.jpg",
    "width": 100,
    "height": 100
  },
  "thumbnail": {
    "url": "https://lti.example.com/thumb.jpg",
    "width": 90,
    "height": 90
  },
  "lineItem": {
    "scoreMaximum": 87,
    "label": "Chapter 12 quiz",
    "resourceId": "xyzpdq1234",
    "tag": "originality",
    "gradesReleased": true
  },
  "available": {
    "startDateTime": "2018-02-06T20:05:02Z",
    "endDateTime": "2018-03-07T20:05:02Z"
  },
  "submission": {
    "endDateTime": "2018-03-06T20:05:02Z"
  },
  "custom": {
    "quiz_id": "az-123",
    "duedate": "$ResourceLink.submission.endDateTime"
  },
  "window": {
    "targetName": "examplePublisherContent"
  },
  "iframe": {
    "height": 890
  }
}
```

</details>

<details>
<summary>File</summary>

```json
{
  "type": "file",
  "title": "A file like a PDF that is my assignment submissions",
  "url": "https://my.example.com/assignment1.pdf",
  "mediaType": "application/pdf",
  "expiresAt": "2018-03-06T20:05:02Z"
}
```

</details>

<details>
<summary>Custom Data type</summary>

```json
{
  "type": "https://www.example.com/custom_type",
  "data": "somedata"
}
```

</details>
