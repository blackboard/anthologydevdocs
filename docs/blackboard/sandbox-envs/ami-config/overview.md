---
title: Configure your EC2 server
id: config-overview
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 1
---

This section outlines the process of setting up and using the Learn REST and LTI Developer AMI. Previously available through the Amazon AWS Marketplace, this AMI is now distributed as a downloadable VMDK file. Developers can upload the VMDK file to their AWS account to create and manage their own AMI instances.

## Before starting

To be able to follow this document and configure your AMI instances, you must have an Amazon AWS account. If you do not have an AWS account you will need to create one.

In addition to this, you also need the VMDK server file provided in our support portal, if you don't have this, please follow this guide to download and convert the file: [Blackboard Learn Server](/docs/blackboard/sandbox-envs/welcome)

## Deploy and configure your EC2 Machine

Once the server file has been uploaded and converted into an AMI in your AWS account, the steps to set up the server are as follows:

- Configure the specific EC2 instance
- Spin it up and code!

To launch an EC2 machine, access to the `AMI` section within the EC2 service page in AWS. From there, locate the image that you created while importing the server file following the previous sections, then, click the checkbox next to its name and finally, click the `Launch instance from AMI` at the top right to go to the server configuration page.

This will take you to the Launch wizard for EC2 that will prompt you for configuration details (such as server size, network information, ssh key pairs, etc.). These configuration details will depend solely on your judgment, however, we have a series of recommendations below:

1. We recommend using the Large Tier instance type (`t2.large` - 4vCPU/8Gb RAM). This gives you enough storage and power to run Learn effectively and build your integration.

:::important 502 Gateway error
If you see 502 Gateway errors, this might indicate that your server is running out of memory to process the requests. You may need to increase the size of your AMI.

If you already have a `t2.large` server, refer to our Frequently Asked Questions (FAQ) and troubleshooting section [here](/docs/blackboard/sandbox-envs/ami-config/faq). If the issue persist, please contact Anthology Support for assistance (If you have a support portal account, create a ticket for this issue, if you don't have an account, email developers@anthology.com)
:::

2. We recommend you adjust the security settings to allow:

   - SSH from your IP only
   - Enable HTTPS access
   - Enable HTTP access (Let's Encrypt requires this)

3. You must configure VPC for the EC2 to properly function. You do this by going to the VPC Console from the AWS Console:
   - Under Services open VPC under Networking and Content Delivery
   - Open Your VPCs
   - select the VPC connected to your EC2 and
   - select Actions => Edit DNS Hostnames —> Change DNS hostnames: to YES

Once the server is configured to your liking, click Launch to provision the server. To access the Blackboard Learn server and/or get general information about the server, go to the next section.
