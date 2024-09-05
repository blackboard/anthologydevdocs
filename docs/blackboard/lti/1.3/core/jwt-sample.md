---
title: Sample JWT content
id: jwt-contents
sidebar_position: 5
published: ""
edited: "2024-09-04"
---

The following is a sample of the expected JWT contents received from the form POST request

:::info
Please keep in mind that this information can change, always review the Core LTI 1.3 specification for details about the included information
:::

```
{
  "kid": "53c4573a-1ac8-4484-b036-a7b22b557e8c",
  "alg": "RS256"
},
{
  "sub": "4f1025ffab1846ee9ca0a53299dd51b6",
  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "c3c37f92-d008-43db-9e8a-e10fd139ec2d",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
    "lineitems": "https://example.com/learn/api/v1/lti/courses/_122_1/lineItems",
    "lineitem": "https://example.com/learn/api/v1/lti/courses/_122_1/lineItems/_7454_1",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
      "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
      "https://purl.imsglobal.org/spec/lti-ags/scope/score"
    ]
  },
  "iss": "https://blackboard.com",
  "locale": "en-US",
  "https://purl.imsglobal.org/spec/lti/claim/tool_platform": {
    "name": "Blackboard, Inc.",
    "description": "Blackboard, Inc.",
    "guid": "b6932d2ade8c441982b53f99dcf0caf3",
    "product_family_code": "BlackboardLearn",
    "version": "3900.11.0-ci.7045+d7e0341",
    "url": "https://example.com/",
    "contact_email": "admin@example.com"
  },
  "https://purl.imsglobal.org/spec/lti/claim/custom": {
    "userNameLTI": "jcool",
    "caliper_profile_url": "https://example.com/learn/api/v1/telemetry/caliper/profile",
    "caliper_federated_session_id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/e0c7f37e-d260-4a83-b086-5cbbdb997bce/sessions/3DE97D40358C65C13681A22C004344DF",
  },
  "https://purl.imsglobal.org/spec/lti/claim/lis": {
    "person_sourcedid": "9283749283749",
    "course_section_sourcedid": "COURSE1-923749238"
  },
  "https://purl.imsglobal.org/spec/lti/claim/launch_presentation": {
    "return_url": "https://example.com/webapps/blackboard/execute/blti/launchReturn?course_id=_122_1&content_id=_18938_1&toGC=false&launch_id=46e5c1e7-a68a-40e8-80c3-fe24a2ed1195&link_id=_18938_1&launch_time=1614630380476"
  },
  "exp": 1614633980,
  "iat": 1614630380,
  "email": "jcool@example.com",
  "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
    "context_memberships_url": "https://example.com/learn/api/v1/lti/external/namesandroles/_122_1?placement_id=_553_1",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly"
    ],
    "service_versions": [
      "2.0"
    ]
  },
  "given_name": "Joe",
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor"
  ],
  "nonce": "cb972240-2a01-45c6-954f-036c1153722b",
  "https://purl.imsglobal.org/spec/lti/claim/target_link_uri": "https://example.com/lti13",
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "6c19281a08504db5a447b511f00c0c7b",
    "label": "COURSE1",
    "title": "Course One",
    "type": [
      "http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering"
    ]
  },
  "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
    "description": "A course content link",
    "id": "_18938_1",
    "title": "LTI JWT Content"
  },
  "https://purl.imsglobal.org/spec/lti-gs/claim/groupsservice": {
    "context_groups_url": "https://example.com/learn/api/v1/lti/courses/_122_1/groups",
    "context_group_sets_url": "https://example.com/learn/api/v1/lti/courses/_122_1/groupsets",
    "scope": [
      "https://purl.imsglobal.org/spec/lti-gs/scope/contextgroup.readonly"
    ],
    "service_versions": [
      "1.0"
    ]
  },
  "aud": "53c4573a-1ac8-4484-b036-a7b22b557e8c",
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "name": "Joe Cool",
  "family_name": "Cool"
}
```
