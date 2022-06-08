const core = require('@actions/core');
const github = require('@actions/github');


const main = async () => {
  try {

    //Get current version
    const { exec } = require("child_process");

    exec("yarn version --patch", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`yarn version: ${stdout}`);
    });
    //bump

    //Push new version

    
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

main();