---
title: Use APIs to Work with Ultra Assignments
id: ultra-assignments
categories: Learn Rest
published: ""
edited: ""
author: Ryan Haber
---

### Overview

Blackboard Ultra experience offers a REST API for managing assignments.
As of Blackbord 3900.98, in Ultra, an assignment different from a test. 
In an test, there are questions of various types. For an assignment, which we are disucssing
here, there is only a leading set of instructions. For more information about
assignments how Learn users experience them, see [Ultra:
Create an Assignment](https://help.blackboard.com/learn/Instructor/Ultra/Assignments/Create_and_Edit_Assignments) in Blackboard Help.

Prior to 3900.98 you could add questions to an assignment. This is no longer the case.

### Before You Begin

- To work with assignments, you need the entitlements listed for each endpoint in the API reference documents.
- If you want to use a file with a new assignment, you must upload the file to Learn before you create the new assignment.

### Create an Assignment

Before you create an assignment, remember that you must first upload any files
that you intend to use to create the object.

1. If you have not already uploaded any files that you need to use to create the assignment, use the steps in the following section to do so.
2. Make a POST request to `/learn/api/public/v1/courses/{courseId}/contents/createAssignment`. See the reference below for more information about using the endpoint. Note that the response body of the request does not return the full assignment object. It returns an object of IDs, one for each of the various resources created by Learn.
3. Use the response body to further manage the assignment.

Use these objects to further manage the assignment that you created.

### Upload a File to Learn

Before you can use a file with a REST API call, you must use an API upload it
to Learn.

1. Make a POST request to /learn/api/public/v1/uploads.
2. Use the ID number in the response to further access the uploaded file.

### Assignment-related Query Parameters

All endpoints accept a query parameter, fields, that specifies the fields to be
included in the response object, if any. The fields to be included are given
as a comma-separated list. Specified fields are ignored if absent from the
response. If no fields are specified, all fields are returned in the response.

