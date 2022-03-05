const core = require("@actions/core");

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");
  const mnemonic = core.getInput("mnemonic");
  const hdPath = core.getInput("hd-path");
  const keyType = core.getInput("key-type");

  const fileInput = core.getInput("file-input");
  const fileOutput = core.getInput("file-output");

  // vc params
  const verificationMethod = core.getInput("verification-method");
  const vcFormat = core.getInput("vc-format");
  const vcVerifyEndpoint = core.getInput("vc-verify-endpoint");

  return {
    resource,
    action,
    mnemonic,
    hdPath,
    keyType,
    fileInput,
    fileOutput,

    // vc params
    verificationMethod,
    vcFormat,
    vcVerifyEndpoint,
  };
};

module.exports = { getInputs };
