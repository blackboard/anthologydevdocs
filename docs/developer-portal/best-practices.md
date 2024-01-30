---
title: "Best practices"
id: best-practices
categories: Developer Portal
sidebar_position: 6
published: "2023-05-09"
edited: "2023-05-09"
author: Davey Herrera
---

<VersioningTracker frontMatter={frontMatter}/>

## How to name your groups

This is a very important topic because the name you give the group is the name
that shows up in the Learn system that is associated with the
application ID when the Learn Administrator configures the integration. In
general, you want the Group Name to include at minimum one or two items, 1.The
name of the company/vendor that owns the application, and optionally 2. the
name of the application or product. Below is an example for one application
ID:

For developers you could use following name. Notice how we include the company
name, the product name, and who the group belongs to:

- SuperSoftware - Sudoku For Learners - Development Team 1
- SuperSoftware - Sudoku For Learners - Development Team 2

Then your production group name could be the following:

- SuperSoftware - Sudoku For Learners; or
- SuperSoftware, Sudoku For Learners

If your company had a different product, say Multinote, it will have a
different application ID and you will associate it with different groups, say:

- SuperSoftware - Multinote - Development Team 1
- SuperSoftware - Multinote - Development Team 2
- SuperSoftware - Multinote

If your company name indicates your product, and your product name is
trademarked, then you have several choices for a production group name. For
example if your company is Mark's Software and your Trademarked' application
is Multinote then you can have your production group name be one of the
following:

- Mark's Software
- Multinote
- Mark's Software - Multinote

**We ask that you not add other, unnecessary information to a production group name. For example, including text indicating that the group name is associated with Blackboard REST APIs is not necessary, nor is an indication of server type such as '-test', '-stage', or '-production', as given the context, we and the Learn Administrator know that's where and how the group name is being used.** It doesn't matter if you have a SOAP Web Service proxy of the same name as that shows up on a different page.

**We will only assign site and rate limits higher than the defaults for development groups to Production Groups that meet these naming requirements.**

<AuthorBox frontMatter={frontMatter}/>
