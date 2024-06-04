---
title: "Production groups, REST API and site registrations limits"
id: production-groups-rest-api-and-site-registration-limits
categories: Developer Portal
sidebar_position: 4
published: "2023-05-09"
edited: "2024-03-20"
author: Davey Herrera, Dan Magers
---

<VersioningTracker frontMatter={frontMatter}/>

You can create as many groups as you need to manage your application. Additionally, you can create a **production group** to centralize the management of your application.

## Production groups

Your production group allows you to increase the number of site registrations and rest API calls according to your contract or partnership level. This increase can only be applied to one group per application.

### Requesting production groups

Use [our best practices](/docs/developer-portal/best-practices) to properly name groups.

- **If you are an Anthology Client or Partner.** Create a Behind the Blackboard ticket requesting an increase of the number of rest API calls and/or site registrations. You need to provide:

  - The email used to register your application.
  - The name of the production group. If you haven't created one yet, the limits are applied to any existing production.

- **If you are a third party with no partnership level.** Send an [email](mailto:bbpartnerteam@anthology.com) about your application, company, integration, and whether you are interested in a partnership. You can review our documentation to [become a partner](/docs/partners/become-a-partner.md).

## Site Registration Limits

We provide a default of six sites to be registered in total.

Each developer group has a quota of the maximum number of Blackboard Learn
sites that can access the group's applications, regardless of number of
applications. You are responsible for keeping track of the sites where your
Learn REST Application is installed. The client receives an error message if they install your REST application, and the site quota is exceeded for the developer group that manages it. The error message typically reads something like:

- _Failure: Application developer has exceeded maximum number of client installations. Please contact
  the developer._

## REST API calls limit

We provide by default 10,000 calls every 24 hours.

A rate limit is the number of API requests that can be called each day from
applications that are registered to your developer group. For example, if you
have a 100,000 request limit and three applications, each application will use a portion
of that limit. _Your application should monitor the number of requests used at an
application level using the http headers provided in each request response._ Inform your user when your application stops or is about to stop working because of the rate limit.

| HTTP Header            | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| X-Rate-Limit-Limit     | The rate limit ceiling for the given development group.                       |
| X-Rate-Limit-Remaining | The number of requests left for the 24-hour period for the development group. |
| X-Rate-Limit-Reset     | The remaining time before the rate limit resets, given in UTC epoch seconds.  |

<AuthorBox frontMatter={frontMatter}/>
