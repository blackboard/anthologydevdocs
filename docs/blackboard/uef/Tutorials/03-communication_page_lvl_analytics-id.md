---
title: "UEF rendering based on UI item availability"
id: communication-page-lvl-analytics
sidebar_position: 3
author: Gokulakrishnan Raman
edited: "2024-10-11"
---

## Introduction

This enhancement to the UEF integration allows the framework to know if an analytics-id exists (or not) on the page, so should partners want to add functionality onto a page based on an elements' visibility they are sure of the object they want to target.

## Outline of page-level analytics-id to integration

In order to provide a number of key functionalities that are already being supported in Learn Original, Some partner integration need the ability to ask UEF about the presence of specific elements in the current focused panel and in view port on the page based on the analytics-id. The response will be a true or false whether the element is present on screen.

## Batch Processing and Rate-limiting

All the requests received under one second will be batched, and a single response will be sent at the end of one second to its respective integration portal.

- If Single Integration - rate limiting to 20 requests / second.
- If Multiple Integration - rate limiting to 15 requests /second to each integration.

> The timer will be initiated on any first request.

## Request Structure

Two keys must be present in request JSON → **Type and AnalyticsIds.**

- **Type** → This key must contain the String value which indicates the request type and purpose of request.

- **AnalyticsIds** → This key should have the list of analytics Id's for which the page component's presence will be checked in the current view port and in the active panel with 100% visibility.

The type of this request event integration will always be **"analytics:visible"**

Below is the example of the request structure

### Request Event

```json
{
"type":"analytics:visible",
"analyticsIds":["analyticsId", "analyticsId", ...]
}
```

## Response Structure

Two keys will be present in the response JSON → **Type** and **Result**. This response will have all "analyticsId" which was sent in the request event along with "isElementVisible" flag to indicate whether the requested analytic ID is present in the view port and in the active panel with 100% visibility or not.

- **Type** → This will have the String value that indicates the request type and the purpose of the request.
- **Result** → This will have two parameters → AnalyticsId and isElementVisible.
- **AnalyticsId** → This key will have the analytics ID that was sent in the request event.
- **isElementVisible** → This key will have either True/False that indicates whether the given analytics ID is visible in view port and in active panel with 100% visibility or not.

### Response event

```json
{
  "type": "analytics:visible",
  "results" : [ {
      "analyticsId": "analyticsId from UEF",
      "isElementVisible": true/false
    },
    {
      "analyticsId": "analyticsId from UEF",
      "isElementVisible": true/false
    } , ...
  ]
}
```

## Page-Level analytics-id integration Workflow

![Page-Level analytics-id integration Workflow](/assets/img/communication_page_lvl_analytics_id_1.png)

## Result Behavior Of Page-level analytics-id Integration:

![Result Behavior Of Page-level analytics-id Integration](/assets/img/communication_page_lvl_analytics_id_2.png)

### Interface

```json
1.  IIntegrationPageAnalyticsRequest {
	type: typeof ANALYTICS_VISIBLE_TYPE;
	analyticsIds: string[];
   }


2. IIntegrationPageAnalyticsResult {
   analyticsId: string;
   isElementVisible: boolean;
   }



3. IIntegrationPageAnalyticsResponse {
   type: typeof ANALYTICS_VISIBLE_TYPE;
   Results: IIntegrationPageAnalyticsResult[];
  }
```

### Enum

IntegrationPageAnalytics

1. ANALYTICS_RATE_LIMIT = 20
2. MULTIPLE_INTEGRATION_ANALYTICS_RATE_LIMIT = 15
3. ANALYTICS_TIMEOUT = 1000

### Const:

1. ANALYTICS_VISIBLE_TYPE = 'analytics:visible';
