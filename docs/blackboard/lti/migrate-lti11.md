---
title: "Migrate from LTI 1.1 to LTI 1.3"
sidebar_position: 3
id: migrate-lti
published: "2026-07-11"
edited: "2026-07-11"
---

import ReactPlayer from 'react-player'

# Migrating from LTI 1.1 to LTI 1.3

## Overview

This guide is written for engineers and integration teams at LTI tool providers (Partners and Third party developers) who
already have an LTI 1.1 integration live with one or more shared Blackboard Learn clients. LTI 1.1
has been deprecated by 1EdTech, and Blackboard strongly recommends moving remaining LTI 1.1
integrations to LTI 1.3 / LTI Advantage. It covers what your tool needs to support on its own
side, and what to hand your client's Blackboard administrator so the two of you can execute the
migration together without breaking links instructors and students already depend on.

### What changes for your tool

- **Security model** — LTI 1.1 used OAuth 1.0a request signing. LTI 1.3 replaces this with OpenID
  Connect (OIDC) third-party login initiation and signed JSON Web Tokens (JWTs), so your
  launch-handling code needs an OIDC login endpoint in addition to your existing launch/redirect
  endpoint.
- **Message format** — the LTI payload moves from signed form-POST parameters to a JWT (the
  `id_token`) containing standard and LTI-specific claims.
- **Key management** — your tool is responsible for generating and rotating its own signing keys
  and exposing them at a public JWKS URL; Blackboard does not generate or manage these keys for
  you.
- **New optional services** — LTI Advantage adds Deep Linking, Names and Roles Provisioning, and
  Assignment and Grades Services. You don't have to implement all of them to migrate, but
  supporting Deep Linking and Assignment and Grades typically gives your client feature parity (or
  better) with what they had on 1.1.

## Developer Prerequisites

Before you offer migration to a client, make sure the following is true on your side:

- Your LTI 1.3 tool is registered and reachable at the **same fully qualified domain name (fqdn)**
  as your existing LTI 1.1 tool. Blackboard Learn does not allow an LTI 1.1 tool and an LTI 1.3
  tool to be registered on the same domain at the same time in a single Learn instance, and its
  automatic link-migration only triggers when the domains match — this is the single most
  important precondition for a clean migration.
- You host your own signing keys and a JWKS URL, and you've implemented the OIDC login initiation
  flow required by LTI 1.3 Core.
- Your launch route/handler can process the LTI 1.3 `id_token` JWT (validate signature, audience,
  nonce, and required claims).
- You've decided how your tool will treat the `target_link_uri` — Blackboard sets this
  automatically to match the original LTI 1.1 launch URL for each migrated placement or created link, so your 1.3
  endpoint needs to accept launches at the same paths your 1.1 tool used, or you need a
  redirect/mapping layer.
- You've tested end-to-end in the [1EdTech LTI Reference Implementation](https://lti-ri.imsglobal.org/)
  tool and/or a Blackboard developer sandbox before rolling this out to a live client.
- You have a clear answer for grade passback continuity: scores on submissions created before the
  migration may not pass back automatically once the client migrates, so decide whether your tool
  needs any backfill or manual-regrade support, and be ready to tell clients what to expect.

:::tip Key management note
LTI 1.3 tools must generate and manage their own signing
keys and JWKS URL — this is not something Blackboard provisions on your behalf, so it needs to be
built and stable before you register with any client.
:::

## What to Send Your Client (Blackboard Administrator Steps)

Once your tool is ready on the 1.3 side, the actual migration inside Blackboard Learn is performed
by the client's Blackboard LMS Administrator. The steps below are written so you can review them and adjust them
according to your needs before sending any information to the administrator.

### Step 1: Send the client your LTI 1.3 Application ID

Provide the Client ID for the LTI 1.3 / Advantage version of your tool (production, and a test instance if they have one). Confirm with them which
environment they're registering.

### Step 2: Have them open the LTI Tool Providers page

The admin logs in to Blackboard Learn as an Account Administrator and goes to:

- Administrator Panel → Integrations → LTI Tool Providers

### Step 3: Have them register the LTI 1.3 / Advantage tool

On the LTI Tool Providers page, they select **Register LTI 1.3/Advantage Tool** from the top
menu.

### Step 4: Have them enter the Client ID

They paste the Application ID you provided into the Client ID field, then select **Submit**.

### Step 5: They confirm the migration prompt

