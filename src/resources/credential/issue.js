const fs = require("fs");
const cli = require("@transmute/cli");

const issue = async (inputs) => {
  let outputs = {};

  if (inputs.fileInput) {
    const file = fs.readFileSync(inputs.fileInput);
    const parsedInput = JSON.parse(file.toString());
    inputs.fileInputContent = parsedInput;
  }

  const { keyType, mnemonic, hdPath } = inputs;

  const [key] = await cli.commands.key.derive.deriveKey(
    keyType,
    mnemonic,
    hdPath
  );

  const credential = inputs.fileInputContent;
  const format = inputs.vcFormat;

  if (credential.issuer.id) {
    credential.issuer.id = key.controller;
  } else {
    credential.issuer = key.controller;
  }

  const verifiableCredential = await cli.commands.credential.createCredential(
    credential,
    key,
    format
  );

  outputs = verifiableCredential;

  if (inputs.fileOutput) {
    fs.writeFileSync(inputs.fileOutput, JSON.stringify(outputs, null, 2));
  }

  return outputs;
};

module.exports = { issue };
