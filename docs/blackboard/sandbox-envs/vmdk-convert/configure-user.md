---
title: Prepare the service account
id: user-prepare
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 2
---

To import and convert the file on the EC2 service, you will need specific policies and roles assigned to a specific user within AWS. Since AWS' recommendation (and also ours) is **not to create access keys for the root user**, we'll create a separate user on the IAM dashboard only for this process.

The following steps will help you configure all the necessary settings to connect to AWS via command line.

:::caution IAM Dashboard access
For the following steps, you need access to the IAM Dashboard within the AWS account. If you don't have access to it, please contact your company's AWS administrator to complete the following steps
:::

## Policy Creation

1. Access to your AWS' console and search for IAM on the top search bar. Access to the one called only "IAM"
2. On the left navigation menu, under Access management select `Policies`, then, click on `Create Policy`
3. On the `Specify permissions` page, click the `JSON` button.
4. Using the JSON policy editor, input the following JSON.

:::warning Remember
Change the field `[[YourBucketName]]` with the name of the bucket you created in the steps previous section
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

5. Click `Next` at the bottom of the page
6. Assign a policy name and click `Create Policy`. Make sure to write down the policy name since it will be needed

## Role creation

1. Under the same Access management section in the IAM Dashboard, select `Roles`
2. Click `Create role` in the upper right side of the page
3. In the "Select trusted entity" page, select `AWS service`
4. For the Use Case section select `EC2`, then click `Next`
5. In the "Permissions policies" page, type the name of the policy you created in the previous steps and then, click the checkbox next to its name to select it, then click `next`
6. Under "Role Details", type `vmimport` as the name of the role

:::warning IMPORTANT
For the role, it is required that the name is `vmimport` since this is an internal role the EC2 service will look for when processing automatic conversion requests. Failure to name this role as indicated will result in unexpected errors from AWS
:::

7. Click `Create role`
8. Once created, search for the role in the roles list, if there are several roles, use the search bar on top of the list and look for `vmimport`
9. Click the name to edit the role
10. Click `Trust relationships` in the middle of the page and then click `Edit trust policy`
11. Paste the following JSON on the code view making sure to replace all the JSON that was there before

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

12. Click `Update policy`

## Create user and assign the role

Now that we have the role and the policy to work through the terminal, we're going to create a service user that can be used through the CLI. The following steps will guide you through this process:

1. In the same "Access management" section, click `Users`
2. Click `Create user` (top right)
3. Assign a username and click `Next`
4. In the "Set permission" page, select `Attach policies directly`
5. Use the search bar to search for the policy you created before, then click the checkbox next to its name to assign it to the user, then click `Next`
6. Click `Create user`

## Configuring `awscli` to work with the new user

To configure your local CLI with the user you just created, follow these steps:

1. In the "Access Management" section of the IAM Dashboard, click on `Users`
2. Search for the user you created and click on its name to open the user details
3. Click `Security credentials` and then, click on `Create access key` under "Access Keys"
4. Select `Command Line interface(CLI)` in the "Use case" prompt and then click the checkbox at the bottom under "confirmation", then click `Next`
5. If you want, assign a description to the key, then click `Create access key`
6. Copy the Access key and Secret access key to a secure location and/or download the key as a `.csv` file, then click `Done`
7. Once this is completed, open a terminal window in your computer
8. Type the command `aws configure`, then hit Enter
9. The CLI will ask you for the following information:
   - AWS KEY: The Access key you just created
   - AWS Secret Key: The secret access key provided by AWS on the last step
   - Default region name: The AWS region where you created the policies and user
   - Default output format: This can be left empty or type `json`

Once you hit enter in the last question, the configuration will be saved and you will be able to execute commands in AWS using the user account created.
