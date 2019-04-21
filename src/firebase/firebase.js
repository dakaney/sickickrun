import * as firebase from "firebase";
import env from "./dev";

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId
};

firebase.initializeApp(config);

const database = firebase.firestore();

export { firebase, database };
