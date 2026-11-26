---
title: Updating Content Items
id: lcs-update
sidebar_position: 3
edited: '2026-11-25'
---

With the `https://purl.imsglobal.org/spec/lti/scope/contentitem.update` scope, your tool can change its content items in a course. For example, it can point a link to a new version of an activity, rename it, or update its dates. If you haven't got a token yet, follow [Authenticating to the LTI Subsystems](../01-authenticating-to-ags.md) first.

Check the `scopes` array in the [Link and Content Service claim](./01-start-here.md#the-link-and-content-service-claim) before you try an update. If `contentitem.update` isn't listed, updates aren't allowed in that context.

## How updates work

To update an item, send a `PUT` request to the item's `id` URL with the **complete** item in the body.

:::caution PUT replaces the whole item
An update is not a partial update (patch). Blackboard LMS treats any property missing from the body as removed. For example, if you leave out `custom`, the link's custom parameters are removed. If you leave out `available`, the availability dates are cleared.
:::

What happens to each field:

| Case                                                       | What Blackboard LMS does                                                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Field can be changed                                       | Saves the new value.                                                                                         |
| Field is listed in `readonly`                              | Accepts the request but ignores the change.                                                                 |
| `id`, `type`, `resourceLinkId` or `lineItemIds` changed    | Ignores the change. These fields are always read-only.                                                     |
| Field missing from the body                                | Removes the value.                                                                                           |
| A required field (such as `type` or `title`) is missing    | Rejects the request with `400 Bad Request`.                                                                 |

Your tool can always update the `url` and `custom` properties of an LTI Resource Link.

<!-- VERIFY: List the other fields Blackboard LMS allows a tool to update (title, text, published, available, submission, icon...), and which ones depend on course settings or Ultra vs Original course view. -->

The response contains the item as it was saved. Compare it with what you sent to find out which changes were applied and which were ignored.

## Recommended flow: read, change, write

An instructor may have changed the item in Blackboard LMS since your tool last saw it, for example by renaming it. To avoid undoing their changes:

1. `GET` the item to get its current state.
2. Change only the properties you need to change.
3. `PUT` the full object back.
4. Check the response to confirm your changes were saved.

### Example

In this example, `title` and `url` are read-only, while the dates and custom parameters can be changed.

**1. Read the current item**

```http
GET https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJ...
```

```json
{
  "readonly": ["title", "url"],
  "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1",
  "type": "ltiResourceLink",
  "resourceLinkId": "_3712_1",
  "title": "Introduction video",
  "text": "This is a link to a video resource",
  "url": "https://lti.example.com/launch",
  "custom": {
    "video_id": "89042-ejxl01"
  },
  "available": {
    "startDateTime": "2026-02-06T20:05:02Z",
    "endDateTime": "2026-03-07T20:05:02Z"
  },
  "submission": {
    "endDateTime": "2026-03-06T20:05:02Z"
  }
}
```

**2 and 3. Send the full updated item**

The tool changes the title, URL, custom parameters and dates. The `readonly` property is only returned by Blackboard LMS, so you don't need to send it back.

```http
PUT https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1
Accept: application/json
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJ...
```

```json
{
  "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1",
  "type": "ltiResourceLink",
  "resourceLinkId": "_3712_1",
  "title": "Introduction video (v2)",
  "text": "This is a link to a video resource",
  "url": "https://lti.example.com/launch/v2",
  "custom": {
    "video_id": "89042-ejxl01-v2"
  },
  "available": {
    "startDateTime": "2026-02-06T20:05:02Z",
    "endDateTime": "2026-03-11T22:00:00Z"
  },
  "submission": {
    "endDateTime": "2026-03-08T22:00:00Z"
  }
}
```

**4. Check the response**

Blackboard LMS saved the new custom parameters and dates, but kept the original `title` and `url` because they are read-only:

```json
{
  "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1",
  "type": "ltiResourceLink",
  "resourceLinkId": "_3712_1",
  "title": "Introduction video",
  "text": "This is a link to a video resource",
  "url": "https://lti.example.com/launch",
  "custom": {
    "video_id": "89042-ejxl01-v2"
  },
  "available": {
    "startDateTime": "2026-02-06T20:05:02Z",
    "endDateTime": "2026-03-11T22:00:00Z"
  },
  "submission": {
    "endDateTime": "2026-03-08T22:00:00Z"
  }
}
```

<details>
<summary>Example of the read, change, write flow using NodeJS (using Axios)</summary>

```js
const axios = require('axios');

async function updateContentItem(itemUrl, accessToken, changes) {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  // 1. Get the current state of the item
  const { data: current } = await axios({ method: 'GET', url: itemUrl, headers });

  // 2. Apply only the changes we need, keeping everything else
  const { readonly, ...item } = current;
  const updated = { ...item, ...changes };

  // 3. Send the full item back
  const { data: saved } = await axios({
    method: 'PUT',
    url: itemUrl,
    headers: { ...headers, 'Content-Type': 'application/json' },
    data: updated,
  });

  // 4. Find the changes that were ignored
  const ignored = Object.keys(changes).filter(
    (key) => JSON.stringify(saved[key]) !== JSON.stringify(changes[key])
  );

  return { saved, ignored };
}

// Point the link to a new version of the content
// await updateContentItem(item.id, token, { custom: { video_id: '89042-ejxl01-v2' } });
```

</details>

:::caution Substitution variables in custom parameters
You can add custom parameters that use substitution variables (for example `$Context.id.history`), but Blackboard LMS may not resolve them on launch if your tool wasn't allowed access to that data when it was deployed. Don't depend on them being replaced. See [Custom properties and parameter substitution](../../core/05-dynamic-values.md) for the supported variables.
:::

<!-- VERIFY: Describe Blackboard LMS's actual behavior for substitution variables added through LCS (rejected, stored but not resolved, or resolved subject to the institution's privacy settings). -->

:::info Grade columns
Changes to grading, such as the maximum score or the due date of the grade column, are made through AGS, not LCS. Use the URLs in `lineItemIds` with [the Assignments and Grades Service](../ags/02-working-with-columns.md).
:::

## Response codes

| Code               | Meaning                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `200 OK`           | The item was saved. The body contains the item as saved.                                 |
| `400 Bad Request`  | The body is missing required properties, or isn't valid JSON.                            |
| `403 Forbidden`    | The token doesn't include the `contentitem.update` scope.                                |
| `404 Not Found`    | The item doesn't exist or doesn't belong to your tool.                                   |

## Next steps

Next, learn how to [create content items](./04-creating-content-items.md).
