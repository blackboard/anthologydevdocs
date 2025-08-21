---
title: Blackboard Learn server
id: welcome
author: Sebastian Silva
published: "2025-04-22"
edited: "2025-08-20"
sidebar_position: 1
---

We've developed a way to distribute an image of Blackboard Learn without the use of the Amazon Marketplace, or managed access to our AWS S3 buckets. We now publish a `.vmdk` file on our Global Support Portal of the latest Blackboard Learn version that you download and then convert to an Amazon Machine Image (AMI) in your own AWS account and infrastructure.

The AMI allows a developer to spin up a copy of Learn for building applications that use the REST APIs, Proctoring, Ultra Extension Framework (UEF) and/or Learning Tool Interoperability (“LTI”) to integrate with Learn. This image is a standalone copy of the SaaS deployment of Learn that allows development and testing against the Ultra user experience. New developer AMIs will be made available as a VMDK file within 90 days of the prior release of a VMDK with the then current version of Blackboard.

In later sections we will explain how you take the `.vmdk` file you’ve downloaded, upload it to AWS, convert it and then, configure an EC2 machine for use.

## Overview

An overview of the process that you will be doing throughout the next sections, once you have the server file, is as follows:

- Create an S3 bucket in your AWS account to which you will upload the `.vmdk` file.
- Configure your AWS account policies, roles and users so that you can use the CLI to convert the file to a snapshot.
- Create a configuration file on your desktop/laptop named `containers.json` that contains the JSON configuration for converting the `.vmdk` file in the S3 bucket into an server Snapshot.
- Use the graphical dashboard to create an AMI associated with the Snapshot and then deploy an EC2 server to run Blackboard Learn

## Prerequisites

In order to follow the steps outlined below, you will require the following command line packages and requisites:

- AWS Command Line Interface (awscli) - [AWS CLI documentation](https://aws.amazon.com/cli/). **This is required for some steps**
- Stable internet connection
- Basic knowledge of the command line/terminal

## Download the VMDK file

Once you have the prerequisites listed above, you will need to download the server file. Please click the "Download" button below which will take you to the correct location. Once there, read the EULA and if you agree, scroll to the bottom of the page and click the red **"Accept"** button.

:::tip Image is not behind a login screen
Although the image itself is hosted on our support portal, is not strictly necessary to have an active account to download it. If you have one, login to it and then navigate to the download page, once you click the "Accept" button, the download will start automatically.

If, on the other hand, you don't have an account, click the "Accept" button and then, fill the form with your information to start the download (first and last name, email, company, etc.)

:::

:::info Current version of the VMDK file

- **Name:** export-ami-98ffcb2475f78317t.vmdk
- **Version:** Blackboard Learn 3900.112
- **License Expiration date:** May 17th 2025.
- **File size:** 6.9Gb
- **Checksum (SHA512):**

a8b899d1e20f7be581238b638a1153843ad5ecf907badcb9ced8950fd7f463c26133d909a1980e9ac74bc4a6adbd14bf00a438d59e0391968bab3e6eee6d82a1

# Insert the Download button here

:::

## What's next

Now that you have the VMDK file downloaded, you can continue to the next section to learn how to upload the image and convert it to an AMI file
