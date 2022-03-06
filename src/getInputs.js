const core = require("@actions/core");

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");

  const username = core.getInput("username");
  const repository = core.getInput("repository");

  const mnemonic = core.getInput("mnemonic");
  const hdPath = core.getInput("hd-path");
  const keyType = core.getInput("key-type");

  const fileInput = core.getInput("file-input");
  const fileOutput = core.getInput("file-output");

  const vcVerifyEndpoint = core.getInput("vc-verify-endpoint");

  return {
    resource,
    action,

    username,
    repository,

    mnemonic,
    hdPath,
    keyType,

    fileInput,
    fileOutput,

    vcVerifyEndpoint,
  };
};

module.exports = { getInputs };
