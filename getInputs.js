const core = require("@actions/core");

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");
  const mnemonic = core.getInput("mnemonic");
  const hdPath = core.getInput("hd-path");
  const keyType = core.getInput("key-type");
  const vcFormat = core.getInput("vc-format");
  const fileInput = core.getInput("file-input");
  const fileOutput = core.getInput("file-output");
  return {
    resource,
    action,
    mnemonic,
    hdPath,
    keyType,
    vcFormat,
    fileInput,
    fileOutput,
  };
};

module.exports = { getInputs };
