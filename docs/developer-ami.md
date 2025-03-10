---
title: Blackboard Learn Sandbox environment
id: developer-ami
author: Mark O'Neil
published: "2018-07-04"
edited: "2024-07-26"
---

### Blackboard Developer AMI

This document outlines the process of setting up and using the Learn REST and LTI Developer AMI. Previously available through the Amazon AWS Marketplace, this AMI is now distributed as a downloadable VMDK file. Developers can upload the VMDK file to their AWS account to create and manage their own AMI instances.

For detailed instructions on converting the VMDK file to an AMI, refer to the [Blackboard AMI From VMDK guide](/docs/developer-amifromvmdk.md).

Please note that AMI Blackboard licenses are not upgradable. You must download a newer release and migrate any content or tools prior to license expiration. Please review the Migration Cookbook - Recreating Data between AMIs section below.


#### Overview

The Learn REST and LTI Developer Amazon Machine Image (“AMI”) is an image of a Learn server available in the Amazon Marketplace. The AMI allows a developer to spin up a copy of Learn for building applications that use the REST APIs and/or Learning Tool Interoperability (“LTI”) to integrate with Learn. This image is a standalone copy of the SaaS deployment of Learn that allows development and testing against the Ultra user experience. Once the developer spins up the copy of Learn, it lives in his or her AWS account and the developer has full control over the instance of Learn. All instances are pre-licensed with a developer license. New developer AMIs will be made available as a VMDK file within 90 days of the prior release of a VMDK with the then current version of Blackboard. 

This program allows a developer to build an integration for Learn without a formal paid partnership. Anyone who wants to test the Ultra experience can create copy. Note that you cannot deploy a custom building block to this AMI. It is meant only for REST and LTI development.

**NOTE:** Building Block installation is NOT supported on the AMIs.

#### Getting the Blackboard REST and LTI Developer VMDK for an AMI
Before you begin, you must have an Amazon AWS account. If you do not have an AWS account you will need to create one.

1.	Visit Anthology Support. If you have an account login.
1.	Click the button labeled "New Way to Access Blackboard AMI".
1.	Read the EULA and click the Accept button to accept.
1.	If you are logged in your download will begin. 
1.	If not logged in, you will be asked to submit a form with your contact information, then your download will begin. 
1.	The download is large and may take an hour or so. Have a good internet connection.
1.	Follow the [Blackboard AMI From VMDK guide](/docs/developer-amifromvmdk.md) to upload the VMDK file to your AWS account and convert it to an AMI.

### Use the Blackboard REST and LTI Developer AMI

Once the VMDK file has been uploaded and converted into an AMI in your AWS account, the steps to set up an AMI are typically as follows.

- Configure the specific instance
- Spin it up and code!
- When configuring the instance, it is completely up to you how you set up the server. We do have a few recommendations, however.

> Note: The default SSL cert generated on first startup is _not_ a trusted certificate. Please follow the instructions below for full SSL support.

1. We recommend using the Large Tier instance type. This gives you enough storage and power to run Learn effectively and build your integration.

- If you see 502 Gateway errors, you may need to increase the size of your AMI.

2. We recommend you adjust the security settings to allow:

