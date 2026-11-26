---
title: Working with the Link and Content Service
id: lcs-start
sidebar_position: 1
edited: '2026-11-25'
---

The Link and Content Service (LCS for short) is an LTI Advantage service from 1EdTech. It lets your tool find and manage the content it owns inside a Blackboard LMS course. Deep Linking 2.0 lets a user _add_ your content to a course through a UI flow. LCS lets your tool _work with that content afterwards_, without anyone in the UI. Your tool can list its links, read one link, update it or create a new one.

LCS is a sibling of the Line Item service in the [Assignments and Grades Service](../ags/01-start-here.md). AGS manages grade columns. LCS manages the LTI Resource Links (the course content items) that point to your tool.

:::caution CAVEAT
LCS only gives you access to the content items that belong to your tool. You cannot see or change course content created by other tools or by the instructor. This includes items that came from Deep Linking, items added manually from a Course Content placement, items imported from a Common Cartridge and items brought over by a course copy. Blackboard LMS decides which items your tool owns the same way it decides which tool to launch for a link.
:::

## What can you do with it?

Some common scenarios where LCS helps your integration:

| Scenario                        | How LCS helps                                                                                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Already in course" indicator   | Before showing your Deep Linking content picker, list the items already in the course and flag them, so instructors don't add the same content twice.                                   |
| Pointing links to new versions  | When an instructor creates a new version of an activity in your tool, update the link's `url` and/or `custom` parameters so it launches the latest version, even after a course copy.    |
| Reflecting availability         | Read the `published` state and availability dates of a link, so your tool can block access to a resource that is hidden in the course.                                                  |
| Date synchronization            | Push availability and submission date changes made in your tool back to Blackboard LMS.                                                                                                  |
| Title updates                   | When an activity is renamed in your tool, rename the link in the course too.                                                                                                             |
| Link maintenance                | Bulk-update launch URLs (for example, after a domain change) without asking instructors or administrators to edit links by hand.                                                       |
| Orphan clean-up                 | Find activities in your tool that no link in any course points to any more, and remove them.                                                                                             |

## Before you start

LCS uses the same LTI 1.3 infrastructure as the other LTI Advantage services, so nothing new is needed on the Developer Portal side. Make sure that:

1. Your tool is [registered in the Developer Portal](../../01-register-an-application.md) and deployed to the Blackboard LMS instance you are testing against.
2. Your tool can complete an [LTI launch](../../core/01-core-launch.md) and validate the `id_token`.
3. Your tool can [request a bearer token for the LTI subsystems](../01-authenticating-to-ags.md).

<!-- VERIFY: Confirm whether an administrator must enable LCS for the tool (for example, an institution policy setting under Admin > LTI Tool Providers > Manage tool, similar to the grade and membership service settings), and the exact label of that setting. Replace this comment with an :::info block describing it, or delete it if no setting exists. -->

## The Link and Content Service claim

When LCS is available, Blackboard LMS adds the following claim to every LTI launch from a course, whatever the message type (`LtiResourceLinkRequest`, `LtiDeepLinkingRequest`, etc.):

```
https://purl.imsglobal.org/spec/lti/claim/linkcontentservice
```

| Property       | Description                                                                                                                                        | Type          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `version`      | Versions of the service supported by Blackboard LMS. Currently `["1.0.0"]`.                                                                      | Array[String] |
| `scopes`       | Scopes your tool can request a token for in this context. These tell you which operations are allowed.                                            | Array[String] |
| `types`        | Content item types supported in this context. `ltiResourceLink` is always included.                                                               | Array[String] |
| `contentitems` | URL to list your tool's items in the current course, and to create new ones (if allowed).                                                         | String        |
| `contentitem`  | Only on resource link launches. URL of the link being launched, used to read or update it.                                                        | String        |

<!-- VERIFY: Replace the example URLs below with the real URL pattern Blackboard LMS emits for contentitems / contentitem. -->

### Launching from a course content item

When the user launches an LTI link from the course, the claim includes the `contentitem` URL of that link:

```json
"https://purl.imsglobal.org/spec/lti/claim/linkcontentservice": {
  "version": ["1.0.0"],
  "scopes": [
    "https://purl.imsglobal.org/spec/lti/scope/contentitem.read",
    "https://purl.imsglobal.org/spec/lti/scope/contentitem.update",
    "https://purl.imsglobal.org/spec/lti/scope/contentitem.create"
  ],
  "types": ["ltiResourceLink"],
  "contentitems": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems",
  "contentitem": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1"
}
```

### Launching from other placements

For launches that are not tied to a specific link, such as a Deep Linking request or a Course tool placement, the claim has no `contentitem` property. You can still list the items in the course with `contentitems`:

```json
"https://purl.imsglobal.org/spec/lti/claim/linkcontentservice": {
  "version": ["1.0.0"],
  "scopes": [
    "https://purl.imsglobal.org/spec/lti/scope/contentitem.read"
  ],
  "types": ["ltiResourceLink"],
  "contentitems": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems"
}
```

:::info Always check the scopes in the claim
Don't assume every operation is available. The `scopes` array in the claim lists what your tool can do _in this context_. Read access is always included. Update and create depend on what is allowed for your tool and the course. Only request the scopes that are listed in the claim.
:::

