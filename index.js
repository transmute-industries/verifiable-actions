const core = require("@actions/core");
// const github = require("@actions/github");

const fs = require("fs");
const { getInputs } = require("./getInputs");
try {
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);

  const inputs = getInputs();

  console.log({ inputs });

  if (inputs.fileInput) {
    const file = fs.readFileSync(inputs.fileInput);
    const parsedInput = JSON.parse(file.toString());
    inputs.fileInputContent = parsedInput;
  }

  if (inputs.fileOutput) {
    fs.writeFileSync(inputs.fileOutput, JSON.stringify(inputs));
  }

  core.setOutput("response", inputs);
} catch (error) {
  core.setFailed(error.message);
}
