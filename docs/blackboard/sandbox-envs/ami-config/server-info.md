---
title: SSL configuration
id: ami-server-info
author: Sebastian Silva
published: "2025-08-20"
edited: "2025-08-20"
sidebar_position: 2
---

Now that your server is running, we need to configure Blackboard Learn to accept connections through an encrypted connection. This version of Blackboard Learn uses Let's Encrypt certificates to provide SSL connections, the following are the steps required to configure your system

:::caution Default SSL certificate
The default SSL cert generated on first startup is _**not**_ a trusted certificate. Please follow the instructions below for full SSL support.
:::

## Setup

After starting your EC2 there are a few steps to installing and using Let’s Encrypt Certificates. After installing the certificate, management of the Let’s Encrypt SSL certificate is automatic.

1. Register the AWS provided EC2 public IP to your DNS as an A-record. The best practice as an introduction is to use a free DNS service such as https://no-ip.com* to provide the FQDN used for your Learn EC2.

:::info AWS IP for EC2
When you stop and start an existing EC2 instance, AWS resets the public domain name and IP - you must update your DNS entry to reflect the new IP.
:::

2. Use the EC2 Security controls to open HTTP as an inbound security rule - you should have HTTP, HTTPS, and SSH (from your console IP) enabled at this point.

3. SSH to your EC2 instance and create a file containing your FQDN from https://no-ip.com* and your email address and save on `/home/ubuntu/` with the name `my_ssl_config`. The format of this file is important and should follow the example below. The file contains only two lines specifying the domain and email used to configure the Let’s Encrypt process, e.g.:

```yaml title=my_ssl_config
ssldomain: devmen.hopto.org
sslemail: developers@anthology.com
```

4. Once the file is created, reboot the instance by executing the following command through the SSH session:

```shell
sudo reboot now
```

> \* Anthology Inc does not endorse or recommend specific DNS providers such as NoIp.com for usage. These are mentioned for their free options but any service can be used to map DNS entries

## Create the Let's Encrypt certificate

On reboot, the server will check for the `my_ssl_config` file and generate your Let’s Encrypt SSL certificate based on that information. On future reboots or restarts, the server will check whether the certificate requires renewal, if renewal is required reboot the server to renew the Let’s Encrypt certificate. If your certificate is past expiration, because you ignored the renewal notices, `sudo mv the /etc/letsencrypt` directory to your home directory for safe keeping and reboot.

:::warning Let's Encrypt rate limiting and validity
Let’s Encrypt has a limit of 20 certificate requests on a domain per week. Repeated stop and starts of an AMI using the same domain may exceed the Let’s Encrypt request limit, requiring you to provide a new domain name.

Let’s Encrypt certificates are valid for only 90 days. In order to update your Let’s Encrypt certificate you must perform a server reboot
:::
