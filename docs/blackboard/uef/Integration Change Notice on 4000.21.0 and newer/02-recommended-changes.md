---
title: "Recommended Integration Practices"
id: uef-recommended-practices
sidebar_position: 2
edited: "2026-09-01"
---

# Recommended integration practices

Following these recommendations means future navigation changes should not break your integration.

## Matching routeName safely

If you must match on `routeName`, never compare the full string for equality. Parent segments change; matching the leaf suffix you actually care about is significantly more durable:

```js
// Fragile — breaks whenever any parent state changes
if (routeName === "course.outline.peek.assessment.ims-proctoring") {
  /* ... */
}
// More durable — survives parent state changes
if (routeName.endsWith(".peek.assessment.ims-proctoring")) {
  /* ... */
}
```

Be aware of the limit of this technique. Suffix matching protects you when only the parent chain changes. It does not protect you when the leaf name itself changes.

Suffix matching reduces your exposure; it does not eliminate it. Any logic keyed off `routeName` remains subject to change. Where one of the mechanisms below covers your use case, use it instead of route matching.

When validating against a new release, assert that your route matches still fire. Checking only for errors will not detect this class of break.

## Use `ultra_return_loc` to control the return

If your goal is to control where Ultra navigates after an LTI launch returns, there is a supported parameter for exactly this. Do not infer it from route names. Include `ultra_return_loc` on the LTI launch return URL:

| Value          | Returns to                                           |
| -------------- | ---------------------------------------------------- |
| launch_attempt | Proctored assessment attempt (taking the assessment) |
| assessment     | Assessment overview                                  |

### Supporting parameters

`content_id` for both; plus `course_id`, `password`, and `returnToProctoringToolOnEndAssessment` for `launch_attempt`.

## Read route parameters from routeData, not from names or URLs

The UEF route event's routeData object carries the route parameters. Prefer it over parsing routeName or the URL.

## Subscribe to both `route` and `lti:launch`

If you need to know when an LTI tool has launched, the `route` event alone is not sufficient — it only fires for launches that navigate. New-window launches emit `lti:launch` instead, and an integration watching only route events will never see them.

Subscribe to both, and read the identifiers you need from `routeData` and `launchData` respectively. See **_[The UEF route and launch events](./01-uef-changes.md#the-uef-route-and-launch-events)_** document for more information.

## Do not build or hardcode Learn URLs

As seen in **_[Hardcoded Learn URL Links](./01-uef-changes.md#hardcoded-learn-url-links)_**, Constructed Learn URLs are not a supported integration mechanism and are not guaranteed stable across releases.
