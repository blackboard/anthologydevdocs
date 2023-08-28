---
title: "Creating and Managing groups"
id: creating-and-managing-groups
categories: Developer Portal
sidebar_position: 3
published: "2023-05-09"
edited: "2023-05-09"
date: 2023-05-09
author: Davey Herrera
---
<VersioningTracker frontMatter={frontMatter}/>

## What are Groups

The Blackboard Developer Portal provides the means to manage application releases and associated developers through the concept of Groups. You can create groups for individual and team development, as well as target a specific group for a production application release (your Production Group). This allows you to manage your applications and the developer teams behind them, enabling access to application references by team members.

Groups always have at least one member - that unique member has admin rights and may not be removed from the group. You may add developers to groups. Developers added to groups may be given administrator privileges on the group.

Groups may also have one or more applications associated with the group. Application association allows for granular management of applications and teams access to application information.

Groups enable you to manage the developers associated with your projects and the release level of your applications.

And finally Groups allow for a higher contracted rate_limit, and site quota, over those set for default developer accounts. These settings are based on your Blackboard license or Business Development contract. If you do not have a Blackboard product license or do not have a Business Development contract your groups will all have default developer account settings.

This document explains how to create and manage your groups.

> Groups, at the writing of this document **cannot** be deleted or removed, nor in the front end, not by us in the backend.

## Creating a group

![Groups page composition](/assets/img/create-and-manage-groups-1.png)

1. **Create a group**

- You can create a group by clicking the button "Create"
  ![Creating a group in developer portal](/assets/img/create-and-manage-groups-2.png)

2. Rename a group

- You can rename an existing group bu clicking the "Rename" button
  ![renaming a group in developer portal](/assets/img/create-and-manage-groups-3.png)

3. **Select a new group**

- This dropdown will allow you to select a Group between the ones you have created.

4. **Add a new developer to the group**

- Here, given the specific group you have selected, you will be able to add a developer's email to the group.
  ![Adding a developer to the developer portal](/assets/img/create-and-manage-groups-4.png)

5. **Change the admin status**

![Options when not an admin](/assets/img/create-and-manage-groups-6.png)

- This allows you to provide a developer, on the group, with admin access. This will prevent the user to:
  - Add new developers to the group
  - Edit, Delete or manage keys of the application.
- It allows the user to manage placements and see which schools have the application deployed.
  ![Options when not an admin](/assets/img/create-and-manage-groups-5.png)
<AuthorBox frontMatter={frontMatter}/>
