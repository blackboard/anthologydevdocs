---
slug: changes-to-assignments-blackboard-3900.98
title: Changes to Assignments With Blackboard 3900.98
published: "2024-11-01"
edited: "2024-11-01"
author: Mark Kauffman
tags:
  [
    "Assignments",
    "Tests",
    "Integrations",
    "Partners",
    "Developers",
    "Community",
  ]
hide_table_of_contents: false
---

We are writing this blog post to document a change to how REST APIs work with Ultra Assignments and Tests. Previously, before Blackboard version 3900.98, you could use the createAssignment REST API and treat the resulting object like a Test. You could add more than one question of differing types, using the user interface. You could use the REST API and add more than one presentation-type question type using POST request to /learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}.

[Blackboard introduced a new Assignment tool with version 3900.98.](https://help.blackboard.com/Learn/Administrator/SaaS/Release_Notes/Archived_Release_Notes#3900.98.0-6) It is no longer the same as a Test. With the new Assignment tool, when you use createAssignment the assignment body is still created, but you only see the instructions, with no option to add questions, and you cannot add questions using the assessments endpoint. To create a Test you must now use the createContent endpoint. You can find more information here: [Creating and Updating Content with REST APIs](/docs/blackboard/rest-apis/hands-on/creating-content-with-rest-apis).
