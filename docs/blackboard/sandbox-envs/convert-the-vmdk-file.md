---
title: Convert and deploy the VMDK file
id: convert-the-vmdk-file
author: Mark Kauffman
published: "2014-11-19"
edited: "2025-04-22"
sidebar_position: 2
---

This document will outline the required steps to convert the VMDK file and upload it to AWS, this will be used later on to configure the AMI instance that will have Blackboard Learn preinstalled

> If you haven't downloaded the server image yet, please download it here: [Blackboard Learn on AWS](/docs/blackboard/sandbox-envs/welcome)

## Prerequisites

In order to follow the steos outlined below, your computer will have to have the following command line packages:

- Knowledge of the command line/terminal
- AWS Command Line Interface (awscli) - [AWS CLI documentation](https://aws.amazon.com/cli/). **This is required for some steps**
- Stable internet connection

## Convert the .vmdk File to an AMI

:::danger S3 Bucket Name
We use `learnexports` as our S3 bucket name in the instructions that follow. S3 buckets must have a unique name across all of AWS. You will need to name your S3 bucket something unique and use that name where `learnexports` is used below.

For more information about S3 names, please read [Amazon's documentation on naming requirements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
:::

The first part of this process is convert the VMDK file to a snapshot file that AWS recognizes and that can be used to launch an EC2 machine. The following steps will guide you through the process of uploading the file and converting it:

### Create the S3 bucket and upload the server image (VMDK file)

- Configure the AWS CLI for your AWS account and authenticate. See https://aws.amazon.com/cli/ and https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sso/index.html
- Test that you can use the CLI to view your S3 buckets from your terminal by running this command on your terminal:

```
aws s3 ls
```

The expected output of this command is a list of the available S3 buckets in your account

- Use the GUI or CLI to create an S3 bucket, with all of the settings as the default, in your AWS account named `learnexports`. **REMEMBER** Modify `learnexports` to your unique name. Example: `learnexports-bigsoftinc`.
- Upload the .vmdk file that will be used to create an AMI into the `learnexports` bucket. This will take some time, between an hour and a couple of hours depending on your network speed. You may continue here to configure your AWS account during the upload process.

### Create the IAM policies

Once you have the equivalent of a `learnexports` bucket in S3, configure your AWS IAM as follows using the GUI:

- Select the IAM service to get the IAM > Dashboard
- Under Access management in the left nav, select policies
- Click [Create policy]
- On the Specify permissions page, click the [JSON] button.
- Using the JSON policy editor, input the following JSON. REMEMBER You will need to use the unique S3 bucket name you've chosen in place of `learnexports`.

```
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
"arn:aws:s3:::learnexports",
            "arn:aws:s3:::learnexports/*"
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

- Hit [Next] then on the Review and create page set the Policy Name to `avmimportpolicy`. Click [Create policy] at the bottom of the page.

### Attach the policy to the user performing the process

To continue with the process, the user making the requests (either through CLI or the GUI) will have to have the correct policies, in our case, the one we just created. To attach the policy to your AWS user follow these steps:

- Navigate to the IAM console and select the desired user
- Go to the "Permissions" tab and click "Add permissions"
- Choose "Attach existing policies directly" and select the policy you want to attach to the user
- In the IAM left nav, under “Access management” click “Roles”.
- Click [Create role] in the upper right of the page.
- Trusted entity type is AWS service. See screenshot below.

![AWS Trusted Entity](/assets/img/AWSTrustedEntity.png)

10. In the Use case section, select the EC2 service. Click [Next].
11. Now you are on the “Add permissions” page. Use the Search to find the `avmimportpolicy` you just created in steps 4 and 5. Check the box next to it. Then click [Next].
12. Now you are on the “Name, review, and create” page.
13. At the top, under Role details, YOU MUST NAME THE ROLE `vmimport` <- exactly this. Nothing else! Leave everything else as the default and scroll to the bottom of the page.
14. Click [Create role] at the bottom right of the page.
15. Now use the Search to find the `vmimport` role you just created. Click on its link.
16. Click on the “Trust relationships” tab just to the right of “Permissions”
17. Click the [Edit trust policy] button.
18. Replace ALL of the JSON shown with the following JSON:

```
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

19. At the bottom right of the page, click the [Update policy] button. You have finished configuring the necessary IAM policies and roles so you can convert a .vmdk file into a snapshot that can be used to create an AMI. Now proceed to do so.
20. Create a `containers.json` file in a directory on your laptop/desktop computer. The file should contain the following JSON for the VMDK. You will replace the Description and the export-ami- lines with the current values for each release.
    1. REMEMBER learnexports will need to be the unique S3 bucket name you've chosen.

```
{
    "Description": "Learn3900104VMDK",
    "Format": "VMDK",
    "UserBucket": {
        "S3Bucket": "learnexports",
        "S3Key": "export-ami-0e0a6b40cd7b773ca.vmdk"
    }
}
```

21. Use the CLI to convert the .vmdk into a Snapshot.
    1. aws ec2 import-snapshot --description "Learn3900100VM" --disk-container "file:///Users/mkauffman/work/bbami/3900.100.0/containers.json"
    1. See aws ec2 import-snapshot documentation. You need the full path to your containers.json file
    1. This will create a snapshot file for you.
    1. JSON output will include a line like: "ImportTaskId": "import-snap-084a4afb185bedc98" <- NOTE the taskId. You will use it in the next step.
22. Use the CLI to monitor the conversion of the .vmdk to a snapshot.
    1. aws ec2 describe-import-snapshot-tasks --import-task-ids import-snap-084a4afb185bedc98
    1. Use the task Id you got from the prior step.
    1. Eventually,after a few minutes, you will get JSON output with “Status”: “completed” and, for example a “SnapshotId”: "snap-04465254a72c30c82"
23. Look in the EC2 section of your AWS GUI for the Snaphshots link. You will see the snapshot you just created. Check the box next to it, then under the Actions menu select “Create image from snapshot.” See the following screenshot.

![AWS Create Image From Snapshot](/assets/img/AWSCreateImageFromSnapshot.png)

24. On the “Create image from snapshot” form give the image a meaningful Name, Ex: “3900.100 Blackboard REST AMI from Snap 04465254a72c30c82”, and a similar Description. Click the [Create image] button at the bottom of the page.
25. You should see a message indicating that the AMI has been created. Under Images in the EC2 dashboard left navigation, click AMIs. You will find the AMI you just created from the snapshot. You can copy the AMI name to the Name field.

![AWS Created AMI Complete](/assets/img/AWSCreatedAMIComplete.png)

26. You can now Use the Blackboard REST and LTI Developer AMI as per [Use the Blackboard REST and LTI Developer AMI](/docs/blackboard/sandbox-envs/configure-the-ami#use-the-blackboard-rest-and-lti-developer-ami).
27. NOTE: Make certain to have a security policy on your EC2 instance that allows HTTP and HTTPS traffic from anywhere. Let’s Encrypt will not function correctly without HTTP being open.
