---
title: Convert and deploy the VMDK file
id: convert-the-vmdk-file
author: Mark Kauffman
published: "2014-11-19"
edited: "2025-04-22"
sidebar_position: 10
---

This document will outline the required steps to convert the VMDK file and upload it to AWS, this will be used later on to configure the AMI instance that will have Blackboard Learn preinstalled

> If you haven't downloaded the server image yet, please download it here: [Blackboard Learn on AWS](/docs/blackboard/sandbox-envs/welcome)

## Prerequisites

In order to follow the steps outlined below, you will require the following command line packages and requisites:

- AWS Command Line Interface (awscli) - [AWS CLI documentation](https://aws.amazon.com/cli/). **This is required for some steps**
- Stable internet connection
- Basic knowledge of the command line/terminal

## Overview

As mentioned in the welcome section for the Blackboard Sandbox environment, the process has four sections:

- Create the S3 bucket and configure the roles and policies.
- Create a service account and configure it to interact with the EC2 service
- Convert the VMDK file to a snapshot file that AWS recognizes and that can be used to launch an EC2 machine
- Create an EC2 image from the converted file that can be used to launch an EC2 server.

## Create the S3 bucket and upload the server image (VMDK file)

Before we can configure the account for usage through the CLI, we need to create a bucket in the Simple Storage Service (S3) from where the EC2 service can convert the server file to a usable image. For this, follow the steps below:

:::warning S3 Naming Convention
AWS requires that all bucket names are unique in the global context, this means, it cannot be two buckets with the same name even if they're in different AWS accounts. Keep this in mind while choosing a bucket name.

For more information about S3 bucket names, please read [Amazon's documentation on naming requirements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
:::

- Access to your AWS Console
- Click the top search bar and type S3 and access to the option called `S3`
- On the S3 page, click `Create bucket`
- Assign a name under `Bucket name`, leave all other configuration as default
- Scroll to the bottom of the screen and click `Create bucket`
- On the bucket list page, click the name of the bucket you just created to open it. If you can't find it (your account has several buckets) use the search bar under the title `General purpose buckets` to search it by name
- Once AWS shows you the page with the bucket contents, click `Upload` on the top right
- Click the `Add files` button (top right) and select the VMDK file you downloaded from the Support portal
- Make sure the file is listed under the section `Files and folders`, then click `Upload`

The upload process will take a while given the size of the VMDK image. @10Mbps it should take between 10 and 20 minutes. You can continue with the creation of the policies and roles in a new tab or window while the file uploads to AWS

:::info S3 bucket name and file name
Write down the name you used to create the S3 bucket and the name of the file you uploaded, you will need this later to configure the policy and role needed for the user account
:::

## Configure the AWS user account

To import and convert the file on the EC2 service, you will need specific policies and roles assigned to a specific user within AWS. Since AWS' recommendation (and also ours) is **not to create access keys for the root user**, we'll create a separate user on the IAM dashboard only for this process.

The following steps will help you configure all the necessary settings to connect to AWS via command line.

:::caution IAM Dashboard access
For the following steps, you need access to the IAM Dashboard within the AWS account. If you don't have access to it, please contact your company's AWS administrator to complete the following steps
:::

### Policy Creation

- Access to your AWS' console and search for IAM on the top search bar. Access to the one called only "IAM"
- On the left navigation menu, under Access management select `Policies`, then, click on `Create Policy`
- On the `Specify permissions` page, click the `JSON` button.
- Using the JSON policy editor, input the following JSON.

:::warning Remember
Change the field `[[YourBucketName]]` with the name of the bucket you created in the steps above
:::

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketLocation",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:PutObject",
        "s3:GetBucketAcl"
      ],
      "Resource": [
        "arn:aws:s3:::[[YourBucketName]]",
        "arn:aws:s3:::[[YourBucketName]]/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ec2:ModifySnapshotAttribute",
        "ec2:CopySnapshot",
        "ec2:ImportSnapshot",
        "ec2:RegisterImage",
        "ec2:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
```

- Click `Next` at the bottom of the page
- Assign a policy name and click `Create Policy`. Make sure to write down the policy name since it will be needed

### Role creation

- Under the same Access management section in the IAM Dashboard, select `Roles`
- Click `Create role` in the upper right side of the page
- In the "Select trusted entity" page, select `AWS service`
- For the Use Case section select `EC2`, then click `Next`
- In the "Permissions policies" page, type the name of the policy you created in the previous steps and then, click the checkbox next to its name to select it, then click `next`
- Under "Role Details", type `vmimport` as the name of the role

:::warning IMPORTANT
For the role, it is required that the name is `vmimport` since this is an internal role the EC2 service will look for when processing automatic conversion requests. Failure to name this role as indicated will result in unexpected errors from AWS
:::

- Click `Create role`
- Once created, search for the role in the roles list, if there are several roles, use the search bar on top of the list and look for `vmimport`
- Click the name to edit the role
- Click `Trust relationships` in the middle of the page and then click `Edit trust policy`
- Paste the following JSON on the code view making sure to replace all the JSON that was there before

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "vmie.amazonaws.com"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:Externalid": "vmimport"
        }
      }
    }
  ]
}
```

- Click `Update policy`

### Create user and assign the role

Now that we have the role and the policy to work through the terminal, we're going to create a service user that can be used through the CLI. The following steps will guide you through this process:

- In the same "Access management" section, click `Users`
- Click `Create user` (top right)
- Assign a username and click `Next`
- In the "Set permission" page, select `Attach policies directly`
- Use the search bar to search for the policy you created before, then click the checkbox next to its name to assign it to the user, then click `Next`
- Click `Create user`

### Configuring `awscli` to work with the new user

To configure your local CLI with the user you just created, follow these steps:

- In the "Access Management" section of the IAM Dashboard, click on `Users`
- Search for the user you created and click on its name to open the user details
- Click `Security credentials` and then, click on `Create access key` under "Access Keys"
- Select `Command Line interface(CLI)` in the "Use case" prompt and then click the checkbox at the bottom under "confirmation", then click `Next`
- If you want, assign a description to the key, then click `Create access key`
- Copy the Access key and Secret access key to a secure location and/or download the key as a `.csv` file, then click `Done`
- Once this is completed, open a terminal window in your computer
- Type the command `aws configure`, then hit Enter
- The CLI will ask you for the following information

  - AWS KEY: The Access key you just created
  - AWS Secret Key: The secret access key provided by AWS on the last step
  - Default region name: The AWS region where you created the policies and user
  - Default output format: This can be left empty or type `json`

Once you hit enter in the last question, the configuration will be saved and you will be able to execute commands in AWS using the user account created.

## Convert the VMDK file to an EC2 snapshot

This part of the document will guide you through the commands needed to convert the server file to a snapshot file within the EC2 service. This snapshot will be later use to create an image which can be used to launch an EC2 machine.

To convert the file, follow these steps:

- Create a `containers.json` file in a directory on your laptop/desktop computer. The file should contain the following JSON for the VMDK.

:::warning REMEMBER
The fields that are surrounded by double square brackets (`[[example]]`) is information that you need to modify according to your S3 name or preference (Depending on the field)
:::

```json
{
  "Description": "[[A Short Description]]",
  "Format": "VMDK",
  "UserBucket": {
    "S3Bucket": "[[Your S3 Bucket Name]]",
    "S3Key": "[[Server File Name]].vmdk"
  }
}
```

The following is an example of the `containers.json` file:

```json
{
  "Description": "Blackboard Learn 3900.112",
  "Format": "VMDK",
  "UserBucket": {
    "S3Bucket": "MyLearnImages",
    "S3Key": "export-ami-0e0a6b40cd7b773ca.vmdk"
  }
}
```

- Once the file is created, execute the following command in your terminal to start the VMDK file conversion:

```shell
aws ec2 import-snapshot --description "[[A short description of this job]]" --disk-container "file://[[Path to your containers.json file]]"
```

Example:

```shell
aws ec2 import-snapshot --description "Blackboard Learn 3900.112" --disk-container "file:///Users/developer/Desktop/containers.json"
```

:::tip File Path
Make sure the file path for your file starts with `file://`. Excluding this identifier will result in "unexpected format" errors from the CLI
:::

Once the command is executed, you will see a response on the terminal with a `ImportTaskId` field which represents the Job ID create to conver the file.

To monitor the status of the conversion, you can execute the following command on your terminal:

```shell
aws ec2 describe-import-snapshot-tasks --import-task-ids [[ImportTaskId]]
```

The response will have a property called `Status` which you can monitor. When the status is set to "Completed", you will also receive a `SnapshotId`, please save this ID since you will need it to locate the correct server through the GUI

## Use the snapshot to create an EC2 Image

Once the conversion process is completed, follow these steps to create an EC2 machine with your snapshot:

- Access to the AWS Console through the browser
- Use the top search bar to search for `EC2` and select the first option called `EC2`
- In the left navigation menu, select `Snapshots` under "Elastic Block Store"
- Search for the snapshot that was just created using the `SnapshotId`
- Click the checkbox next to the snapshot name, click the `Actions` button (top right) and then, select `Create image from snapshot`
- Assign a Name and Description to the image and then, click on `Create image` at the bottom of the page
- In the left navigation menu, select `AMIs` under "Images"
- In there you should see the image you just created, ready to be used in an EC2 machine

## Deploy your EC2 Machine

Now that you have your image, you can launch an EC2 machine by clicking the checkbox next to the image name and then, clicking `Launch instance from AMI`

This will take you to the Launch wizard for EC2 that will prompt you for configuration details (such as server size, network information, ssh key pairs, etc.). These configuration details will depend solely on your judgment, however, we have a series of recommendations on our next article [Configure your deployed AMI image](/docs/blackboard/sandbox-envs/configure-the-ami) that you can follow to configure the server
