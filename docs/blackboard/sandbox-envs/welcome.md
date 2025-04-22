---
title: Blackboard Learn on AWS
id: welcome
author: Sebastian Silva
published: "2025-04-22"
edited: "2025-04-22"
sidebar_position: 1
---

We've developed a means to distribute the Blackboard AMI without the use of the Amazon Marketplace, or managed access to our AWS S3 buckets. To do so we now publish a .vmdk file on our support portal for the Blackboard build that you download and then convert to an AMI in your AWS account.

The following section will explain how you take the .vmdk file you’ve downloaded, convert it into an AMI in your AWS account and then, configure for use. The major prerequisite is that you will need to have your desktop/laptop configured to use the AWS Command Line Interface (CLI). Several steps only function using the CLI. The second prerequisite is a good, stable, internet connection. The file is large, close to 10GB, and can take an hour or so to upload @ 22MBPS.

## Overview of the process

An overview of the process that you will be doing throughout the next sections, once you have the .vmdk file, is as follows:

- You will create an S3 bucket in your AWS account to which you will upload the .vmdk file.
- You will configure your AWS account policies so that you can use the CLI to convert the .vmdk file to a snapshot.
- You will create a configuration file on your desktop/laptop named containers.json that contains the JSON configuration for converting the .vmdk file in the S3 bucket into a Snapshot.
- You can then use the graphical dashboard to create an AMI associated with the Snapshot.

## Download the VMDK file

Our server file is currently hosted on our Antholgy Global Support portal, to download please click the download button below which will take you to our portal. Once there, read the EULA and if you agree, scroll to the bottom of the page and click the red **"Accept"** button.

:::tip Image is not behind a login screen
Although the image itself is hosted on our support portal, is not strictly necessary to have an active account to download it. If you have one, login to it and then navigate to the download page, once you click the "Accept" button, the download will start automatically.

If, on the other hand, you don't have an account, click the "Accept" button and then, fill the form to start the download (first and last name, email, company, etc.)

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

Now that you have the VMDK file downloaded, you can continue to the next section to learn how to covert the image and upload it to AWS
