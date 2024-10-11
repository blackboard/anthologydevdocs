---
title: Working with Deep Linking 2.0
id: deep-linking
published: ""
edited: "2024-09-25"
sidebar_position: 1
---

Now that you have a working Core LTI 1.3 launch workflow up and running (if not, you can see [LTI Message Launch Flow](/docs/blackboard/lti/1.3/core/01-core-launch.md) for information on how to set up the core integration), we can focus on other parts of the LTI Advantage specification, especially Deep Linking 2.0.

## What is?

Deep Linking 2.0 is the specification meant to allow users to create content items within a course content area, pointing to a specific resource on the tool provider instead of the entire tool.

An example of this could be a tool that provides books to students, a deep linking integration would allow the instructor to select specific pages from the book and add a link to them in the course content area instead of linking the entire book.

## How it works

Deep Linking leverages the initial Core LTI 1.3 launch to provide an authentication framework (since the Core LTI 1.3 launch must be authenticated and Learn verifies that the user is allowed to launch the tool) and provides a way for instructors or content creators to access specific the tool's resources, which can be selected and sent back to Learn using a JWT token with the properties describing the content (title, display type, URL, etc.). The visual workflow of the requests needed to create a deep linking item is the following:

![Deep linking 2.0 flow diagram](/assets/img/deeplinking-flow.png)

## The steps

### LTI launch

This launch follows, as mentioned, the Core LTI 1.3 launch that is covered in the [LTI Message Launch Flow](/docs/blackboard/lti/1.3/core/01-core-launch.md) section, however, the body of the JWT token is slightly different from the Message Launch Flow.

Below is a sample of a Deep Linking request sent from Blackboard Learn:

<details>
<summary>Deep linking request sample</summary>

```json
{
  "sub": "561ac4762b5142a0b1d3ed1aa40789c1",
  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "86e8b331-a6cd-486c-b006-9893c749e242",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
    "lineitems": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
      "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
      "https://purl.imsglobal.org/spec/lti-ags/scope/score",
      "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem.readonly"
    ]
  },
  "iss": "https://blackboard.com",
  "locale": "en-US",
  "https://purl.imsglobal.org/spec/lti/claim/tool_platform": {
    "name": "Blackboard, Inc.",
    "description": "Blackboard, Inc.",
    "guid": "83656022865f4f47a898b986399a01a8",
    "product_family_code": "BlackboardLearn",
    "version": "3900.93.0-rel.59+7d3ba1c",
    "url": "https://learn.blackboard.com/",
    "contact_email": "dev@localhost"
  },
  "https://purl.imsglobal.org/spec/lti/claim/lis": {
    "person_sourcedid": "administrator",
    "course_section_sourcedid": "course-link"
  },
  "exp": 1727291502,
  "iat": 1727287902,
  "email": "dev@localhost",
  "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
    "context_memberships_url": "https://learn.blackboard.com/learn/api/v1/lti/external/namesandroles/_4_1",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly"
    ],
    "service_versions": ["2.0"]
  },
  "given_name": "Blackboard",
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor",
    "http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator",
    "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff"
  ],
  "nonce": "34f3c275-f24b-40df-81fa-8796eaa3591b",
  "https://purl.imsglobal.org/spec/lti/claim/target_link_uri": "https://dev.writingcode.dev/deepLinkOptions",
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "ad83286ea6494b799bd1a5d57436d7d8",
    "label": "course-link",
    "title": "Course Link",
    "type": ["http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering"]
  },
  "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
    "id": "_14_1"
  },
  "https://purl.imsglobal.org/spec/lti-gs/claim/groupsservice": {
    "context_groups_url": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/groups",
    "context_group_sets_url": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/groupsets",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-gs/scope/contextgroup.readonly"
    ],
    "service_versions": ["1.0"]
  },
  "aud": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiDeepLinkingRequest",
  "name": "Blackboard Administrator",
  "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings": {
    "accept_copy_advice": false,
    "data": "_4_1::_14_1::2::false::true::_13_1::e7a75af804fd4d9fb76812c7cde8ca70::false::false",
    "accept_types": ["ltiResourceLink", "link"],
    "accept_multiple": true,
    "accept_presentation_document_targets": ["iframe", "window"],
    "accept_media_types": "*/*",
    "auto_create": true,
    "deep_link_return_url": "https://learn.blackboard.com/webapps/blackboard/controller/lti/v2/deeplinking"
  },
  "family_name": "Administrator",
  "https://blackboard.com/lti/claim/one_time_session_token": "3d1a9e7afc74456eb084f01bf0470bb5",
  "https://blackboard.com/webapps/foundations-connector/foundations-ids": {
    "site-id": "c97ad917-97a9-4bc4-9610-687f355647e3",
    "tenant-id": "92446862-2bdc-443d-88e8-2054de750557"
  }
}
```

</details>

### User selection

Once the core launch is completed, the user will see your tool's UI, where content can be selected and added to the Course Content section. This process runs directly on your tool's systems and is under no control of Learn (apart from showing your tool within an iframe).

### Content creation

Once the user has selected the content that will be added to the course content section, your tool will redirect to the `deep_link_return_url` URI included in the JWT token sent when the user launched the tool (under the claim `https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings`) including a new JWT token signed by your tool that contains the information of the content to be created.

### Content display

When Learn receives the JWT token from your tool, it will first verify that the signature is valid by querying the JWKS endpoint of your tool and getting the key used to sign the token, as indicated on the header of it. If the validation is correct, Learn will proceed with the creation of the item and will display the content in the location selected (the folder from which the LTI tool was launched for Original Course Navigation or the location where you clicked the plus button (+) on Ultra Course Navigation)
