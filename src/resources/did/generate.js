const cli = require("@transmute/cli");

const generate = async (inputs) => {
  let outputs = {};
  let { username, repository, mnemonic, hdPath, keyType } = inputs;
  await cli.commands.did.createDocumentHandler({
    username,
    repository,
    mnemonic,
    hdpath: hdPath,
    type: keyType,
    output: inputs.fileOutput,
  });
  return outputs;
};

module.exports = { generate };
