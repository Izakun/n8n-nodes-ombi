<img src="nodes/Ombi/ombi.svg" width="90" align="right" alt="Ombi" />

# n8n-nodes-ombi

[![npm version](https://img.shields.io/npm/v/n8n-nodes-ombi.svg)](https://www.npmjs.com/package/n8n-nodes-ombi)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-ombi.svg)](https://www.npmjs.com/package/n8n-nodes-ombi)
[![License: MIT](https://img.shields.io/npm/l/n8n-nodes-ombi.svg)](./LICENSE)

Community node for **n8n** to interact with **Ombi**. It lets you automate
Ombi directly from your n8n workflows using a secure stored credential.

> 🟡 **Community node** — submitted to n8n for verification (review in progress).
> Until it is approved, install it as a community node (below).

## Installation

In n8n, go to **Settings → Community Nodes → Install** and enter `n8n-nodes-ombi`.
Once it passes n8n's verification it will also be available directly from the **+ (Add node)** panel.

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
