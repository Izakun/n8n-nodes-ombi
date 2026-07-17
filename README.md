# n8n-nodes-ombi

[![npm version](https://img.shields.io/npm/v/n8n-nodes-ombi.svg)](https://www.npmjs.com/package/n8n-nodes-ombi)

n8n community node for [Ombi](https://ombi.io/) — the media request manager — via its API.

Install via **Settings -> Community Nodes -> Install** -> `n8n-nodes-ombi`.

## Operations
- Get Status, Get Movie/TV Requests

## Credentials
Configure the base URL and authentication in the **Ombi API** credential.

## Usage example

Check server status:

1. Add the node after a trigger (e.g. *When clicking 'Test workflow'*).
2. Select your credential.
3. **Get Status**.
4. Execute the node — example output:

```json
{ "version": "4.44.1", "newVersion": null }
```

## Disclaimer
Not affiliated with or endorsed by the respective project.
