---
sidebar_position: 1
displayed_sidebar: documentationSidebar
---

# Anthology Developer Portal

## What is the Developer Portal?
The [Anthology Developer Portal](https://developer.anthology.com) is for anyone interested in developing integrations with the Anthology product portfolio. At the Portal you will find information about our REST APIs, our Developer facing documentation, and Developer Experience and Portal related announcements. 

When you create an account you will be able to register an application which is a required step for testing and releasing your integration.
## Using the Developer Portal
Instructions for using the Developer Portal are located in our [First Steps](../REST%20APIs/Learn/Getting%20Started/first-steps.md) and [Registry](../REST%20APIs/Learn/Getting%20Started/registry.md) sections of our REST API Learn Getting Started guide.

In brief there are three primary tasks you complete using the Developer Portal...
### 1. Review API Documentation
The great news is that you don't need an account to review our API documentation! We want you to be able to quickly understand what we have for APIs, and enable you to prototype and test with mock objects. 

In other words dig in and have a good time. 

When you are ready to test in a real environment move on to step two!
### 2. Create a Developer Account
To test your prototype against an Anthology instance you need to register your application in the portal to get authentication details. To do this you need to head over to the [Anthology Developer Portal](https://developer.anthology.com) and sign up for a Developer account - don't worry this too is gratis!
### 3. Group Management
When you register for a Developer account you are given a group of one - you! In some cases you may want to share your application management with others on or outside of your team. To do this you create additional groups. 

The only time a group is required - beyond you - is for production application release. It is this group that receives production settings and is a requirement for production application release.

A few great articles on Groups and Production releases are our write ups on:
- [Groups, Site quotas and rate limits](../REST%20APIs/Learn/Admin/groups-quotas-rates.md)
- [Production Groups](../REST%20APIs/Learn/Admin/production-groups.md)
- [Releasing your Integration](../REST%20APIs/Learn/Getting%20Started/releasing-your-integration.md)
## Developer Portal Maintenance and Releases <a id="release_notes"></a>
### Maintenance and Update Window
The Developer Portal has an _optional_ maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required.

You may monitor the Portal maintenance schedule and progress at [https://status.blackboard.com](https://status.blackboard.com) and review any update release notes below.

> NOTE: Should a critical outage\* take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible - typically within four days post event. Any non-critical outage\*\* will be covered using our in-Portal announcements feature only.

\* critical outage: service is unavailable or operating outside of usable performance or functional parameters.

\*\* non-critical outage: service is available, but operating at degraded performance.

### Release Notes

#### 07/11/2023
Release Name: 2023.3

:exclamation: The length of this maintenance window, 12:30 am - 02:30 am EST, is due to the Redis Upgrade, but may complete in ~45 minutes. We apologize in advance for the short notice.

Features:
* **Redis Upgrade**: For security and performance purposes we are upgrading to the latest version of Redis. This will have no impact on current Developer-facing functionality.
* **LTI Dynamic Registration**: For performance and forward looking enhancements we are improving the backend which supports the dynamic registration of LTI integrations with Learn. This will have no impact on current Developer-facing functionality.
#### 06/06/2023
Release Name: 2023.2

Features:
* **Announcement Panel**: The Announcement Panel provides Developer facing Portal, APIs, and Event information. When a new announcement is available it will be indicated via a red dot on the Announcements icon in the Portal task bar. Clicking on the Announcements icon displays active announcements - latest at the top.