:::info Service access without LTI launch
As with AGS, you can cache the `contentitems` URL from a launch and use it later, for example from a background job, to call the service without a user present. Refresh your cache on later launches so you always have current URLs.
:::

## Scopes and allowed methods

| Scope                                                            | Description                                       | Allowed HTTP method |
| ---------------------------------------------------------------- | ------------------------------------------------- | ------------------- |
| `https://purl.imsglobal.org/spec/lti/scope/contentitem.read`     | List your tool's items, or read a single item.    | `GET`               |
| `https://purl.imsglobal.org/spec/lti/scope/contentitem.update`   | Update one of your tool's items.                  | `PUT`               |
| `https://purl.imsglobal.org/spec/lti/scope/contentitem.create`   | Create a new item in the course.                  | `POST`              |

## Authenticating to the service and authorizing the requests

LCS uses the same bearer token as AGS and Names and Roles. Follow [Authenticating to the LTI Subsystems](../01-authenticating-to-ags.md), and add the LCS scopes you need to the space-separated `scope` value of the token request. For example:

```
scope=https://purl.imsglobal.org/spec/lti/scope/contentitem.read https://purl.imsglobal.org/spec/lti/scope/contentitem.update https://purl.imsglobal.org/spec/lti-ags/scope/lineitem
```

:::tip One token, several services
If your tool uses LCS together with AGS (for example, to read the grade column linked to a content item), request all the scopes in a single token request.
:::

Send the following headers on LCS requests. Note that LCS uses plain `application/json`, not the AGS-specific media types:

| Name            | Value                                                          |
| --------------- | -------------------------------------------------------------- |
| `Accept`        | `application/json`                                             |
| `Content-Type`  | `application/json` (only for `PUT` and `POST` requests)        |
| `Authorization` | `Bearer {access_token}` received from the authentication request |

## Available endpoints

Always use the URLs from the claim and from the `id` of each content item. Don't build them yourself.

| Endpoint                          | Description                                                                                     | Available methods       |
| --------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| `contentitems` URL (from claim)   | Lists all of your tool's items in the course. Also used to create a new item.                  | `GET`, `POST`           |
| `contentitem` URL / item `id`     | Reads or updates a single content item.                                                        | `GET`, `PUT`            |

## The content item object

Content items use the same format as the `ltiResourceLink` type in [Deep Linking 2.0](../../dl/02-content-types.md), with a few additions and differences:

| Field            | Description                                                                                                                                               | Value                | Example                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `id`             | Full URL of this content item. Use it to read or update the item. Read-only.                                                                              | String (URL)         | `{learn_domain}/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1`          |
| `type`           | Content type. Read-only.                                                                                                                                  | String               | `ltiResourceLink`                                                            |
| `resourceLinkId` | Same value sent as the resource link ID when this link is launched. Read-only.                                                                           | String               | `_3712_1`                                                                    |
| `title`          | Title of the item as shown in the course.                                                                                                                 | String               | `"Chapter 12 quiz"`                                                          |
| `text`           | Description of the item.                                                                                                                                  | String               | `"Quiz about chapter 12"`                                                    |
| `url`            | Launch URL of the link. Can be blank if the link uses the tool's default target link URI.                                                                 | String (URL)         | `https://lti.example.com/launch`                                             |
| `custom`         | Custom parameters defined **on this link** only. Tool-level custom parameters are not included. Substitution variables are returned as is (`$Variable`). | Object               | `{ "quiz_id": "az-123" }`                                                    |
| `lineItemIds`    | AGS line item URLs linked to this item, if any. Replaces the Deep Linking `lineItem` property. Read-only.                                                | Array[String (URL)]  | `["{learn_domain}/learn/api/v1/lti/courses/_4_1/lineItems/_40_1"]`           |
| `published`      | Whether the item is visible to students.                                                                                                                  | Boolean              | `true`                                                                       |
| `available`      | Availability window, with `startDateTime` and/or `endDateTime`.                                                                                           | Object (ISO dates)   | `{ "startDateTime": "2026-02-06T20:05:02Z" }`                                |
| `submission`     | Submission window, with `startDateTime` and/or `endDateTime`.                                                                                             | Object (ISO dates)   | `{ "endDateTime": "2026-03-06T20:05:02Z" }`                                  |
| `readonly`       | Names of top-level properties that Blackboard LMS will not let your tool change. Changes to these fields are ignored.                                     | Array[String]        | `["available"]`                                                              |

<!-- VERIFY: Confirm which optional properties Blackboard LMS returns (icon, thumbnail, iframe, window, published, available, submission), and which fields it typically marks as readonly. Remove rows for unsupported properties. -->

:::info Grading lives in AGS
A content item never contains the grade column itself, only its URL in `lineItemIds`. To read or change the maximum score, label or due date of the grade column, use [the Assignments and Grades Service](../ags/02-working-with-columns.md) with that URL. If there is a single linked column, its URL is the same as the `lineitem` value in the AGS claim of the launch.
:::

## Next steps

Now that you know how the service works, you can:

- [Read content items](./02-reading-content-items.md)
- [Update a content item](./03-updating-content-items.md)
- [Create content items](./04-creating-content-items.md)

More information about the specification itself can be found here: [https://standards.1edtech.org/lti/specifications/services/link_content/specification](https://standards.1edtech.org/lti/specifications/services/link_content/specification)
