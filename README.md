## transmute-industries/verifiable-actions

[![Verifiable Actions](https://github.com/transmute-industries/verifiable-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/transmute-industries/verifiable-actions/actions/workflows/ci.yml)

Workflow tools for Decentralized Identifiers & Verifiable Credentials

🚧 Under construction. DO NOT USE IN PRODUCTION.

## Related Standards

### Standards

- [W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/)
- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/)
- [JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)
- [JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)
- [Bitcoin Improvement Protocol 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
- [Bitcoin Improvement Protocol 44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)

### Community Drafts

- [W3C CCG did:key method spec](https://github.com/w3c-ccg/did-method-key)
- [W3C CCG did:web method spec](https://github.com/w3c-ccg/did-method-web)
- [W3C CCG Verifiable Credentials API](https://github.com/w3c-ccg/vc-api)
- [W3C CCG Traceability Vocabulary](https://w3id.org/traceability)
- [W3C CCG Traceability Interoperability Profile](https://w3id.org/traceability/interoperability)

## Usage

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
        uses: transmute-industries/verifiable-actions@v0.0.6
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
        uses: transmute-industries/verifiable-actions@v0.0.6
        with:
          resource: "credential"
          action: "verify"
          vc-verify-endpoint: "https://api.did.actor/api/credentials/verify"
          file-input: "./test/data/verifiable-credential.json"
          file-output: "./test/data/verification.json"
```

## Powered By

### [@transmute/cli](https://github.com/transmute-industries/verifiable-data/tree/main/packages/cli)

<p align="center">
  <img src="./transmute-banner.png"/>
</p>
