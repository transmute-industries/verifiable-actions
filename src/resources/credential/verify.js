const fs = require("fs");
const cli = require("@transmute/cli");

const verify = async (inputs) => {
  let outputs = {};

  if (inputs.fileInput) {
    const file = fs.readFileSync(inputs.fileInput);
    const parsedInput = JSON.parse(file.toString());
    inputs.fileInputContent = parsedInput;
  }

  const verifiableCredential = inputs.fileInputContent;
  const verifyEndpoint = inputs.vcVerifyEndpoint;

  const verification = await cli.commands.credential.verifyCredential(
    verifiableCredential,
    verifyEndpoint
  );

  outputs = verification;

  if (inputs.fileOutput) {
    fs.writeFileSync(inputs.fileOutput, JSON.stringify(outputs, null, 2));
  }

  return outputs;
};

module.exports = { verify };
