---
title: 'Mapping Entitlements to Privileges'
id: getting-started-with-entitlements
categories: Learn REST
author: Davey Herrera
sidebar_position: 4
published: ''
edited: ''
---

If you are looking forward to map entitlements with privileges when integrating a new application with a Learn instance, you are in the right place! You probably saw this:

- `"/learn/api/public/v1/courses/{courseId}/meetings"` or this `"course.attendance.VIEW"`

When you wanted to see something like this:

- Administrator Panel (Communities) > Institutional Hierarchy > Manage Node Tools

Well look no further because we will explain to you how to match them!

### A few definitions first

1. **We talk about entitlements when we talk about actions an application can perform**

- An entitlement looks like this: course.attendance.VIEW
- You can find them in https://developer.anthology.com/portal/displayApi
- They are usually displayed when you expand an endpoint

2. **We talk about privileges when we talk about actions an user can perform**

- Privileges look like this: Administrator Panel (Communities) > Institutional Hierarchy
- You can find them when setting up a new system role and assigning privileges.

3. We talk about endpoints when we talk about an url path that will return information. If you need to know more about this, please review our presentations about REST API for beginners.

## What do you need?

1. You need to know how to create a _custom_ System Role: [How to create a System role](https://help.blackboard.com/Learn/Administrator/SaaS/User_Management/Roles_and_Privileges/System_Roles)
2. You need to know which api endpoints you will be using: [Learn API endpoints](https://developer.anthology.com/portal/displayApi)
3. You need to review, based on the endpoints you will be using, the entilements that you need. Remember that each entitlement is described when opening an endpoint at the beggining.

## Context

When you want to develop an application, you will need to enable permissions for it. Doing so within learn can be challening because we talk in different terms when creating system roles and assigning privileges, we explain about them up in this page, make sure to read that first.

Given that you already have the things that you need [Custom system role, the endpoints and entitlements].

When you where creating the system role, you may or may not have noticed that as I mentioned before, the Privileges look nothing like the entitlements, so, which privileges do I pick?

## Mapping Entitlements with Privileges

We have a way for you to know which privilege pick:

First, you need to know how to create a bookmark:

### In Google Chrome (Version 116.0.5845.110):

- Paste this in your url bar: chrome://bookmarks/ (This will take you to your bookmark manager)
- Click on the three vertical dots on the top right of that web page > Add new bookmark
- Provide a name
- Under url paste ONLY this code (This a really long ONE line make sure you copy all the code until you see empty () ):

```js
javascript:(function()%7Bif('jQuery'%20in%20window)%7Blet%20showUids%3D(jq)%3D%3E%7Bjq('tbody%23listContainer_databody%20%3E%20tr').each((i%2Ctr)%3D%3E%7B%20var%20val%20%3D%20jq('input%5Btype%3Dcheckbox%5D'%2C%20tr).prop('value')%3B%20jq('th'%2C%20tr).append('%3Cdiv%3E%3Ci%3E'%2Bval%2B'%3C%2Fi%3E%3C%2Fdiv%3E')%3B%20%7D)%7D%3Blet%20ws%3D%5B%5D%3Bws.push(window)%3Blet%20ifr%3DjQuery('iframe').prop('contentWindow')%3Bif(ifr)%7Bws.push(ifr)%3B%7Dws.forEach((w)%3D%3E%7BshowUids(w.jQuery)%3B%7D)%3B%7D%7D)()
```

It should look something like this:

![A screenshot of a bookmark with information filled out](/assets/img/mapping-entitlements-to-privileges-1.png)

## What happens now?

After you have done everything properly, you can go to the privileges of your custom system role and you will see this:

![A screenshot of Learn privileges](/assets/img/mapping-entitlements-to-privileges-2.png)

And if you click your bookmark **while still on the privileges page** you should see this:

![A screenshot of Learn privileges with entitlements](/assets/img/mapping-entitlements-to-privileges-3.png)

> Make sure that the Show all privileges button was clicked first
