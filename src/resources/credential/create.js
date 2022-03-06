const cli = require("@transmute/cli");
const create = async (inputs) => {
  let outputs = {};
  let { username, repository, mnemonic, hdPath, keyType } = inputs;
  const options = {
    username,
    repository,
    mnemonic,
    hdpath: hdPath,
    type: keyType,
    input: inputs.fileInput,
    output: inputs.fileOutput,
  };
  await cli.commands.credential.createCredentialHandler(options);
  await cli.commands.credential.registryIndexRefreshHandler({
    input: inputs.fileOutput, // because we are reusing the argument from the command above
  });
  return outputs;
};

module.exports = { create };
