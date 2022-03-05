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
    fileInput: "./test/data/input.json",
    fileOutput: "./test/data/output.json",
  };
  const output = await action.resources[input.resource][input.action](input);
  expect(output.verifiableCredential).toBeDefined();
});
