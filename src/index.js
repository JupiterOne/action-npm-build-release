const core = require('@actions/core');
const { stringify } = require('querystring');
const npm_auth_token = core.getInput('npm_auth_token', { required: true });
const gh_token = core.getInput('gh_token', { required: true });

const main = async () => {

  const execSync = require('child_process').execSync;
  
  try {
    console.log(`Checking git log`)
    const gitoutput = execSync('git log -1',
      {stdio: 'inherit'})
    console.log(`gitoutput: ${gitoutput}`)
    execSync('yarn global add auto',
      {stdio: 'inherit'})
    execSync('yarn install --frozen-lockfile',
      {stdio: 'inherit'})
    execSync('yarn build',
      {stdio: 'inherit'})
    execSync('git config user.email "internal-automation.bot@jupiterone.com"',
      {stdio: 'inherit'})
    execSync('git config user.email "internal-automation.bot@jupiterone.com"',
      {stdio: 'inherit'})
    execSync('git config user.name "j1-internal-automation"',
      {stdio: 'inherit'})
    execSync('git config --global commit.verbose true',
      {stdio: 'inherit'})
    execSync('git fetch --tags',
      {stdio: 'inherit'})
    execSync(`echo "//registry.npmjs.org/:_authToken=${npm_auth_token}" > .npmrc`,
      {stdio: 'inherit'})
    execSync(`NPM_TOKEN=${npm_auth_token} GH_TOKEN=${gh_token} auto shipit --email internal-automation.bot@jupiterone.com --name j1-internal-automation`,
      {stdio: 'inherit'})
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

main();