Because your LTI 1.1 tool is already registered on the same domain, Learn shows a confirmation
message asking whether to migrate the existing LTI 1.1 tool to LTI 1.3. They select **OK / Yes**
to proceed. This is the step that depends on your 1.3 tool sharing the same fqdn as your 1.1 tool
— if the domains don't match, this prompt won't appear and links will not auto-migrate.

### Step 6: They review the auto-populated Tool Status settings

Learn pre-fills the new tool's Tool Status page from the information you used to create the application in the
Developer Portal. Ask them to confirm these match your tool before continuing.

### Step 7: They set Tool Status and submit

They set Tool Status to **Approved** (or per their institution's policy) and select **Submit** to
complete the migration.

:::danger Rollbacks not available
Make sure to double check the tool's information and configuration before submitting the change. Once the tool is
migrated to LTI 1.3, there are no process to rollback the integration to LTI 1.1
:::

### Step 8: They confirm success

Blackboard shows a success message once complete. At this point the LTI 1.1 domain configuration
is removed and all existing links now point to your LTI 1.3 application, using `target_link_uri`
values inherited from the original LTI 1.1 placements.

### Step 9: They review placements

From the LTI Tool Providers page, they open **Manage Placements** for your tool and confirm each
placement (Label, Handle, Availability, and Target Link URI) carried over correctly.

### Step 10: They spot-check Target Link URIs

If your LTI 1.3 endpoints live at different paths than your old 1.1 launch URLs, tell the admin
which placements need a manually updated Target Link URI, and what value to enter.

:::danger Migration Issues
If during the migration of the tool to LTI 1.3 something doesn't work (tool no longer launches, doesn't load, shows errors, etc.)
**DO NOT INSTRUCT THE ADMINISTRATOR TO DELETE THE TOOL AND CREATE IT OR PREVENT THEM FROM DOING SO**. If the tool is deleted
at any point, any link created with the tool will break and manual re-creation will be needed.

In this scenario, please create a ticket through our Global Support portal for assistance.
:::

:::warning Tool recovery
If the original tool was deleted (either before migration or after the migration), links created with any of the placements
from that tool will be broken and can't be recovered. Manual re-creation of the items will be required after a new instance of the tool is installed.

**Our Support teams don't have any process established to recover this information due to the high risk of data corruption.**
:::

## Supporting the Client Through Migration

### Joint verification checklist

- Launch your tool from an existing course link/placement and confirm it opens without error.
- Create a new assignment or link using your tool and confirm the launch succeeds end-to-end,
  including OIDC login and JWT validation.
- Submit a test grade and confirm it passes back to the Grade Center correctly via Assignment and
  Grades Services (if applicable/supported).
- Confirm the old LTI 1.1 tool provider entry no longer appears as a separate, active registration
  for that domain.

### Recommendations to give your client

- Migrate during a low-usage window, not mid-semester or during an active grading period.
- Rehearse the migration on a test/staging Blackboard instance first if one is available.
- Confirm readiness before they click through the final confirmation or test on a Stage/Test environment
  before commiting to the migration. **Rollbacks are not possible when migrating**, if the migration was not
  properly completed, the associated links will break and will have to be manually re-created.

### Known caveats to flag proactively

- Grades on submissions that existed before the migration may not pass back automatically
  afterward; new submissions made post-migration should pass back normally if your application supports it. Tell clients whether
  your tool needs anything from them (e.g., a manual regrade) to reconcile older submissions.
- Because rollback is manual, avoid scheduling migrations for clients immediately before a known
  high-traffic period (e.g., start of term).

## Video steps of the migration

The following is a visual representation of the steps the administrators will have to follow to migrate the tool. You can use this video
for documentation reference if needed:

<ReactPlayer playback={false} controls url="https://www.youtube.com/watch?v=5bsBn1_UDUI"/>

## Reference Links

- [Blackboard/Anthology – Getting started with LTI](https://docs.anthology.com/docs/blackboard/lti/welcome)
- [Blackboard – Migrating from LTI 1.0/1.1 to 1.3](https://docs.blackboard.com/lti/migrating/migrating-11)
- [Blackboard – Processing the id_token JWT](https://docs.blackboard.com/lti/core/id-token)
- [Blackboard – Handling OIDC Login](https://docs.blackboard.com/lti/core/oidc-login)
- [Blackboard blog – LTI 1.3 tools must generate their own keys and JWKS URL](https://docs.blackboard.com/blog/2021/07/22/LTI-1.3-tools-must-generate-their-own-keys-and-JWKS-URL.html)
- [1EdTech LTI Advantage specifications](https://www.1edtech.org/standards/lti)
- [1EdTech LTI Reference Implementation (test tool)](https://lti-ri.imsglobal.org/)
