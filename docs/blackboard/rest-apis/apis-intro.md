---
title: "About Anthology REST APIs"
id: start-here
sidebar_position: 1
author: Mark O'Neil, Dan Magers
published: ""
edited: ""
---

Welcome to Anthology's REST API documentation. Many Anthology products offer integration capabilities through REST APIs. REST APIs provide a simple and effective way to deliver data and services over the web, making them an important fool for modern software development.

Anthology provides comprehensive REST API documentation describing the various endpoints, request and response formats, and authentication methods available. The documentation on this site includes examples and code snippets to help you get started with using the REST APIs in your integrations. Anthology also offers a sandbox for users without a Blackboard Learn instance and a GitHub repository containing useful application code.

## REST APIs

REST APIs (REpresentational State Transfer Application Programming Interface) are a type of web service API that follow a set of architectural principles, known as the REST architecture. These APIs use HTTP verbs - GET, POST, PUT, DELETE - to access and manipulate resources, such as data or files, on a server.

Anthology has a long history of integration development support, going back the Blackboard Learn LMS's (Learning Management System) released in 1997. Integrations started with Java™ Building Blocks and continued with SOAP Web Services and Learning Tools Interoperability (LTI). Blackboard added REST APIs to our integrations in 2016.

REST APIs have become the most common type of web service API, used by many companies and applications to enable communication between different systems or applications. Anthology considers REST APIs to be the future of integration development.

## The importance of REST APIs

There are several reasons why REST APIs are important:

**Interoperability**: REST APIs enable interoperability between different systems and programming languages. This means that applications built on different platforms or programming languages can communicate with each other easily using a common protocol.

**Ease of development**: Applications using REST APIs are easy to develop because REST APIs use standard HTTP methods and have a well-defined structure. This makes them easy to understand and implement, reducing the time and cost of development.

**Scalability**: REST APIs are highly scalable because they use HTTP as their underlying protocol, which is a widely adopted protocol for web communication. This allows for easy load balancing and horizontal scaling of services.

**Security**: REST APIs can be secured using various authentication mechanisms such as OAuth and SSL/TLS. This ensures that the data being transmitted is secure and only accessible to authorized users.

Overall, REST APIs provide a simple and effective way to expose data and services over the web, making them an important tool for modern software development.

## A note about third-party application support

If you are an Anthology client, an Anthology Partner / Vendor / Developer of a REST Application should NEVER tell you to go to the developer portal and create an App ID with the associated key/secret to install their application. They should never tell you to apply for a Rate/Site increase for their application. Anthology DOES NOT support that model. Every REST Application developer should give you an App ID to install their REST App and tell you how to configure a system role for its use. The REST Application developer needs to request the increases they need to run their application themselves. If they ask you to go to developer.anthology.com and get an App ID/Key/Secret, please tell them that is wrong. They should have one App ID for their production REST application that they are asking you to install.

Contractors are an exception to this policy as they are producing an integration on your, the Anthology client, behalf. Questions regarding the policy and whether you are impacted may be asked here, or posted to developers@anthology.com

## Glossary

| Term               | Definition                                                                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application ID     | Unique identifier for the application used to integrate with the<br />Learn REST Services. Each unique integration should have its own Application. |
| Application Key    | Each application is assigned a unique key. This is used to authorize REST API<br />calls against Learn.                                             |
| Application Secret | Each application is assigned a unique secret. This is used to authorize REST<br />API calls against Learn.                                          |
| Access Token       | A token is a unique string representing an implicit authorization granted by<br />an OAuth 2.0 Service Provider.                                    |
| CRUD               | Create, Read, Update, Delete                                                                                                                        |
