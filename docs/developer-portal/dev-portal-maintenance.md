---
title: Developer Portal Maintenance and Releases
sidebar_position: 7
displayed_sidebar: documentationSidebar
id: devportal-maintenance
published: "2023-05-09"
edited: "2023-05-09"
author: Mark O'Neil
---

<VersioningTracker frontMatter={frontMatter}/>

### Maintenance and Update Window

The Developer Portal has an _optional_ maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required.

You may monitor the Portal maintenance schedule and progress at [https://status.blackboard.com](https://status.blackboard.com) and review any update release notes below.

> NOTE: Should a critical outage\* take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible - typically within four days post event. Any non-critical outage\*\* will be covered using our in-Portal announcements feature only.

\* critical outage: service is unavailable or operating outside of usable performance or functional parameters.

\*\* non-critical outage: service is available, but operating at degraded performance.

### Release Notes

#### 10/17/2023
Maintenance only.

In order to improve performance during peak usage periods and mitigate the risk of database connection failures due to over utilization we are upgrading our database instance type.

The Developer Portal will remain available during this time. Though some database related features such as creating new accounts or applications will be unavailable during the maintenance period. The *actual expected duration* of the maintenance period is 2 minutes or less.

Maintenance Date : 10/17/2023

Maintenance Time : 06:30 AM UTC (2023-10-17T06:30:00Z)

Maintenance window : 10 Mins

You may follow status and updates at [https://status.blackboard.com](https://status.blackboard.com).

#### 07/11/2023

Release Name: 2023.3

:exclamation: The length of this maintenance window, 12:30 am - 02:30 am EST, is due to the Redis Upgrade, but may complete in ~45 minutes. We apologize in advance for the short notice.

Features:

- **Redis Upgrade**: For security and performance purposes we are upgrading to the latest version of Redis. This will have no impact on current Developer-facing functionality.
- **LTI Dynamic Registration**: For performance and forward looking enhancements we are improving the backend which supports the dynamic registration of LTI integrations with Learn. This will have no impact on current Developer-facing functionality.

#### 06/06/2023

Release Name: 2023.2

Features:

- **Announcement Panel**: The Announcement Panel provides Developer facing Portal, APIs, and Event information. When a new announcement is available it will be indicated via a red dot on the Announcements icon in the Portal task bar. Clicking on the Announcements icon displays active announcements - latest at the top.

<AuthorBox frontMatter={frontMatter}/>
