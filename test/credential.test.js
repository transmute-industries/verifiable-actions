const action = require("../src");

it("can issue", async () => {
  const input = {
    resource: "credential",
    action: "issue",
    mnemonic:
      "sell antenna drama rule twenty cement mad deliver you push derive hybrid",
    hdPath: "m/44'/0'/0'/0/0",
    keyType: "ed25519",
    vcFormat: "vc",
    fileInput: "./test/data/credential.json",
    fileOutput: "./test/data/verifiable-credential.json",
  };
  const output = await action.resources[input.resource][input.action](input);
  expect(output).toBeDefined();
});

it("can verify", async () => {
  const input = {
    resource: "credential",
    action: "verify",
    vcVerifyEndpoint: "https://api.did.actor/api/credentials/verify",
    fileInput: "./test/data/verifiable-credential.json",
    fileOutput: "./test/data/verification.json",
  };
  const output = await action.resources[input.resource][input.action](input);
  expect(output.verified).toBe(true);
});
