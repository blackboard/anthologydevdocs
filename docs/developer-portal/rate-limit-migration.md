---
title: "Rate Limit Migration"
id: rate-limit-migration
categories: Developer Portal
sidebar_position: 5
published: "2024-01-25"
edited: "2024-01-30"
author: Daniel Nieto
---

<VersioningTracker frontMatter={frontMatter}/>

## Background

The [Anthology Developer Portal](https://developer.anthology.com) plays a crucial role in the integrations with the Anthology product portfolio, as such it handles millions of requests each day, making the implementation of a rate limit mechanism essential.

Rate limiting is a mechanism used in the web applications to control the traffic flow and the resources utilization. The limit is set by a default value, which is the number of API requests that can be made each day from applications that are registered to your developer group **by default, this is set to 10.000 calls every 24 hours**.

> If you need a higher rate limit, please review [our guide](/docs/developer-portal/production-groups-rest-api-and-site-registration-limits).

### Migration

In our ongoing effort to optimize and enhance our system's performance, we are transitioning our rate limit algorithm. This change aims to improve scalability, better manage of burst traffic and enhance the control over our system resources, all while providing a consistent and reliable experience for our users.

### FAQ

- Is this change going to impact any of my applications?

  No, the refresh frame will remain at 24 hours and the default rate limit will continue to be 10.000 calls. Any existing rate limit variations requested by clients and partners will also be maintained.

- When is this change going to be applied?

  This change is planned to be deployed in the [month] release on [date].

- What is the new rate limit algorithm that is going to be implemented?

  We are now using the [token bucket algorithm](https://medium.com/@yeshsurya/token-bucket-algorithm-a-flexible-approach-to-network-traffic-management-1baffc59c2f5), wich allows applications to have a better control over burst trafic. This will also enable us to improve the refresh rate in the future.

- What is a token?

  You can think of a token as a coin that allows you to make a request. Once you run out of tokens, you won't be able to make any more requests and a 429 HTTP error will be returned.

- Will there be any changes to the headers of the request?

  There won't be many significant changes in the returned headers. The only major change is that **_X-Rate-Limit-Reset_** will be replaced with **_Retry-After_**, but it will function in the same way returning in how many seconds you will have more tokens to make a request.

| HTTP Header            | Description                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| Retry-After            | The remaining time in seconds before the bucket is filled with new tokens to make a request |
| X-Rate-Limit-Limit     | The rate limit ceiling for the given development group                                      |
| X-Rate-Limit-Remaining | The number of requests left for the 24-hour period for the development group                |

> Please note that the current 24 hours refresh period may be shortened in the future.

<AuthorBox frontMatter={frontMatter}/>
