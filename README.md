# transmute-industries/verifiable-actions

[![Verifiable Actions](https://github.com/transmute-industries/verifiable-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/transmute-industries/verifiable-actions/actions/workflows/ci.yml)

Workflow tools for Decentralized Identifiers & Verifiable Credentials

🚧 Under construction. DO NOT USE IN PRODUCTION.

### Issuing a Verifiable Credential

```yml
jobs:
  issue_credential:
    name: Issue Verifiable Credential
    runs-on: ubuntu-latest
    steps:
      - name: checking out repo
        uses: actions/checkout@v2
      - name: Issue a Verifiable Credential
        uses: transmute-industries/verifiable-actions@v0.0.5
        with:
          resource: "credential"
          action: "issue"
          verification-method: "did:key:z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn#z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn"
          # always use github secrets for this... treat it like a private key.
          mnemonic: "${{ secrets.MNEMONIC }}"
          file-input: "./test/data/credential.json"
          file-output: "./test/data/verifiable-credential.json"
```

### Verify a Verifiable Credential

```yml
jobs:
  verify_credential:
    name: Verify Verifiable Credential
    runs-on: ubuntu-latest
    steps:
      - name: checking out repo
        uses: actions/checkout@v2
      - name: Verify a Verifiable Credential
        uses: transmute-industries/verifiable-actions@v0.0.5
        with:
          resource: "credential"
          action: "verify"
          vc-verify-endpoint: "https://api.did.actor/api/credentials/verify"
          file-input: "./test/data/verifiable-credential.json"
          file-output: "./test/data/verification.json"
```