- SSH from your IP only
- Enable HTTPS access
- Enable HTTP access (Let's Encrypt requries this)

3. You must configure VPC for the EC2 to properly function. You do this by going to the VPC Console from the AWS Console:
4. Under Services open VPC under Networking and Content Delivery
5. Open Your VPCs
6. select the VPC connected to your EC2 and
7. select Actions => Edit DNS Hostnames —> Change DNS hostnames: to YES
8. Startup time: The startup time for your EC2 will vary and may take as long as 15 minutes before you may access the site via your browser. SSH access may be available in 3 minutes or less.
9. On initial startup the Original UX login screen appears.

> **Note the messaging on the initial startup page**, as it informs you when the license expires. You will need to subscribe to a new AMI release prior to license expiration if you wish to migrate data from the old EC2 to the new. Licenses on AMIs are not extendible.

#### Discovering License Expiration Date

Should you switch to Ultra or have misplaced your license expiration date, you may find it using one of three approaches.

#### 1. using the EC2 Console

In your EC2 console select your EC2 and from the `Actions` dropdown select `Monitor and troubleshoot>Get system log`.

In the displayed system log scroll up until you see something similar to the following:

```
[  152.707540] cloud-init[1070]: ###########################################################################################
[  152.729516] cloud-init[1070]: #
[  152.748988] cloud-init[1070]: #     Blackboard Learn administrator login is:
[  152.760195] cloud-init[1070]: #         Username: administrator
[  152.780283] cloud-init[1070]: #         Password: i-0c0b00e8b5232274f
[  152.789873] cloud-init[1070]: #     https://ec2-100-27-14-64.compute-1.amazonaws.com,
[  152.789873] cloud-init[1070]: #     with an instance-id of i-0c0b00e8b5232274f
[  152.807936] cloud-init[1070]: #
[  152.842645] cloud-init[1070]: #     NOTE: this Learn license expires on 2024-01-14 17:18:36 GMT
[  152.855459] cloud-init[1070]: #
[  152.858880] cloud-init[1070]: #     It may take as long as 10 minutes from 14:35:31 to start with a new configuration.
[  152.869085] cloud-init[1070]: #
[  152.871837] cloud-init[1070]: ###########################################################################################
```

#### 2. using `tail` in a terminal

ssh to your instance and

```
$ tail -14 start.log
###########################################################################################
#
#     Blackboard Learn administrator login is:
#         Username: administrator
#         Password: i-0c0b00e8b5232274f
#     for https://ec2-100-27-14-64.compute-1.amazonaws.com,
#     with an instance-id of i-0c0b00e8b5232274f
#
#     NOTE: this Learn license expires on 2024-01-14 17:18:36 GMT
#
#     It may take as long as 10 minutes from 08:38:16 to start with a new configuration.
#
###########################################################################################
(startup time: 0hrs 3min 53sec)
```

#### 3. using `grep` in a terminal

ssh to your instance and

```
$ grep "CHECK LICENSE:" start.log

Tue Sep 12 08:34:37 EDT 2023: CHECK LICENSE: License is current
Tue Sep 12 08:34:37 EDT 2023: CHECK LICENSE: License expires on 2024-01-14 17:18:36 GMT
```

#### Support for Let’s Encrypt SSL Certificates

Starting with version 3300.6.0 the Learn for REST and LTI Developers AMI supports free Let’s Encrypt SSL Certificates. At this time we do not support alternative SSL certificate processes. Here's a [video walkthrough](https://youtu.be/eQu7Ii923DU) of setting up with Let's Encrypt.

**NOTE:** Per the Let’s Encrypt FAQ certificates are valid for only 90 days. In order to update your Let’s Encrypt certificate you must perform a server reboot per below instructions.

- You may read about Let’s Encrypt at Let’s Encrypt - Free SSL/TLS Certificates

- You may read about certbot at Certbot

- You may read about how to get a free DNS at Free Dynamic DNS - No-IP.com - Managed DNS Services

#### Setup

After starting your AMI there are a few steps to installing and using Let’s Encrypt Certificates. After installing the certificate, management of the Let’s Encrypt SSL certificate is automatic.

1. Register the AWS provided EC2 public IP to your DNS as an A-record. The best practice as an introduction is to use a free DNS service such as freeddns.no-ip.com to provide the FQDN used for your Learn EC2.

2. Use the EC2 Security controls to open HTTP as an inbound security rule - you should have HTTP, HTTPS, and SSH (from your console IP) enabled at this point.

3. SSH to your EC2 instance and create a file containing your FQDN from freeddns.no-ip.com and your email address and save to /home/ubuntu/my_ssl_config. The format of this file is important and should follow the example below. The file contains only two lines specifying the domain and email used to configure the Let’s Encrypt process, e.g.:

```yaml
ssldomain: devmen.hopto.org
sslemail: developers@anthology.com
```

4. SSH to your EC2 instance and from the command line reboot the instance using the command:

```shell
$ sudo reboot now
```

**On reboot the server will generate your Let’s Encrypt SSL certificate, on future reboots or restarts the server will check whether the certificate requires renewal. If renewal is required reboot the server to renew the Let’s Encrypt certificate. If your certificate is past expiration, because you ignored the renewal notices, sudo mv the /etc/letsencrypt directory to your home directory for safe keeping and reboot.**

**Warning:** When you stop and start an existing EC2 instance, AWS resets the public domain name and IP - you must update your DNS entry to reflect the new IP.

**Warning:** Let’s Encrypt has a limit of 20 certificate requests on a domain per week. Repeated stop and starts of an AMI using the same domain may exceed the Let’s Encrypt request limit, requiring you to provide a new domain name. \*\*

**Warning:** Timing is important. If you attempt to access your EC2 before the Let's Encrypt cert installation is complete you will need to rebuild. If you are having issues, [watch this video walkthrough](https://youtu.be/eQu7Ii923DU) of settup and getting a Let's Encrypt certificate working.

#### What does the Learn REST and LTI Developer AMI cost?

The Open Innovation Initiative was created to lower the cost of entry for developing software solutions on the Learn platform. This is accomplished by removing the previous Partner program costs and replacing those partner program costs with low hourly AMI usage costs. This enables you the developer to control your costs for prototyping your applications and entering the education software market.

Use of the Developer AMI will result in two charges being made to your account:

1. An AWS Infrastructure charge
   This charge is based on the EC2 instance type selected to run the AMI and varies based on the instance type size and region. An example is $0.0464/hr for a t2.medium instance served from

2. Software charge
   A Software charge of $0.05/hr (US dollars) is added to the AWS infrastructure charge.

If you have any questions, feel free to ask in this space or email us at developers@anthology.com.

#### Log into the Learn Application on the AMI

The username is administrator. The password is the instance ID, e.g., i-234234234234. If you look at the log created when you spin it up it is also printed there. You can find the log from the EC2 console.

The first time you go to login, you will see text on the page like the following. NOTE: There is no way to upgrade an AMI. You will need to get the latest AMI, and transfer any necessary data, BEFORE the expiration date shown on the page you see.

Landing page seen the first time you login to the developer AMI

#### Configure Your AMI-based Learn Instance

When you set up your instance of Learn, you can configure different options. These options are discussed in Enable Learn Tool Interoperability (LTI) Links and Text.

##### Triage Your AMI-based Learn Instance

Note that not stopping your EC2 when you encounter an error will continue to incur EC2 charges and we do not issue refunds. Always stop your EC2 if you encounter an error or do not require a 24x7 development instance.

1. For General Learn System Administration you may visit: [Learn SaaS Deployments](https://help.blackboard.com/learn/Administrator/SaaS)
2. 504 Gateway Error
3. Visiting https:// displays a 504 error in your browser: 1. Shutdown the instance to stop accumulating charges and try again 2. Or reboot the instance:

   1. Ssh into the instance

   2. Issue this command:

   ```shell
   $ sudo reboot now
   ```

   3. Issue a reboot from the AWS console

The above restarts the instance and will typically correct the 504 error.

#### Migration Cookbook - Recreating Data between AMIs

Prior to the expiration of an AMI license (which is not upgradable) if you wish, you may migrate existing Learn data to your new subscription.

Currently, there is no formal migration/transfer tool to port Learn data between AMI (EC2) instances. However, there are several existing administrative tools that can be leveraged to capture the bulk of T&L (teaching/learning data) like courses, users, institutional roles, and enrollments, etc. from an existing (source) EC2 and reinstate/recreate the data onto a (new) EC2. The resources linked below will guide you through this data transfer process:

1. [Bb Learn EC2 Data Transfer.docx](/assets/files/Bb%20Learn%20EC2%20Data%20Transfer.docx): A Word doc outlining a comprehensive step-by-step overview of the migration/transfer process between a source and destination EC2.
2. [EC2 Migration SQL Scripts and Feed Files.zip](/assets/files/EC2%20Migration%20SQL%20Scripts%20and%20Feed%20Files.zip): A zip file containing all the SQL scripts (PostgreSQL format) and example feed files referenced in the Data Transfer overview document (above).

##### Notice - AVG on Windows Systems

While using the AVG antivirus product on a Windows system and attempting to create a course using Learn, AVG may manifest what we believe is a false positive dialog regarding CVE-2014-0286-A. This can occur while using any browser, though the error message is specific to now unsupported versions of Microsoft Internet Explorer 6 through 11. Our security team has indicated that this is an issue with the AVG software. See the AVG website for questions about configuring the AVG software, and for their contact information.
