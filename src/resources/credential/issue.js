const fs = require("fs");
const cli = require("@transmute/cli");

const issue = async (inputs) => {
  let outputs = {};

  if (inputs.fileInput) {
    const file = fs.readFileSync(inputs.fileInput);
    const parsedInput = JSON.parse(file.toString());
    inputs.fileInputContent = parsedInput;
  }

  let { mnemonic, hdPath, keyType, vcFormat, verificationMethod } = inputs;

  keyType = keyType || "ed25519";
  hdPath = hdPath || `m/44'/0'/0'/0/0`;
  vcFormat = vcFormat || "vc";

  const [key] = await cli.commands.key.derive.deriveKey(
    keyType,
    mnemonic,
    hdPath
  );

  verificationMethod = verificationMethod || key.id;

  key.id = verificationMethod;
  key.controller = verificationMethod.split("#")[0];

  const credential = inputs.fileInputContent;

  if (credential.issuer.id) {
    credential.issuer.id = key.controller;
  } else {
    credential.issuer = key.controller;
  }

  const verifiableCredential = await cli.commands.credential.createCredential(
    credential,
    key,
    vcFormat
  );

  outputs = verifiableCredential;

  if (inputs.fileOutput) {
    fs.writeFileSync(inputs.fileOutput, JSON.stringify(outputs, null, 2));
  }

  return outputs;
};

module.exports = { issue };
