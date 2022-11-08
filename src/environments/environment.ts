// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  company: {
    name: 'IDAS',
    website: 'http://www.izingcweti.co.za/'
  },
  developedBy: {
    name: 'SK Innovations',
    website: 'http://www.skinnovations.co.za/'
  },
  application: {
    name: 'Performance Management Service System',
    shortName: 'PMSS',
    srcIcon: './assets/img/brand/pmss.png',
    encryption: {
      key: ``,
      saltCount: 10
    },
    api: {
      protocol: `http`,
      host: `localhost`,
      port: 7678,
      relativePath: `api`,
      baseUrl: 'http://localhost:7678/api/'
    },
    useSignInWith: false,
    useSignUpWith: false
  },
  localStorage: {
    user: 'ls-current-pmss-user'
  },
  firebase: {
    apiKey: "AIzaSyCNbu4-9azZcVs9LvuMXtn-2j4bxatTKZ8",
    authDomain: "app-genio-angular-test-fb.firebaseapp.com",
    projectId: "app-genio-angular-test-fb",
    storageBucket: "app-genio-angular-test-fb.appspot.com",
    messagingSenderId: "790744709450",
    appId: "1:790744709450:web:9fda50894ae1021ca829b3",
    measurementId: "G-Q5QVCRPDNH"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
