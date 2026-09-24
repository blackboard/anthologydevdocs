---
title: Security API for B2 devs
id: b2-security
sidebar_position: 9
author: Dan Magers
published: '2026-09-24'
edited: '2026-09-24'
---
# Security API for Extended-Support B2 developers

:::danger
Blackboard no longer supports Building Blocks (B2s), this documentation is directed to those B2s that have been classified as extended-support. If you are planning on creating a new integration, make sure to use LTI 1.3, REST APIs, UEF or Caliper. 
:::

**Security is top of mind at Blackboard.**

Blackboard is vigilant about building security into our products and
providing prompt and carefully tested product updates.

Blackboard follows industry accepted security practices. Blackboard is
developed according to a set of security engineering guidelines. These
guidelines are derived from many organizations such as the Open Web
Application Security Project (OWASP), including specific countermeasures
for OWASP Top Ten vulnerabilities. Blackboard incorporates these
security practices in all phases of the software development lifecycle
(SDLC).

<span id="id_app_code"></span>

## Application code

The SaaS application code has been built with security in mind. The
Security Team has been involved in the full SDLC to ensure we build
security in from the very beginning, following our [Security Assurance
Program](https://www.anthology.com/trust-center/security). We have
adopted new technologies and taken advantage of their built-in security
features and best practices.

<span id="id_ensure"></span>

## Ensuring security

Blackboard uses several methods to protect our applications including
"top-down" security assessments through Threat Modeling and analysis. We
also use "bottom-up" code-level threat detection through static
analysis, dynamic analysis, and manual penetration testing.

Blackboard follows best practice guidance from many organizations to
help strengthen the security of Blackboard's product and program,
including:

- National Institute of Standards and Technology (NIST)

- European Network and Information Security Agency (ENISA)

- SANS Institute Open Web Application Security Project (OWASP)

- Cloud Security Alliance (CSA)

Security threats and countermeasures surrounding Learning Management
Systems are ever-changing. Thus, Blackboard regularly assesses its
Product Security Roadmap.

Blackboard built security into Blackboard from the beginning. The
following items present the security measures and practices Blackboard
put in place to secure the SaaS offering.

<span id="id_net_security"></span>

## Network security

<span id="id_secure_comm"></span>

### Secure communication

The Blackboard SaaS offering secures all communication over the Internet
with Transport Layer Security (TLS) technology. TLS ensures that a
communication is not read or changed by another entity. Blackboard uses
TLS to secure communications between the Web server and the client
machine; e.g., a browser.

The SaaS offering requires TLS system-wide by default. TLS terminates at
the Amazon Elastic Load Balancer (ELB). TLS certificates require
2048-bit encryption.

<span id="id_min_attack"></span>

### Minimum attack surface area

The Blackboard SaaS offering customer instances terminate TLS at the
Amazon Elastic Load Balancer (ELB). Thus, the only assets with inbound
access are the ELBs. The available ports are 80 (http) and 443 (https).
Access to port 80 causes a redirect to port 443, meaning secure
communication over TLS. All other ports are inaccessible externally, as
Blackboard enforces a default-deny firewall policy for the Blackboard
SaaS offering by leveraging the full power of AWS Security Groups.
Moreover, the Blackboard SaaS offering places all non-ELB infrastructure
in a private subnet, completely removed from the Internet.

<span id="id_access_mgmt"></span>

## Access management

<span id="id_customer"></span>

### Customer administrative access

Customers can access their Blackboard SaaS offering instances using only
the web interface over TLS. For security reasons, customers cannot
access their instances using command-line or back-end access.

<span id="id_admin_access"></span>

### Blackboard administrative access

<span id="id_app_access"></span>

#### Application access

Only authorized Blackboard staff may access the Blackboard SaaS offering
instances via the web interface over TLS.

<span id="id_backend"></span>

#### Back-end access

A limited set of staff would have command-line and back-end access
through the use of SSH keys. Access is only possible via SSH keys, a
more secure method of access versus username/passwords. Keys are managed
by a small group and can be revoked at any time.

<span id="id_console"></span>

#### Console access

Blackboard access to the Amazon Web Services web console requires
multi-factor authentication (MFA.)

<span id="id_recovery"></span>

### Disaster recovery

<span id="id_resiliency"></span>

#### Database resiliency and backups

The Blackboard SaaS offering uses the PostgreSQL as the database.
Blackboard's PostgreSQL database service provides enhanced availability
and durability such that in the event of a database failure, the service
would cut-over to an alternate availability zone. Our PostgreSQL
database service also takes nightly backups.

Encryption at rest is available and enabled by default for all new
Blackboard SaaS environments.

The Blackboard SaaS offering uses access control to protect the
database. Access to the database is not available externally and limited
to authorized Blackboard staff.

<span id="id_filesystem"></span>

#### File system resiliency and backups

The Blackboard SaaS offering uses Amazon Simple Storage Service (S3) for
backups of critical file system data. This data is backed up every 5
minutes. S3 offers "11 nines" of data durability.

<span id="id_audit"></span>

### Security auditing

Customers have access to the Blackboard application-level <a
href="#/document/preview/427697#UUID-a9377634-3b68-11bc-027f-b1b18d615563"
class="linktype-component linktextconsumer">logs through the
Administrator Panel</a>. Customers will be able to review security
logs.<span id="N6ab52fd95e871" class="linktextprovider">Logs</span>

The Blackboard SaaS offering leverages powerful AWS auditing tools,
including,
[S3](http://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html),
[CloudWatch](http://aws.amazon.com/cloudwatch/),
[CloudTrail](https://aws.amazon.com/cloudtrail/), and
[TrustedAdvisor](https://aws.amazon.com/premiumsupport/trustedadvisor/).

<span id="id_security_mind"></span>

### Built with security in mind, verified by a third party

Blackboard partnered with Amazon to ensure we built the Blackboard SaaS
offering on a sound foundation of AWS best-practices from the start.
Blackboard subsequently engaged a third party auditor to specifically
focus on the Blackboard SaaS AWS deployment. These two approaches taken
together ensure our highest confidence in the security of our SaaS
offering.

<span id="id_ddos"></span>

### DDoS countermeasures

Partnering with AWS for Blackboard SaaS offers many advantages of scale,
efficiency, and security. One clear advantage area presents itself when
leveraging the high availability infrastructure on which AWS is built.
For example, the Blackboard SaaS offering benefits from the DDoS
countermeasures provided natively by AWS.
