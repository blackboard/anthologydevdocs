---
title: Reading Content Items
id: lcs-read
sidebar_position: 2
edited: '2026-11-25'
---

Once you are authenticated with the `https://purl.imsglobal.org/spec/lti/scope/contentitem.read` scope (if not, follow [Authenticating to the LTI Subsystems](../01-authenticating-to-ags.md)), you can read your tool's content items. You can read all of them in a course at once, or just one.

Blackboard LMS always returns the **current** state of the item, which may differ from what your tool originally sent. For example, if an instructor renamed a link after adding it through Deep Linking, you get the new title.

## Listing all the items in a course

Send a `GET` request to the `contentitems` URL from the [Link and Content Service claim](./01-start-here.md#the-link-and-content-service-claim).

The response is a JSON object with an `items` array. If your tool has no items in the course, `items` is an empty array, not an error.

```http
GET https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJ...
```

```json
{
  "items": [
    {
      "readonly": ["available"],
      "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1",
      "type": "ltiResourceLink",
      "resourceLinkId": "_3712_1",
      "title": "Chapter 12 quiz",
      "text": "This is a link to an activity that will be graded",
      "url": "https://lti.example.com/launch",
      "lineItemIds": [
        "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems/_40_1"
      ],
      "published": false,
      "available": {
        "startDateTime": "2026-02-06T20:05:02Z",
        "endDateTime": "2026-03-07T20:05:02Z"
      },
      "submission": {
        "endDateTime": "2026-03-06T20:05:02Z"
      },
      "custom": {
        "quiz_id": "az-123",
        "duedate": "$Resource.submission.endDateTime"
      }
    },
    {
      "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3713_1",
      "type": "ltiResourceLink",
      "resourceLinkId": "_3713_1",
      "title": "Introduction video",
      "url": "https://lti.example.com/launch"
    }
  ]
}
```

:::info Items that weren't created through Deep Linking
The list includes every LTI link in the course that launches your tool, not only the ones created through Deep Linking. Links added manually from a Course Content placement, imported from a Common Cartridge or copied from another course are included too.
:::

:::caution Custom parameters
The `custom` object only contains parameters defined on the link itself. Parameters set at the tool or placement level are never included. Substitution variables such as `$Resource.submission.endDateTime` are returned exactly as stored, not replaced with their values.
:::

<!-- VERIFY: Replace the example URLs and IDs above with real values from a Blackboard LMS response. -->

### Filtering the results

You can add the following query parameters to the `contentitems` URL:

| Parameter          | Description                                                                                                                         | Example                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `type`             | Only return items of this type. If nothing matches, `items` is empty.                                                               | `?type=ltiResourceLink`          |
| `resource_link_id` | Only return the link with this resource link ID. If nothing matches, `items` is empty. Send it at most once.                       | `?resource_link_id=_3712_1`      |
| `limit`            | Maximum number of items per page. Blackboard LMS may return fewer.                                                                  | `?limit=50`                      |

<!-- VERIFY: Confirm that Blackboard LMS supports the resource_link_id filter (it is a SHOULD in the spec) and the default and maximum page sizes. -->

For example, to check whether a link already exists in the course (useful for an "already in course" indicator):

```http
GET https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems?resource_link_id=_9999_1
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJ...
```

```json
{
  "items": []
}
```

### Paging

Blackboard LMS may split the results into pages, even if you don't send `limit`. When there are more results, the response includes a `Link` header with a `rel="next"` URL:

```http
Link: <https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems?limit=50&offset=50>; rel="next"
```

Keep requesting the `next` URL until the response has no `Link` header with `rel="next"`.

:::caution Use the next URL as is
The `next` URL already contains all the filters from your first request. Don't add or change query parameters on it.
:::

<details>
<summary>Example of reading all pages using NodeJS (using Axios)</summary>

```js
const axios = require('axios');

async function getAllContentItems(contentItemsUrl, accessToken) {
  const items = [];
  let url = contentItemsUrl;

  while (url) {
    const response = await axios({
      method: 'GET',
      url,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    items.push(...response.data.items);

    // Look for a rel="next" entry in the Link header
    const linkHeader = response.headers.link || '';
    const next = linkHeader
      .split(',')
      .map((part) => part.match(/<([^>]+)>\s*;\s*rel="?next"?/))
      .find(Boolean);

    url = next ? next[1] : null;
  }

  return items;
}
```

</details>

## Reading a single item

To read one item, send a `GET` request to its URL. That's the `id` of the item, or the `contentitem` URL from the claim when your tool was launched from that link.

```http
GET https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJ...
```

```json
{
  "id": "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/contentItems/_3712_1",
  "type": "ltiResourceLink",
  "resourceLinkId": "_3712_1",
  "title": "Chapter 12 quiz",
  "lineItemIds": [
    "https://learn.blackboard.com/learn/api/v1/lti/courses/_4_1/lineItems/_40_1"
  ],
  "url": "",
  "custom": {
    "quiz_id": "az-123",
    "duedate": "$Resource.submission.endDateTime"
  }
}
```

If the item doesn't exist, or doesn't belong to your tool, Blackboard LMS returns `404 Not Found`.

## Response codes

| Code               | Meaning                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `200 OK`           | The request succeeded. For a list, `items` may be empty.                                     |
| `401 Unauthorized` | The bearer token is missing or expired. Request a new token.                                  |
| `403 Forbidden`    | The token doesn't include the `contentitem.read` scope.                                       |
| `404 Not Found`    | The single item doesn't exist or doesn't belong to your tool.                                 |

<!-- VERIFY: Confirm the 401/403 codes Blackboard LMS returns for missing or insufficient tokens. -->

## Next steps

Now that you can read your items, you can [update a content item](./03-updating-content-items.md).
