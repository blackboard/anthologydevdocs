---
title: Handling the Deep Link item launch
id: dl-item-launch
published: ""
edited: "2024-09-25"
sidebar_position: 4
---

Once the item is created, the user will be able to launch the item without issue. This item will follow the same process of the LTI Message Launch flow however, instead of pointing to the entry point of your tool, the JWT token will have the specific URL given by your tool when creating the item as a target under the claim `"https://purl.imsglobal.org/spec/lti/claim/target_link_uri"`

This is a sample of a Deep Linking item launch:

<details>
<summary>Deep linking request sample</summary>

```json
{
  "sub": "561ac4762b5142a0b1d3ed1aa40789c1",
  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "86e8b331-a6cd-486c-b006-9893c749e242",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
    "lineitems": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems",
    "lineitem": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems/_40_1",
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
  "https://purl.imsglobal.org/spec/lti/claim/custom": {
    "key1": "some & value",
    "dueDate": "2024-10-18T13:00:00Z",
    "groupId": "$CourseGroup.id",
    "source": "link",
    "userName": "administrator",
    "externalIdentifierUPN": "dev@localhost",
    "userSysRoles": "Z",
    "caliper_profile_url": "https://ec2-3-85-141-242.compute-1.amazonaws.com/learn/api/v1/telemetry/caliper/profile",
    "caliper_federated_session_id": "https://caliper-mapping.cloudbb.blackboard.com/v1/sites/c97ad917-97a9-4bc4-9610-687f355647e3/sessions/6488A757D7952510E01B6A7BC90A0600",
    "firstAvailable": "2024-09-18T13:00:00Z",
    "userEmail": "dev@localhost",
    "contextHistory": "",
    "resourceHistory": "$ResourceLink.id.history",
    "lastAvailable": "2024-10-18T13:00:00Z"
  },
  "https://purl.imsglobal.org/spec/lti/claim/lis": {
    "person_sourcedid": "administrator",
    "course_section_sourcedid": "course-link"
  },
  "https://purl.imsglobal.org/spec/lti/claim/launch_presentation": {
    "return_url": "https://learn.blackboard.com/webapps/blackboard/execute/blti/launchReturn?course_id=_4_1&content_id=_47_1&toGC=false&nonce=948a623330a844b0a00b9cda9d64b132&launch_id=bc55f4e4-1952-4584-b599-dd04599d5278&link_id=_47_1&launch_time=1727291789505",
    "locale": "en-US"
  },
  "exp": 1727295389,
  "iat": 1727291789,
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
  "nonce": "bc1600a4-5b3a-43e5-a613-327cbc890110",
  "https://purl.imsglobal.org/spec/lti/claim/target_link_uri": "https://dev.writingcode.dev/lti13",
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "ad83286ea6494b799bd1a5d57436d7d8",
    "label": "course-link",
    "title": "Course Link",
    "type": ["http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering"]
  },
  "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
    "description": "A & description with quotes \"",
    "id": "_47_1",
    "title": "A title for LTI & 1.3 \" Link"
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
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "name": "Blackboard Administrator",
  "family_name": "Administrator",
  "https://blackboard.com/lti/claim/one_time_session_token": "cf4bc4efdfb54e24840c9b5a144749bd",
  "https://blackboard.com/webapps/foundations-connector/foundations-ids": {
    "site-id": "c97ad917-97a9-4bc4-9610-687f355647e3",
    "tenant-id": "92446862-2bdc-443d-88e8-2054de750557"
  }
}
```

</details>
