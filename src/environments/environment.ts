// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyD-XFqaRjOhyTMVRY0RYbcLshMFPDyoyCM",
    authDomain: "followers-app3.firebaseapp.com",
    databaseURL: "https://followers-app3.firebaseio.com",
    projectId: "followers-app3",
    storageBucket: "followers-app3.appspot.com",
    messagingSenderId: "770727298924"
  }
};
