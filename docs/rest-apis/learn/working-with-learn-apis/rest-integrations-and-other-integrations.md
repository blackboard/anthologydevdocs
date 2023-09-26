---
title: "REST Integrations and Other Integrations"
id: rest-integrations-and-other-integrations
categories: Learn REST Working-with APIs
Author: Mark Kauffman
published: "2023-09-26"
edited: "2023-09-26"
---
<VersioningTracker frontMatter={frontMatter}/>

## Introduction

Let's say you have developed a RESTful API integration with Blackboard Learn. Now you have clients asking about the relationship between your REST Application and the several other mechanisms of integration with Blackboard Learn. This document provides the details.

### What is the relationship between my RESTFul Application and other integration mechanisms?
There are multiple forms of integration with Learn. No integration will know anything about the configuration settings of a different integration type, ever. For example if you have configured Data Integration>Student Information System Integrations>’LIS20 Integration’>Advanced Configuration>Courses>Field Mapping> Source Course Copy Key for course creation, a RESTful API integration will know nothing of that configuration. Any relationship between a RESTful integration and SIS Framework configuration (e.g. templating and or mapping and or actions post CRUD) are is the responsibility of the developer of the RESTful integration.  The vendor that was using SIS will need to add code to their REST integration where you can configure the Source Course on their application server to replace what you had been configuring in Blackboard Learn, or find some other means of achieving the same.

### Summary
Any given integration type in Learn will never automatically know anything about the configuration settings of a different integration type, ever.

<AuthorBox frontMatter={frontMatter}/>
