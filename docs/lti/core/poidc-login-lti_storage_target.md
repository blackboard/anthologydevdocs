---
layout: post
title: "OIDC Login Without Cookes and Sharing the lti_storage_target Between Platform and Tool"
id: poidc-login-lti_storage_target
categories: Standards
published: "2024-01-05"
edited: "2024-01-05"
author: Mark Kauffman
---
<VersioningTracker frontMatter={frontMatter}/>

### Motivation

We've seen questions from tool developers about the fact that Learn does not append the lti_storage_target parameter to the redirect URL that the tool has pre-registered with the Learn platform. We don't append that because Learn keeps that redirect URL sacrosanct given that https://www.oauth.com/oauth2-servers/redirect-uris/redirect-uri-registration/ indicates it should never be modified from the value given at registration time. You can get the lti_storage_target a couple of ways as shown in [this video](https://youtu.be/li1xkqDo1XQ?feature=shared), one being to use the capabilities request, because Learn supports the optional frame field. The other way that you could get the lti_storage_target as a parameter on your redirect URL is to add that parameter and the value Learn uses: &lti_storage_target=lti_storage_frame

### Details

In the evolving landscape of Learning Tools Interoperability (LTI) and online learning platforms, LTI 1.3 has emerged as a crucial standard for integrating learning applications with Learning Management Systems (Platforms) like Blackboard Learn and others. The core of LTI 1.3 facilitates seamless single sign-on (SSO) from an LMS into a learning application, but it's faced challenges with the move to block third-party cookies in web browsers for privacy reasons.

Third-party cookies, used in the original LTI 1.3 Core and LTI Advantage Deep Linking specifications, are crucial for completing the security handshake required for users to SSO into a learning tool's user interface within an iframe in the LMS. However, as browsers increasingly block these cookies to protect user privacy, this poses a significant hurdle for LTI integrations.

In response to these challenges, 1EdTech (formerly IMS Global) has developed new specifications to circumvent the use of third-party cookies during LTI 1.3 Core resource link launches, as well as Deep Linking content picker launches. These include allowing the tool to use JavaScript postMessage for accessing an additional iframe for shared storage between the tool and LMS. This approach maintains high security standards, ensuring that neither LTI Core resource link launches nor Deep Linking content picker launches can be spoofed.

An essential aspect of this new specification is that it does not require the inclusion of the lti_storage_target parameter in the tool launch process following the OIDC login. Instead, the specifications offer alternative ways to achieve the necessary functionality without relying on this parameter. For example, the LMS can indicate its support for an additional iframe for shared storage through a capabilities endpoint. This flexibility is particularly crucial for platforms like Learn, which adheres strictly to the guidelines that redirect URIs should not be modified from their registered value, as indicated by OAuth 2.0 standards.

These changes represent a significant advancement in addressing the challenges posed by the evolving web privacy landscape, ensuring that LTI integrations can continue to provide seamless and secure user experiences in online learning environments. For developers and institutions, it's essential to stay informed about these updates and consider implementing them to maintain the efficacy and security of their LTI integrations.

<AuthorBox frontMatter={frontMatter}/>
