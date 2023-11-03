---
title: "REST Integrations and Other Integrations"
id: rest-integrations-and-other-integrations
categories: Learn REST
published: "2023-09-26"
edited: "2023-09-27"
author: Mark Kauffman
---

<VersioningTracker frontMatter={frontMatter}/>

## Introduction

Let's say you have developed a RESTful API integration with Blackboard Learn. Now you have clients asking about the relationship between your REST Application and the several other mechanisms of integration with Blackboard Learn. This document provides the details.

### What is the relationship between my RESTFul Application and other integration mechanisms?
Blackboard Learn provides several mechanisms for integration with it to 3rd-party developers. Examples include the Learn implementation of the LTI 1.3 standard, the Learn implementation of the LIS 2.0 Data Integration standard, and the Learn REST APIs. None of these integration types will know anything about the configuration settings of a different integration type, ever.

What is the impact of this in a real-world scenario? One example is that, built into Learn’s implementation of the LIS 2.0 Data Integration Standard is the ability for the Learn administrator to configure a special script, to create a new course from a template, that runs when an external vendor feeds in data for course creation. Ex: Admin>Data Integration>Student Information System Integrations>’LIS20 Integration’>Advanced Configuration>Courses>Field Mapping> Source Course Copy Key. Learn only runs this script for LIS 2.0 data feeds. The REST API implementation in Learn doesn’t know about this script that was set for the LIS 2.0 integration. The REST API course creation won’t cause the script to execute. This is how Learn works, and there’s nothing the 3rd-party integrator can do to make the integration systems built into Learn behave differently.

This means then that if I, as a 3rd-party developer, have been using LIS 2.0 to create courses and relying on the Learn admin to set up a script in Learn’s LIS 2.0 Data Integration, and I want to switch to the REST API mechanism to create courses I cannot expect Learn’s LIS 2.0 script to run for the REST API create course, because Learn doesn’t do that. Instead, I will need to add code to my new RESTful application code that uses Learn’s REST integration mechanism, where the Learn admin can configure the template Source Course on my application server to replace what the Learn admin had been configuring in Blackboard Learn or find some other means of achieving the same.


### Summary
Any given integration type in Learn will never automatically know anything about the configuration settings of a different integration type, ever.

<AuthorBox frontMatter={frontMatter}/>
