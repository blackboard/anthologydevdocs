---
title: Service Maintenances and Releases
id: maintenance-page
sidebar_position: 1
hide_table_of_contents: true
published: '2024-07-26'
edited: '2025-03-11'
author: Mark O'Neil, Davey Herrera, Dan Magers, Camilo Dominguez, Sebastian Silva
---

## Developer Portal

The Developer Portal has an _optional_ maintenance window scheduled every month on the Tuesday of the second week (after SaaS updates). The exception to this monthly maintenance schedule is when critical patches are required.

You may monitor the Portal maintenance schedule and progress at [https://status.blackboard.com](https://status.blackboard.com) and review any update release notes below.

When maintenance is executed or we set a release date/time (which usually happens on a maintenance window) our production system will not be able to take requests and any calls that rely on the Developer Portal. During this time, any request will fail.

:::warning Outages

Should a critical outage\* take place, we will release a detailed post-mortem on Behind the Blackboard as soon as possible (typically within four days post event).

Any non-critical outage\*\* will be covered using our in-Portal announcements feature only.
:::

:::tip Latest release

**API Usage Dashboard**<br/>

**Release version:** March / 2025<br/>
**Instance:** Production (https://developer.anthology.com)<br/>
**Impact:** Developers<br/>

The Developer Portal serves as a centralized hub for third-party developers to register, manage, and deploy their integrations with Blackboard LMS. To provide better visibility and control over API usage, the Developer Portal now features a dedicated API Usage Dashboard. This dashboard allows developers to monitor and analyze API consumption in real time, ensuring efficient integration management and performance tracking.

<details>
<summary>More details about this release</summary>

Developers can now monitor API consumption at the following levels:

- **Application level:** Track API usage for individual integrations.
- **Group level:** Aggregates API usage data across all applications owned by a group.

Developers can filter API usage for the following timeframes:

- Last 24 hours (data refreshed every 15 minutes).
- Last 30 days (data refreshed daily).
- Last year (data refreshed monthly).

To help developers manage the information displayed on the dashboard, the following API status breakdowns are available as filters in the graphical reports:

| **Filter Name **           | **Description **                                                                                       | **HTTP Status Code  **                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| Okay                       | API requests processed successfully\.                                                                  | 200 \- OK                                     |
| Invalid Token              | API requests failed due to an invalid, expired, or revoked authentication token\.                      | 401 \- Unauthorized                           |
| Missing Header             | Requests failed because a required HTTP header \(e\.g\., Authorization, Content\-Type\) was missing\.  | 401 \- Unauthorized \(AuthHeaderMissing\)     |
| Rate Limit Exceeded        | The application exceeded the allowed number of API requests within a given timeframe\.                 | 429 \- Too Many Requests                      |
| Permission Denied          | The user does not have the required privileges to access the requested resource\.                      | 403 \- Forbidden                              |
| Site Application Missing   | API calls were sent to a Blackboard instance where the application is not installed\.                  | 404 \- Not Found                              |
| Site Application Disabled  | The API request failed because the application was disabled on a Blackboard instance\.                 | 403 \- Forbidden \(SiteApplicationDisabled\)  |

By providing developers with real-time API consumption data, the dashboard helps:

- Optimize performance by providing precise visibility into how each integration interacts with Blackboard LMS.
- Enhance monitoring by identifying authentication failures and request errors for faster troubleshooting.
- Improve scalability by ensuring applications stay within API rate limits and optimize resource usage.
- Strengthen security by detecting unusual or excessive API usage patterns to prevent potential risks.

By implementing these monitoring capabilities, the Developer Portal empowers developers with better insights, greater control, and improved integration reliability for Blackboard LMS.

To consult API usage metrics, developers can access the dashboard directly through the Developer Portal:

In the main panel, navigate to the **"My Applications"** section and click on the **three-dot menu** next to your application. From there, you can access the **API Usage Dashboard** to view application-level metrics.

<img src="/assets/img/rn-march112025-1.png" width="600px"/>

<img src="/assets/img/rn-march112025-2.png" width="600px"/>

<img src="/assets/img/rn-march112025-3.png" width="600px"/>

<img src="/assets/img/rn-march112025-4.png" width="600px"/>

To access API usage at the group level, go to the **"My Groups"** section and click on the **Dashboard** link.

<img src="/assets/img/rn-march112025-5.png" width="600px"/>

<img src="/assets/img/rn-march112025-6.png" width="600px"/>

</details>

:::

<details>
<summary>Old Release Notes</summary>

**Release version:** February / 2025<br/>
**Instance:** Production (https://developer.anthology.com)<br/>
**Impact:** Developers<br/>

The Developer Portal continues to evolve to enhance self-service capabilities and give developers greater control over their accounts. We have introduced a developer account deletion request feature in the Account Page of the Developer Portal. This update ensures that account removal is handled securely and efficiently. Also, aligned with data protection best practices

By implementing a structured deletion process, we help developers manage their accounts responsibly. Preventing accidental data loss or disruptions to registered applications.

This feature allows developers to request account deletion while ensuring that registered applications remain functional, minimizing disruptions, and reducing support requests.

Key highlights of this enhancement

- Developers can now request account deletion directly from the Account Management Page of the Developer Portal.
- A validation check ensures that all registered applications and groups are reassigned or removed before proceeding with account deletion.
- 20-day recovery period: Accounts will be deactivated for 20 days before permanent deletion, allowing developers to restore access during this time.
- Logging in within the 20-day period automatically cancels the deletion request, keeping the account active.
- Permanent deletion: After the recovery period expires, all account data, including logs, will be permanently removed.

Developers can now request account deletion through a simple process:

Navigate to the Account Management section in the Developer Portal and click on the Request Account Deletion option.

<img src="/assets/img/devportal-releases/step1.png" width="400px" alt="Image 1. Account Management Page"/>

The system will validate account deletion constraints

- The developer is not an owner of another group.
- The developer has no applications registered in the default group.
- The default group for the developer doesn't have any additional members.

Note: If constraints are not met, the system will display an alert icon explaining the necessary steps to proceed.

<img src="/assets/img/devportal-releases/step2.png" width="400px" alt="Image 2. Validation Check: Proceed with Account Deletion"/>

You will receive an email containing the information about the deletion process, including a link to validate the deletion request.

<img src="/assets/img/devportal-releases/step2-5.png" width="700px" alt="Image 3. Email notification: Includes the link to verify the deletion process"/>

Clicking the link will take you to the following page where you can confirm the deletion process

<img src="/assets/img/devportal-releases/step3.png" width="700px" alt="Image 4. Request Validation: Accept the account deletion"/>

Once the verification is completed, a confirmation message will appear, detailing the 20-day recovery period and the impact of account deletion.

<img src="/assets/img/devportal-releases/step4.png" width="700px" alt="Image 5. Request submitted."/>

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

</details>

---

## Blackboard Learn

Learn release dates and release notes can be found through [Behind the Blackboard](https://behind.blackboard.com) or through our Help Documentation:

- Release schedules for Blackboard Learn: [Release Schedule](https://help.blackboard.com/Learn/Administrator/SaaS/Release_Notes/Learn_SaaS_Release_Schedule)
- Release Notes: [Release Notes](https://help.blackboard.com/Learn/Administrator/SaaS/Release_Notes)

---

## Student

Anthology Student releases and docs are published through the Student Suite here: [Anthology Student Suite](https://help.anthology.com/Content/DocSets/CNSDocSet.htm)

---

## Reach

Anthology Release releases and docs are published through the Reach Suite here: [Anthology Reach Suite](https://help.campusmanagement.com/Content/DocSets/ENGDocSet.htm)

---

:::note Annotations

\* critical outage: service is unavailable or operating outside of usable performance or functional parameters.

\*\* non-critical outage: service is available, but operating at reduced performance.
:::
