---
title: Prepare your AWS account
id: aws-prepare
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 1
---

To upload and properly convert your server file, you will have to configure your AWS account to accept connections from your command line. The following steps will guide you through the process of creating the S3 bucket and upload the file for later use

:::tip AWS ACCOUNT
If you don't have an AWS account, you can go to [AWS](https://aws.amazon.com/) and click on "Create account"
:::

## Create the S3 bucket and upload the server image (VMDK file)

Before we can configure the account for usage through the CLI, we need to create a bucket in the Simple Storage Service (S3) from where the EC2 service can convert the server file to a usable image. For this, follow the steps below:

:::warning S3 Naming Convention
AWS requires that all bucket names are unique in the global context, this means, it cannot be two buckets with the same name even if they're in different AWS accounts. Keep this in mind while choosing a bucket name.

For more information about S3 bucket names, please read [Amazon's documentation on naming requirements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
:::

1. Access to your AWS Console
2. Click the top search bar and type S3 and access to the option called `S3`
3. On the S3 page, click `Create bucket`
4. Assign a name under `Bucket name`, leave all other configuration as default
5. Scroll to the bottom of the screen and click `Create bucket`
6. On the bucket list page, click the name of the bucket you just created to open it. If you can't find it (your account has several buckets) use the search bar under the title `General purpose buckets` to search it by name
7. Once AWS shows you the page with the bucket contents, click `Upload` on the top right
8. Click the `Add files` button (top right) and select the VMDK file you downloaded from the Support portal
9. Make sure the file is listed under the section `Files and folders`, then click `Upload`

The upload process will take a while given the size of the server file. @10Mbps it should take between 10 and 20 minutes. You can continue with the creation of the policies and roles in a new tab or window while the file uploads to AWS

:::info S3 bucket name and file name
Write down the name you used to create the S3 bucket and the name of the file you uploaded, you will need this later to configure the policy and role needed for the user account
:::

Once the file is uploaded to the bucket, you can follow to the next section to create a service user and configure the roles and permissions.
