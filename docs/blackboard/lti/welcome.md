---
title: "Getting started with LTI"
sidebar_position: 1
id: welcome
published: ""
edited: ""
---

Learning Tools Interoperability (LTI) is a standard from the IMS Global consortium. This standard focuses on contextual launches and grade return, providing a way to send and retrieve this data without having to manually migrate the information from one service into the other.

LTI has two different standards available, LTI 1.1 and LTI 1.3. Both can be used to integrate with an LMS and exchange information.

:::danger LTI 1.1 support
LTI 1.1 has been deprecated by the IMS Global, and it's been around for over 10 years. Learn will continue support of LTI 1.1 tools for the indeterminate future while LTI 1.1 tool developers migrate their tool to LTI 1.3/Advantage.
:::

:::caution
This documentation is focused on LTI 1.3/Advantage. If you are building a new tool, it is **_strongly recommended_** you use LTI 1.3/Advantage.
:::

### What Specifically is LTI 1.3?

Learning Tools Interoperability (LTI) 1.3 is the latest version of the LTI specification, which is a set of technical standards that enable learning management systems (LMSs) to integrate with external tools and content providers. LTI 1.3 builds upon the previous versions of LTI, adding new features and enhancements that improve the security, interoperability, and user experience of LTI integrations.

Overall, LTI 1.3 is a significant improvement over previous versions of the specification, providing enhanced security, improved interoperability, a streamlined user experience, and easier implementation for developers. As a result, it has become the preferred version of LTI for many LMSs and external tool providers.

### What are the Benefits of LTI 1.3?

Here are some of the key features and benefits of LTI 1.3:

**Enhanced security**: LTI 1.3 introduces new security features such as JSON Web Tokens (JWTs) and the OpenID Connect (OIDC) authentication protocol, which provide a more secure way to exchange user information between the LMS and external tools. This reduces the risk of unauthorized access to sensitive user data and improves the overall security of LTI integrations.

**Improved interoperability**: LTI 1.3 introduces the Resource Link Launch Request (RLLR) message, which enables better communication between the LMS and external tools regarding the specific context of a learning activity. This makes it easier for external tools to integrate with the LMS and provide a seamless user experience.

**Streamlined user experience**: LTI 1.3 introduces a new Deep Linking feature, which enables instructors to create links to specific resources within external tools and embed them directly within their course content. This makes it easier for students to access external tools and content without leaving the LMS environment, improving the overall user experience.

**Easier implementation**: LTI 1.3 introduces a new Developer Key and Secret mechanism, which simplifies the process of creating and managing LTI integrations. This makes it easier for developers to implement LTI integrations and reduces the time and effort required to maintain them.

## LTI 1.3/Advantage

In addition to LTI 1.3, 1EdTech also has additional specifications for different services that can interact with the LMS, providing an all round integration for course items, grades and roster management. LTI Advantage consists of the following four specifications:

    1. Core LTI 1.3 (also referenced as LTI 1.3)
    2. Deep Linking
    3. Names and Roles
    4. Assignments and Grades

### Blackboard Learn support for LTI Advantage

Blackboard Learn currently has full support for the two different integration versions over LTI, **LTI 1.1** and **LTI 1.3/Advantage** however, as mentioned above, we recommend migrating/creating new applications using LTI 1.3. LTI 1.1 is still supported but is not recommended.

## Test code and tools

1EdTech has prepared a test tool that you can use to test an LTI connection with an LMS, you can access it and follow the steps to review the workflow here: <https://lti-ri.imsglobal.org/>. The tool is written in Ruby and is open source, there're other LTI resources available from 1EdTech here: <https://github.com/IMSGlobal/ltibootcamp>

We also have a sample LTI tool written in React and Node.js that can be found here:
<https://github.com/blackboard/BBDN-LTI-Tool-Provider-Node>

## Useful links

- IMS Security Framework: <https://www.1edtech.org/standards/security-framework>
- LTI Advantage specifications: <https://www.1edtech.org/standards/lti>
- The implementation guide is very helpful as well <https://www.imsglobal.org/spec/lti/v1p3/impl/>
