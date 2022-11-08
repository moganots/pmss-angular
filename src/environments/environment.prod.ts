export const environment = {
  production: true,
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
    useSignInWith: false
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
