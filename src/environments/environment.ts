// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const packageJson = require('../../package.json');
export const environment = {
  appName: 'STREAM',
  envName: 'DEV',
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAmW1FHU3IR_XPIVnHWtymJX7jHobyd7_k',
    authDomain: 'cloudtest-40a2c.firebaseapp.com',
    databaseURL: 'https://cloudtest-40a2c.firebaseio.com',
    projectId: 'cloudtest-40a2c',
    storageBucket: 'cloudtest-40a2c.appspot.com',
    messagingSenderId: '775543450109'
  },
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    material: packageJson.dependencies['@angular/material'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
