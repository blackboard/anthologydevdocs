---
title: Sample JWT content
id: jwt-contents
sidebar_position: 6
published: ""
edited: "2024-09-04"
---

The following is a sample of the expected JWT contents received from the form POST request. A description of each parameter and required/optional parameters can be found in the specifications for Core LTI 1.3 here: [1EdTech Specifications for LTI 1.3](https://www.imsglobal.org/spec/lti/v1p3#resource-link-launch-request-message)

:::info
Please keep in mind that this information can change, always review the Core LTI 1.3 specification linked above for the latest details about the included information
:::

```
{
  "kid": "53c4573a-1ac8-4484-b036-a7b22b557e8c",
  "alg": "RS256"
},
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
  "https://purl.imsglobal.org/spec/lti/claim/launch_presentation": {
    "return_url": "https://learn.blackboard.com/webapps/blackboard/execute/blti/launchReturn?course_id=_4_1&content_id=_44_1&toGC=false&nonce=b76463f935c24874befc987da481e77b&launch_id=03e17634-4119-4534-8934-34e2ea4d03d6&link_id=_44_1&launch_time=1727287501032",
    "locale": "en-US"
  },
  "exp": 1727291101,
  "iat": 1727287501,
  "email": "dev@localhost",
  "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
    "context_memberships_url": "https://learn.blackboard.com/learn/api/v1/lti/external/namesandroles/_4_1",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly"
    ],
    "service_versions": [
      "2.0"
    ]
  },
  "given_name": "Blackboard",
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor",
    "http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator",
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator",
    "http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff"
  ],
  "nonce": "d170f805-bf97-4065-8912-999a6e9f6b3c",
  "https://purl.imsglobal.org/spec/lti/claim/target_link_uri": "https://dev.writingcode.dev/lti13",
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "ad83286ea6494b799bd1a5d57436d7d8",
    "label": "course-link",
    "title": "Course Link",
    "type": [
      "http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering"
    ]
  },
  "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
    "id": "_44_1",
    "title": "Anthology Tool - Course Content Tool"
  },
  "https://purl.imsglobal.org/spec/lti-gs/claim/groupsservice": {
    "context_groups_url": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/groups",
    "context_group_sets_url": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/groupsets",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-gs/scope/contextgroup.readonly"
    ],
    "service_versions": [
      "1.0"
    ]
  },
  "aud": "baaf7da8-f99a-42ca-a72f-292cfd0eb27d",
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "name": "Blackboard Administrator",
  "family_name": "Administrator",
  "https://blackboard.com/lti/claim/one_time_session_token": "9f29b26e944045118a51f8271aaf47d9",
  "https://blackboard.com/webapps/foundations-connector/foundations-ids": {
    "site-id": "c97ad917-97a9-4bc4-9610-687f355647e3",
    "tenant-id": "92446862-2bdc-443d-88e8-2054de750557"
  }
}
```
