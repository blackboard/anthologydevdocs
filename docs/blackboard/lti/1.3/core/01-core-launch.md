---
title: LTI Message Launch Flow
id: core-launch
sidebar_position: 1
published: ""
edited: "2024-10-11"
---

LTI proposes a communication between the LMS and the system based on HTTP requests and JWT payloads sent between the systems, each with a different intention. The Core LTI 1.3 launch, which we will review in this section, is the same for any type of interaction, being this, the base from where Deep Linking, Assignments and Grades and Names and Roles Provisioning Service are build upon (These services are outlined in later sections).

The UML sequence diagram below shows all the steps, including some optional ones, for implementing the LTI message launch workflow (Core LTI 1.3 launch).

<!-- + TODO: Update the diagram of this page and the next sections -->

![LTI Launch Sequence](/assets/img/lti_message_flow.png)

### Workflow Steps

The LTI workflow above has three main steps to complete the communication between the two systems.

- It performs an OIDC authentication, which starts when the user clicks on the LTI item within Learn
- It receives a JWT token from Learn and performs a validation to review if the token received from Learn is correct and hasn't been altered
- It performs additional calls if needed to authenticate with complementary services.

These steps will be reviewed in depth in the following sections.
