---
title: Custom properties and parameter substitution
id: lti-parameters
sidebar_position: 5
published: ''
edited: '2024-09-25'
---

As defined in the Core LTI 1.3 specifications, Learn supports the addition of custom parameters to both the global tool configuration and a per-placement configuration. These can be defined as key-value pairs separated by equal signs (=). Additionally, Learn supports dynamic variables (also called parameter substitution in the specifications), where the value added in the launch will depend on the status of the environment at launch time.

## Custom Parameters

As mentioned, the custom parameters are key-value pairs that are added to the JWT token sent to your tool when the LTI Message Launch flow is completed. Each pair occupies a single line, and there is no limit on the amount of custom parameters that can be added. An example of the custom parameters is the following:

```
key1=some & value
```

The resulting value in the JWT token sent to your tool is the following:

```json
"https://purl.imsglobal.org/spec/lti/claim/custom": {
    "key1": "some & value",
}
```

## Parameter substitution

To enhance this functionality, you can also use the custom dynamic variables defined in [Dynamic Rendering with template Variables](/docs/blackboard/rest-apis/advanced/dynamic-rendering) to get user, course or environment information at launch time.

Learn also supports the substitution variables defined in the LTI specification file here: [https://www.imsglobal.org/spec/lti/v1p3#customproperty](https://www.imsglobal.org/spec/lti/v1p3#customproperty). The syntax is the same as a custom parameter (a key-value pair separated by an equal sign), but the variable from the specification must be preceded with a dollar sign, as seen here:

```
firstAvailable=$ResourceLink.available.startDateTime
userSysRoles=@X@user.role@X@
```

The resulting values on the launch will be:

```
"https://purl.imsglobal.org/spec/lti/claim/custom": {
    "firstAvailable": "2024-09-25T13:00:00Z",
    "userSysRoles": "Z",
}
```

:::caution No value to replace
In case the variable doesn't have a value stored for it (e.g: System role, enrollment start date, context history, etc), the system will send the string with the variable unaltered, as seen here:

The parameter:

```
groupId=$CourseGroup.id
```

The included value

```
"groupId": "$CourseGroup.id",
```

:::
