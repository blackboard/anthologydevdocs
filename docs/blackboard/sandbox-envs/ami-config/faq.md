---
title: FAQ and troubleshooting
id: faq
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 4
---

The following section contains the Frequently asked questions along with troubleshooting steps for common issues

## FAQ

### What does the Blackboard Learn server file or AMI cost?

The Open Innovation Initiative was created to lower the cost of entry for developing software solutions on the Learn platform. This is accomplished by removing the previous Partner program costs and replacing those partner program costs with low hourly AMI usage costs. This enables you the developer to control your costs for prototyping your applications and entering the education software market.

Use of the Developer AMI will result in two charges being made to your account:

1. An AWS Infrastructure charge
   This charge is based on the EC2 instance type selected to run the AMI and varies based on the instance type size and region. An example is $0.0464/hr for a t2.medium instance served from

2. Software charge
   A Software charge of $0.05/hr (US dollars) is added to the AWS infrastructure charge.

:::warning
Not stopping your EC2 when you encounter an error or completed your development cycle will continue to incur EC2 charges, these are charged by AWS and as such, we can't issue refunds on those EC2 instances. Always stop your EC2 if you encounter an error or do not require a 24x7 development instance.

:::

If you have any questions, feel free to ask in this space or email us at developers@anthology.com.

### How can I migrate the information from one EC2/AMI to another? -- Migration Cookbook - Recreating Data between AMIs

Prior to the expiration of an AMI license (which is not upgradable) if you wish, you may migrate existing Learn data to your new subscription.

Currently, there is no formal migration/transfer tool to port Learn data between AMI (EC2) instances. However, there are several existing administrative tools that can be leveraged to capture the bulk of T&L (teaching/learning data) like courses, users, institutional roles, and enrollments, etc. from an existing (source) EC2 and reinstate/recreate the data onto a (new) EC2. The resources linked below will guide you through this data transfer process:

1. [Bb Learn EC2 Data Transfer.docx](/assets/files/Bb%20Learn%20EC2%20Data%20Transfer.docx): A Word doc outlining a comprehensive step-by-step overview of the migration/transfer process between a source and destination EC2.
2. [EC2 Migration SQL Scripts and Feed Files.zip](/assets/files/EC2%20Migration%20SQL%20Scripts%20and%20Feed%20Files.zip): A zip file containing all the SQL scripts (PostgreSQL format) and example feed files referenced in the Data Transfer overview document (above).

## Troubleshooting

For General Learn System Administration you may visit: [Learn SaaS Deployments](https://help.blackboard.com/learn/Administrator/SaaS)

### 504 Gateway Error

Visiting https:// displays a 504 error in your browser

- Shutdown the instance to stop accumulating charges and try again
- reboot the instance through SSH

### `Invalid Hosts` error

When receiving this error there are two root causes:

1. The server hasn't properly started and the router is still spooling up. Give it 5 to 10 minutes and try again, if the issue persists follow to the next step
2. Incorrect configuration for the VPC. Please verify that the third step of the configuration under [Use the Blackboard REST and LTI Developer AM](/docs/blackboard/sandbox-envs/ami-config/overview.md) was followed and DNS hostnames is set to **Yes**

if the issue persists, please create a ticket through our Anthology Support Portal or send an email to [developers@anthology.com](mailto:developers@anthology.com)

### CVE from AVG Antivirus

While using the AVG antivirus product on a Windows system (might also affect Linux and MacOS) and attempting to create a course using Learn, AVG may manifest what we believe is a false positive dialog regarding CVE-2014-0286-A. This can occur while using any browser.

The error message is specific to now unsupported versions of Microsoft Internet Explorer 6 through 11. Our security team has indicated that this is an issue with the AVG software. See the AVG website for questions about configuring the AVG software, and for their contact information.
