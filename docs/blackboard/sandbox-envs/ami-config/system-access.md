---
title: UI access and licensing information
id: server-access
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 3
---

Now that you have your EC2 instance configured and ready for traffic, you can access the User Interface and start developing. To get the administrator user information, please follow the steps below

## Access to the web interface

:::tip Startup time

The startup time for your EC2 will vary and may take as long as 15 minutes before you may access the site via your browser. SSH access may be available in 3 minutes or less.

:::

On initial startup, the Ultra Base Navigation will be show (Gray screen with the Blackboard logo and the form fields to log in). The login information for the administrator account is the following:

- Username: administrator
- Password: [[AWS Instance ID]] - e.g: i-234234234234

If you can't find your AWS' instance ID, you can get the access credentials from the startup log within the EC2 server. To do so, follow these steps:

1. Access to your AWS account
2. Navigate to EC2
3. Locate the EC2 server you created and click the checkbox next to it
4. Click "Connect" at the top right
5. Select SSH and click "Connect"
6. Once connected, navigate to the home directory of the server user by executing this command

```shell
cd /home/ubuntu
```

7. Paste the following command on the terminal and hit Enter

```shell
cat start.log | grep "Password"
```

The output of this command will give you the password of the administrator account

## Developer license and expiration dates

Our server images have a limited license that allows you to use the system for a period of 90 days, after this period, the system will lock itself due to an invalid license.

To find the expiration date of the installed license, you can follow one of the following three approaches

### Using the EC2 Console

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

### Using `tail` in a terminal

Ssh to your instance by following the steps outlined in above (in the "Access to the web interface" section), and execute the following command

```shell
tail -14 start.log
```

The output should look something similar to this

```shell
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

### Using `grep` in a terminal

Ssh to your instance by following the steps outlined in above (in the "Access to the web interface" section), and execute the following command

```shell
grep "CHECK LICENSE:" start.log
```

The output should look something similar to this

```shell
Tue Sep 12 08:34:37 EDT 2023: CHECK LICENSE: License is current
Tue Sep 12 08:34:37 EDT 2023: CHECK LICENSE: License expires on 2024-01-14 17:18:36 GMT
```

:::warning AMI licenses
Please note that AMI Blackboard licenses are not upgradable. You must download a newer release and migrate any content or tools prior to license expiration. For more information, please review the Migration Cookbook - Recreating Data between AMIs in the FAQ section.

:::

## What now?

From here on out, you're ready to start developing within Blackboard Learn. You will have full administrator access to the server through the web interface, which will allow you to configure the system to your liking and allow you to install new applications for REST API, LTI and/or Ultra Extension Framework (UEF)

You can find additional information about our integration methods here:

- REST API: [About Anthology REST APIs](/docs/blackboard/rest-apis/apis-intro.md)
- LTI: [Getting started with LTI](/docs/blackboard/lti/welcome)
- Ultra Extension Framework (UEF) [What is UEF](/docs/blackboard/uef/01-getting-started.md)
