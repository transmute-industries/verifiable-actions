const fs = require("fs");
const cli = require("@transmute/cli");

const generate = async (inputs) => {
  let outputs = {};
  let { username, repository, mnemonic, hdPath, keyType } = inputs;
  const data = await cli.commands.did.createDocument({
    username,
    repository,
    mnemonic,
    hdpath: hdPath,
    type: keyType,
  });

  outputs = data;

  if (inputs.fileOutput) {
    fs.writeFileSync(inputs.fileOutput, JSON.stringify(outputs, null, 2));
  }

  return outputs;
};

module.exports = { generate };
