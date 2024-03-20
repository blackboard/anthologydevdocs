---
title: "Best practices"
id: best-practices
categories: Developer Portal
sidebar_position: 5
published: "2023-05-09"
edited: "2024-03-20"
author: Davey Herrera, Dan Magers
---

<VersioningTracker frontMatter={frontMatter}/>

## How to name your groups

Your group name is displayed in the Blackboard Learn system associated with the
application ID once the Blackboard Learn Administrator configures the integration. You want the group name to include at minimum:

1. The name of the company/vendor that owns the application.
2. The name of the application or product (optional). 

Below is an example for one application
ID group name. Included are the company name, product name, and group associated with it:

- SuperSoftware - Sudoku For Learners - Development Team 1
- SuperSoftware - Sudoku For Learners - Development Team 2

Your production group name could be the following:

- SuperSoftware - Sudoku For Learners

If your company has a different product, it will have a different application ID. You will associate it with different groups:

- SuperSoftware - Multinote - Development Team 1
- SuperSoftware - Multinote - Development Team 2
- SuperSoftware - Multinote

If your company name indicates your product, and your product name is
trademarked, then you have several choices for a production group name. For
example if your company is Mark's Software and your trademarked application
is Multinote then you can have your production group name be one of the
following:

- Mark's Software
- Multinote
- Mark's Software - Multinote

**Do not add unnecessary information to a production group name. For example, including text indicating that the group name is associated with Blackboard REST APIs is not necessary, nor is an indication of server type such as '-test', '-stage', or '-production'.** It doesn't matter if you have a SOAP Web Service proxy of the same name as that shows up on a different page.

**We will only assign site and rate limits higher than the defaults to Production Groups that meet these naming requirements.**

<AuthorBox frontMatter={frontMatter}/>
