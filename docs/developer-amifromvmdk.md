---
title: Blackboard AMI From VMDK
id: developer-amifromvmdk
author: Mark Kauffman
published: "2014-11-19"
edited: "2024-11-19"
---

### VMDK Availability
:::danger VMDK availability

NOTE: If you are on this page and have not yet downloaded the .vmdk file from support.anthology.com please visit that site. Login if you have an account and look for the button on the page titled [New Way to Access Blackboard AMI]. If you do not find the button, you have reqched this page before the availablity of the .vmdk. The rest of this document explains what the .vmdk file is and how you use it to create a Blackboard AMI in your AWS account.

:::

#### Introduction and Prerequisites
We've developed a means to distribute the Blackboard AMI without the use of the marketplace, or managed access to our AWS S3 buckets. To do so we now publish a .vmdk file on our support portal for the Blackboard build that you download for conversion to an AMI in your AWS account.

This document explains how you can take the .vmdk file you’ve downloaded and convert it into an AMI in your AWS account. The major prerequisite is that you will need to have your desktop/laptop configured to use the AWS Command Line Interface (CLI).  Several steps only function using the CLI. Refer to https://aws.amazon.com/cli/ If you have any issues with the AWS CLI review the Amazon documentation and/or reach out to Amazon for support. Another prerequisite is a good, stable, internet connection. The file is large, close to 10GB, and can take an hour or so to upload @ 22MBPS. 

You will need to download the .vmdk file from support.anthology.com before proceeding with the instructions in this document. If you've a support.anthology.com account login and then find the button on the home page titled [New Way to Access Blackboard AMI]. Click the button, on the page that comes up read and accept the terms, then at the bottom click the accept button. Your download will start. If you don't have a support.anthology.com account you can find the button and accept the terms, and you will have an additional step of filling out a form with your contact information. Once you've filled out the form your download will start. NOTE: THE DOWNLOAD CAN TAKE AN HOUR OR TWO. Have a good internet connection

#### Overview

An overview of the process that you will be doing, once you have the .vmdk file, is as follows. You will create an S3 bucket in your AWS account to which you will upload the .vmdk file. You will configure your AWS account policies so that you can use the CLI to convert the .vmdk file to a snapshot. You will create a configuration file on your desktop/laptop named containers.json that contains the JSON configuration for converting the .vmdk file in the S3 bucket into a Snapshot. You can then use the graphical dashboard to create an AMI associated with the Snapshot.

#### Steps to Convert the .vmdk File to an AMI

1. Configure the AWS CLI for your AWS account. See https://aws.amazon.com/cli/ The CLI MUST be used for some steps. This is not optional.
2.	Test that you can use the CLI to view your S3 buckets from your terminal:
    1. aws s3 ls 
    2. Expected result: you get a list of S3 buckets.
3.	Use the GUI or CLI to create an S3 bucket, with all of the settings as the default, in your AWS account named learnexports.
4.	Upload the .vmdk file that will be used to create an AMI into the learnexports bucket. This will take some time, between an hour and a couple of hours depending on your network speed. You may continue here to configure your AWS account during the upload process.
5.	Once you have a learnexports bucket in S3, configure your AWS IAM as follows using the GUI:
    1.	Select the IAM service to get the IAM > Dashboard
    1.	Under Access management in the left nav, select policies
    1.	Click [Create policy]
    1.	On the Specify permissions page, click the [JSON] button.
    1.	Using the JSON policy editor, input the following JSON:
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
            "ec2:RegisterImage",
            "ec2:Describe*"
         ],
         "Resource": "*"
      }
   ]
}
```  
6.	Hit [Next] then on the Review and create page set the Policy Name to avmimportpolicy. Click [Create policy] at the bottom of the page.
7.	In the IAM left nav, under “Access management” click “Roles”.
8.	Click [Create role] in the upper right of the page.
9.	Trusted entity type is AWS service.  See screenshot below.

