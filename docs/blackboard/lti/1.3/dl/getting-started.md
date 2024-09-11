---
title: Working with Deep Linking
id: deep-linking
published: ""
edited: "2024-09-05"
sidebar_position: 1
---

Now that you have a working Core LTI 1.3 launch workflow up and running (if not, you can see [LTI Message Launch Flow](/docs/blackboard/lti/1.3/core/core-launch.md) for information on how to setup the core integration), we can focus on other parts of the LTI Advantage specification, specially Deep Linking.

## What is?

Deep Linking is the specification meant to allow users to create content items within an LMS pointing to a specific resource on the tool provider instead of the entire tool provider.

An example of this could be a tool that provides books to students, a deep linking integration would allow the instructor to select specific pages from the book and add a link to them in the LMS instead of linking the entire book.

## How it works

Deep Linking leverages the initial Core LTI 1.3 launch to provide authentication and a way for the instructors or content creators to access the tool's resources within the same LMS. Once this workflow is completed, the process to create a new deep linking item is the following:

<!-- + TODO: Workflow representation -->

### LTI launch

This launch follows, as mentioned, the Core LTI 1.3 launch that is covered in the [LTI Message Launch Flow](/docs/blackboard/lti/1.3/core/core-launch.md) section.

### User selection

This part of the flow is executed entirely on the tool's end since this is where the user will choose the content to add into the course content section. From here the tool will create the deep linking object that will be sent back to Learn
