const cli = require("@transmute/cli");
const fs = require("fs");

const create = async (inputs) => {
  let outputs = {};
  let { username, repository, mnemonic, hdPath, keyType } = inputs;
  const options = {
    username,
    repository,
    mnemonic,
    hdpath: hdPath,
    type: keyType,
    format: inputs.vcFormat,
    input: inputs.fileInput,
    output: inputs.fileOutput,
  };
  const key = await cli.commands.credential.getKey(options);
  const credential = await cli.util.getCredentialFromFile(options.input);
  const data = await cli.commands.credential.createPublicRegistryCredential(
    options,
    key,
    credential
  );
  fs.writeFileSync(
    options.output,
    JSON.stringify(typeof data === "string" ? { jwt: data } : data, null, 2)
  );
  outputs.data = data;
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
