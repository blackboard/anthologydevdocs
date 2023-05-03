---
layout: post
title: "Rest registry"
id: rest-apis-learn-admin-cloud_registry
categories: Learn Rest
author: Scott Hurrey
status: deprecated
doctitle: "Register Developer Instances to the Cloud"
---

# Register Developer Instances to the Cloud 

You must register developer instances of Blackboard Learn to the Blackboard
cloud. Use the following steps to register your EC2 created from the [Blackboard Learn for REST and LTI Developers AMI](https://aws.amazon.com/marketplace/pp/prodview-fdbvv2vvikoq4).

To register your developer instance to the Blackboard cloud:

Do not select **Move to Production** in the DVM or AMI without guidance to do
so from Blackboard's developer experience team.

1. Log into your developer instance as Administrator. You may be greeted with an first-time user message. You can select **Close** or refresh the page to close it.
2. Select **System Admin**.
3. Select **Cloud Connector** under _Cloud Management_.
4. Provide a **Display Name**.
5. Select an **Instance Type**. For most development work, select **Development**.
6. Select a **Regional Cloud**. This one-time choice indicates the AWS region with which you want to associate your developer instance. Your choice is permanent and irrevocable.
7. Select **Save and Retry** to save the configuration and connect to the Blackboard cloud. In some cases, the developer instance of Learn throws an error explaining that it could not connect to the Blackboard cloud. This behavior is expected. Ignore it.