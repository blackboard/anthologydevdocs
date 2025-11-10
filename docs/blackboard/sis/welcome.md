---
title: "Getting started with SIS"
sidebar_position: 1
id: getting-started
author: John Z. Walthall
published: ""
edited: ""
---

The SIS (Student Information Systems) API is a classic API oriented around bulk or event-driven data loading from a SIS
or ERP program like Anthology Student, Banner or Colleague. Most aspects of SIS are [documented on our main help site](https://help.blackboard.com/Learn/Administrator/SaaS/Integrations/Student_Information_System),
but some developer documentation is provided here.

## SIS Types

The "prime" data type is "[Snapshot Flat File](https://help.blackboard.com/Learn/Administrator/SaaS/Integrations/Student_Information_System/SIS_Integration_Types/Snapshot_Flat_File)", which is a bulk-loading oriented delimited text file. This is the 'native'
format of Blackboard and has the widest support for the LMS's many data types.

We also support three industry-standard formats:

* [LIS 2.0 Final and Draft](https://help.blackboard.com/Learn/Administrator/SaaS/Integrations/Student_Information_System/SIS_Integration_Types/LIS)
* [IMS Enterprise 1.1](https://help.blackboard.com/Learn/Administrator/SaaS/Integrations/Student_Information_System/SIS_Integration_Types/Enterprise_1.1)
* [IMS Enterprise 1.1 - Vista](https://help.blackboard.com/Learn/Administrator/SaaS/Integrations/Student_Information_System/SIS_Integration_Types/Enterprise_1.1) 

These are usually used in an event-driven workflow.

## Security

SIS is effectively infinitely powerful. It can create, remove, or delete anything. SIS data files also contain highly 
sensitive data and access to them should be strictly controlled. (Note: Support may require the feed file for problem
investigation.) 

One particular case is setting passwords by SIS. They can be supplied in cleartext, but this is not recommended and they
should be provided in [hashed form.](sis-password-hashes.md)