---
title: Creating Content Items
id: lcs-create
sidebar_position: 4
edited: '2026-11-25'
---

Besides reading and updating, the Link and Content Service lets your tool add new items to a course, with no Deep Linking flow and no instructor action needed. If you haven't got a token yet, follow [Authenticating to the LTI Subsystems](../01-authenticating-to-ags.md) first.

| Scope                                                          | Method | URL                             |
| -------------------------------------------------------------- | ------ | ------------------------------- |
| `https://purl.imsglobal.org/spec/lti/scope/contentitem.create` | `POST` | `contentitems` URL (from claim) |

Check the `scopes` array in the [Link and Content Service claim](./01-start-here.md#the-link-and-content-service-claim) to confirm that creating items is allowed in that course.

## Creating a content item

To add an item, send a `POST` request to the `contentitems` URL with the new item in the body. You can only create one item per request. Only send types listed in the `types` array of the claim.

The body uses the same format as a [Deep Linking 2.0](../../dl/02-content-types.md) `ltiResourceLink`. There is one important difference from the read and update format:

:::caution Use lineItem, not lineItemIds
To create a grade column together with the link, send a `lineItem` object, as you would in Deep Linking. Don't send `lineItemIds`. In the response, Blackboard LMS returns the new column's URL in `lineItemIds` and leaves `lineItem` out.
:::

### Where the new item appears

New items are added to the course **hidden from students**, so the instructor can review them and move them to the right place before students see them.

<!-- VERIFY: Describe where Blackboard LMS places new items in Ultra and Original courses (for example, at the bottom of the Course Content page or in a dedicated folder), and how instructors are notified, if at all. -->

### Example

```http
POST https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems
Accept: application/json
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJ...
```

```json
{
  "type": "ltiResourceLink",
  "title": "Chapter 12 quiz",
  "text": "This is a link to an activity that will be graded",
  "url": "https://lti.example.com/launch",
  "icon": {
    "url": "https://lti.example.com/image.jpg",
    "width": 100,
    "height": 100
  },
  "lineItem": {
    "scoreMaximum": 87,
    "label": "Chapter 12 quiz",
    "resourceId": "xyzpdq1234",
    "tag": "originality"
  },
  "available": {
    "startDateTime": "2026-02-06T20:05:02Z",
    "endDateTime": "2026-03-07T20:05:02Z"
  },
  "submission": {
    "endDateTime": "2026-03-06T20:05:02Z"
  },
  "custom": {
    "quiz_id": "az-123"
  }
}
```

Blackboard LMS returns the created item. It now has an `id` and a `resourceLinkId`, and may include `readonly`. Properties that Blackboard LMS doesn't support are left out of the response. Here, the icon's `width` and `height` were dropped:

```json
{
  "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3714_1",
  "type": "ltiResourceLink",
  "resourceLinkId": "_3714_1",
  "title": "Chapter 12 quiz",
  "text": "This is a link to an activity that will be graded",
  "url": "https://lti.example.com/launch",
  "icon": {
    "url": "https://lti.example.com/image.jpg"
  },
  "lineItemIds": [
    "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems/_41_1"
  ],
  "available": {
    "startDateTime": "2026-02-06T20:05:02Z",
    "endDateTime": "2026-03-07T20:05:02Z"
  },
  "submission": {
    "endDateTime": "2026-03-06T20:05:02Z"
  },
  "custom": {
    "quiz_id": "az-123"
  }
}
```

<!-- VERIFY: Replace the response above with a real Blackboard LMS response, so it shows exactly which properties are kept or dropped. -->

:::tip Save the id
Store the returned `id` (and `resourceLinkId`) in your tool. You will need it to update the item later, and to match launches to your own activity.
:::

## Response codes

| Code               | Meaning                                                                       |
| ------------------ | ----------------------------------------------------------------------------- |
| `200 OK`           | The item was created. The body contains the created item.                     |
| `400 Bad Request`  | The body is missing required properties, uses an unsupported type, or isn't valid JSON. |
| `403 Forbidden`    | The token doesn't include the `contentitem.create` scope.                     |

<!-- VERIFY: Confirm the status code Blackboard LMS returns on a successful create (200 or 201) and for an unsupported type. -->

## Next steps

You now know how to read, update and create your tool's content in Blackboard LMS. If you also need to manage the grade columns linked to these items, see [Interacting with Columns](../ags/02-working-with-columns.md).
