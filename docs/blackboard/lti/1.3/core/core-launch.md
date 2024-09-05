---
title: LTI Message Launch Flow
id: core-launch
sidebar_position: 1
published: ""
edited: ""
---

LTI proposes a communication between LMS and the system based on JWT payloads sent between the systems, each with a different intention, however, the Core LTI 1.3 launch is the same for any type of interaction. This core launch is the base from where Deep Linking, Assignments and Grades and Names and Roles Provisioning Service are build upon (These services are outlined in later sections)

The UML sequence diagram below shows all the steps, including some optional ones, for implementing the reception of an LTI message launch. We'll break each step down in the next sections.

<!-- + TODO: Update the diagram of this page and the next sections -->

![LTI Launch Sequence](/assets/img/lti-launch-sequence.png)

### Workflow Steps

The LTI workflow above has three main steps to complete the communication between the two systems.

- First, it performs an OIDC authentication which starts when the user clicks on the LTI item within Learn
- Second, it receives a JWT token from Learn and performs a validation to review if the token received from Learn is correct and hasn't been altered
- And third, it performs additional calls if needed to authenticate to complementary services.

These steps will be reviewed in depth in the following sections.
