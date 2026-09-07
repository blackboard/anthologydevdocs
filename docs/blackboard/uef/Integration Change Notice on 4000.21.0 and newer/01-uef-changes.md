---
title: "Navigation, Route, and URL Changes"
id: uef-changes-new-version
sidebar_position: 1
edited: "2026-09-01"
---

# Navigation, Route, and URL Changes Affecting UEF and LTI Integrations

Following changes to Blackboard LMS' system navigation, work deployed on the releases currently available in Test servers converted a number of course-level peek panels into full pages. This has changed internal route/state names, some URL paths, and some query parameters. In this document we will go over the changes that will be introduced and how to adjust your integration code.

## The UEF route and launch events

Ultra navigation through the UEF route event. Two route event types are emitted:

| Event          | Fires                                   |
| -------------- | --------------------------------------- |
| route          | After a navigation transition completes |
| route:changing | Before a navigation transition beings   |

Each carries the following payload:

```json
{
  "type": "event:event",
  "eventType": "route", // or 'route:changing'
  "routeName": "<full state name>",
  "routeData": {
    // route parameters for the destination
    "isLaunchedInNewWindow": false
  }
}
```

### RouteName is not a stable contract

The `routeName` value delivered by the Route event can change in any release. It is a description of Ultra's internal navigation state, not a versioned identifier. State names encode real structure — parent/child relationships that determine what Ultra renders — so when that structure changes, the names change with it. This is a property of the routing system, not a naming convention we can hold fixed.

Integrations that key behavior off routeName should expect to revisit that logic at navigation milestones.
Where a supported alternative exists, prefer it: see [Recommended Integration Practices](./02-recommended-changes.md#do-not-build-or-hardcode-learn-urls)

1. `routeName` reflects the whole parent state chain. A change anywhere in that chain changes the value, even when the specific page you care about is untouched. Both parent segments and leaf names changed in this release — see [Recommended Integration Practices](./02-recommended-changes.md#do-not-build-or-hardcode-learn-urls) for what that means for string matching.
2. `routeData` carries the route parameters. If you need the course or content id, read it from routeData rather than parsing routeName or the URL. `routeData` was not affected by these changes. It should be used instead of parsing of URLs.

### A worked example

The same navigation — a student clicking Start Attempt on a proctored assessment:

#### Before

```json
{
  "type": "event:event",
  "eventType": "route",
  "routeName": "base.courses.peek.course.outline.peek.lti.launch-frame",
  "routeData": {
    "coursesOrOrganizations": "courses",
    "courseId": "_302_1",
    "toolHref": "https://…/execute/blti/launchPlacement?handle=…&course_id=_302_1&content_id=…",
    "isLaunchedInNewWindow": false
  }
}
```

#### After

```json
{
  "type": "event:event",
  "eventType": "route",
  "routeName": "course.lti-launch-frame",
  "routeData": {
    "coursesOrOrganizations": "courses",
    "courseId": "_302_1",
    "toolHref": "https://…/execute/blti/launchPlacement?handle=…&course_id=_302_1&content_id=…",
    "contentId": "_1086_1",
    "isLaunchedInNewWindow": false
  }
}
```

### The route event does not see every LTI launch

If you use the route event to detect that an LTI tool has launched, be aware that it only covers launches that cause a navigation. A separate subscription exists for launches that do not:

| Subscription | Fires for                                                                       |
| ------------ | ------------------------------------------------------------------------------- |
| route        | Same-window launches inside Ultra - These navigate, so a route event is emitted |
| lti:launch   | Launches that occur without a route change                                      |

`lti:launch` is emitted in two cases: when Ultra launches a tool in a new window (no navigation happens, so
there is no route event), and when a UEF-hosted LTI launch component renders its iframe. Its payload is:

```json
{
  "type": "event:event",
  "eventType": "lti:launch",
  "launchData": {
    "courseId": "_555_1",
    "coursesOrOrganizations": "courses", // or 'organizations'
    "isLaunchedInNewWindow": true, // false for the UEF component case
    "toolHref": "<launch url>"
  }
}
```

If you need to observe LTI launches reliably, subscribe to both route and `lti:launch`. An integration
watching only route events will silently miss new-window launches. As with `routeData`, `launchData` carries
the identifiers you need — `courseId` and `toolHref` — so this path does not require route-name matching
either.

## Hardcoded Learn URL links

Constructed or hardcoded Learn URLs are not a supported integration mechanism and their stability is not guaranteed across releases

For returning the user to Learn after your tool finishes, use the `return_url` Learn provides in the LTI launch. It is supplied in the `launch_presentation` claim for LTI 1.3, or as `launch_presentation_return_url` for LTI 1.1. Redirect the user there when your tool is done; Learn recognizes it and routes the user to the right place. You never need to know or construct an Ultra URL.

This return URL is provided on all launch types, proctoring launches included. It takes the form:

```
https://<your-host>/webapps/blackboard/execute/blti/launchReturn?course_id=<courseId>&content_id=<contentId>&toGC=<bool>&nonce=<nonce>
```

Two things follow from that shape:

- It already carries `course_id` and `content_id`. You do not need to track them separately in order to return the user to the right place.
- Append to this URL — do not rebuild it. It carries a nonce and other parameters Learn requires. Preserve the query string you were given and add your own parameters to it.

:::danger courseId and course_id
URL Paths and query parameters are not meant to be parsed, and are unstable each release.
:::
