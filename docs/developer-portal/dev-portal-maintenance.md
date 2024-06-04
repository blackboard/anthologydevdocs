---
title: Developer Portal Maintenance and Releases
sidebar_position: 8
displayed_sidebar: documentationSidebar
id: devportal-maintenance
published: '2023-05-09'
edited: '2024-03-20'
author: Mark O'Neil, Davey Herrera, Dan Magers, Camilo Dominguez
---

<VersioningTracker frontMatter={frontMatter}/>

### Maintenance and Update Window

The Developer Portal has an _optional_ maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required.

You may monitor the Portal maintenance schedule and progress at [https://status.blackboard.com](https://status.blackboard.com) and review any update release notes below.

> NOTE: Should a critical outage\* take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible - typically within four days post event. Any non-critical outage\*\* will be covered using our in-Portal announcements feature only.

> \* critical outage: service is unavailable or operating outside of usable performance or functional parameters.

> \*\* non-critical outage: service is available, but operating at reduced performance.

Usually, when maintenance is executed or we set a release date/time which usually happens on a maintenance window, our production system will not be able to take requests and any calls that rely on developer portal. Those will fail for about 30 minutes.

### Release Notes

---

#### May 28th 2024 - 02:30 AM EST

The Developer Portal will undergo a maintenance update at this time. There is no downtime involved.

- Release Name: DP2024.3
- Release Date : 05/28
- Release Time : 02:30 AM EST (6:30 AM UTC) (12:00 PM IST)
- Downtime : 0 Mins

**Purpose:**

**Rate Limiting**:
A more effective method for managing rate limits of API usage with enhanced control. Enjoy the flexibility to adjust from a 24-hour cycle to any time interval that better fits developer's requirements.

**Performance issue fix:**
SQL Query optimization to address the Performance issue

---

#### 25 February 2024 @ 1:30 am EST

We moved this maintenance and feature release due to questions and requests from different sources to Feb 20th 2024. Maintenance release.

- **Admin to create groups**: Enable Portal Administrators to create/view/edit Portal Account Groups and to manage the created groups.

- **Audit Trail**: Admin to track events and actions done by both the registered developers and admins. This feature also includes downloadable log as a spreadsheet(csv) over a specified timeframe.

---

#### 17 October 2023

Maintenance only.

In order to improve performance during peak usage periods and mitigate the risk of database connection failures due to over utilization we are upgrading our database instance type.

The Developer Portal will remain available during this time. Though some database related features such as creating new accounts or applications will be unavailable during the maintenance period. The _actual expected duration_ of the maintenance period is 2 minutes or less.

Maintenance Date : 10/17/2023

Maintenance Time : 06:30 AM UTC (2023-10-17T06:30:00Z)

Maintenance window : 10 Mins

You may follow status and updates at [https://status.blackboard.com](https://status.blackboard.com).

---

#### 11 July 2023

Release Name: 2023.3

:exclamation: The length of this maintenance window, 12:30 am - 02:30 am EST, is due to the Redis Upgrade, but may complete in ~45 minutes. We apologize in advance for the short notice.

Features:

- **Redis Upgrade**: For security and performance purposes we are upgrading to the latest version of Redis. This will have no impact on current Developer-facing functionality.
- **LTI Dynamic Registration**: For performance and forward looking enhancements we are improving the backend which supports the dynamic registration of LTI integrations with Learn. This will have no impact on current Developer-facing functionality.

---

#### 6 June 2023

Release Name: 2023.2

Features:

- **Announcement Panel**: The Announcement Panel provides Developer facing Portal, APIs, and Event information. When a new announcement is available it will be indicated via a red dot on the Announcements icon in the Portal task bar. Clicking on the Announcements icon displays active announcements - latest at the top.

<AuthorBox frontMatter={frontMatter}/>
