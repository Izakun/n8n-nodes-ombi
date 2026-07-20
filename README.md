<img src="nodes/Ombi/ombi.svg" width="90" align="right" alt="Ombi" />

# n8n-nodes-ombi

[![npm version](https://img.shields.io/npm/v/n8n-nodes-ombi.svg)](https://www.npmjs.com/package/n8n-nodes-ombi)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-ombi.svg)](https://www.npmjs.com/package/n8n-nodes-ombi)
[![License: MIT](https://img.shields.io/npm/l/n8n-nodes-ombi.svg)](./LICENSE)
[![n8n verified](https://img.shields.io/badge/n8n-verified%20community%20node-EA4B71)](https://docs.n8n.io/integrations/community-nodes/installation/verified-install/)

Community node for **n8n** to interact with **Ombi**. It lets you automate
Ombi directly from your n8n workflows using a secure stored credential.

> ✅ **Verified community node** — installable directly from the n8n node panel
> (self-hosted **and** n8n Cloud).

## Installation

This is a **verified** community node: in n8n click **+ (Add node)**, search for
**Ombi**, and add it — no manual install needed.

<details>
<summary>Manual install (older n8n, or as an unverified package)</summary>

Go to **Settings → Community Nodes → Install** and enter `n8n-nodes-ombi`.
</details>

## Operations

| Operation | Description |
|---|---|
| **Get Movie Requests** | Get many movie requests |
| **Get Status** | Get the server status |
| **Get TV Requests** | Get many TV requests |

## Authentication

This node uses the **Ombi API** credential. In n8n, go to **Credentials → New**, pick
**Ombi API**, and fill in:

- **Base URL** — the address of your instance, e.g. `http://ombi:3579` (no trailing slash).
- **API Key** — your service API key.

Your credential is sent as the `ApiKey` request header.

**Where to find it:** See the service documentation: https://docs.ombi.app/

The credential's **Test** button verifies the connection before you save.

## Usage

1. Add the **Ombi** node to a workflow (after a trigger such as *When clicking 'Test workflow'* or a Schedule Trigger).
2. Select your **Ombi API** credential.
3. Pick an **Operation** and run the workflow — the response is returned as JSON for the next node.

## Compatibility

Requires n8n **1.0** or newer. Built and linted with the official `@n8n/node-cli`, and
published to npm with a build-provenance attestation.

## Resources

- [Ombi](https://docs.ombi.app/)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](./LICENSE)
