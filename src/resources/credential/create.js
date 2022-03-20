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
  // because we are reusing the argument from the command above
  // we assume a registry index is located next to registry credentials
  // due to assuming that the registry will be hosted in github
  const registryPathParts = inputs.fileOutput.split("/");
  const registryPath = registryPathParts
    .slice(0, registryPathParts.length - 1)
    .join("/");
  await cli.commands.credential.registryIndexRefreshHandler({
    input: registryPath,
  });
  return outputs;
};

module.exports = { create };
