---
title: "Production groups, REST API and site registrations limits"
id: production-groups-rest-api-and-site-registration-limits
categories: Developer Portal
sidebar_position: 4
published: "2023-05-09"
edited: "2023-05-09"
author: Davey Herrera
---
<VersioningTracker frontMatter={frontMatter}/>

You are able to create as many groups as you need/require to manage correctly your application. However, there is a special and **Unique** group that receives special treatment.

That's right, it is the Production Group 😁

When you have setup your application and you are ready to sell it and provide it to our clients, you may want to have a centralized place, that will be your production group. When creating it or setting it up, please review [our best practices](/docs/developer-portal/best-practices)

## Why do I need a production group?

When you create a group and you have several clients with several sites or you make a bunch of calls and you start receiving 402 messages from the api, you will notice that there are several limits applied per group. Your Production group will allow you (according to your contract or partnership level) to increase the number of site registrations and rest api calls, this increase can only be aplied to one (1) group per application.

### Requesting Production groups

After you have followed [our best practices](/docs/developer-portal/best-practices) you will end up with properly named groups. Only then, you can:

#### If you are an Anthology Client or Partner

- Create a Behind the blackboard ticket requesting an increase of the number of rest api calls and/or site registrations. You need to provide:
  - The email used to register your application
  - The Name of the production group (If you haven't created one yet, otherwise the limits are applied to any existing production)

#### If you are a Third Party with no Partnership level

- Please send an [email](mailto:bbpartnerteam@anthology.com) letting us know! You can review our documentation to [become a partner](/docs/partners/become-a-partner.md)

## Site Registration Limits

> We provide a default of 6 sites to be registered in total

Each developer group has a quota of the maximum number of Learn
sites that can access the group's applications, regardless of number of
applications. You are responsible for keeping track of the sites where your
Learn REST Application is installed. If a client attempts to install your REST
application but the site quota is exceeded for the developer group that
manages it, the client will get an error message when they try to install it.
The error message typically reads something like Failure:

- _Application developer has exceeded maximum number of client installations. Please contact
  the developer._

## REST API calls Limit

> We provide by default 10.000 calls every 24 hours

A rate limit is the number of API requests that can come each day from
applications that are registered to your developer group. For example, if you
have a 100K limit and three applications, each application will use a portion
of that 100K limit. _Your application should monitor the number of requests used so far at an
application level using the http headers provided in each request response._ Inform your user when your application stops or is about to stop working because it hit the rate limit.

| HTTP Header            | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| X-Rate-Limit-Limit     | The rate limit ceiling for the given development group                       |
| X-Rate-Limit-Remaining | The number of requests left for the 24-hour period for the development group |
| X-Rate-Limit-Reset     | The remaining time before the rate limit resets, given in UTC epoch seconds  |
<AuthorBox frontMatter={frontMatter}/>
