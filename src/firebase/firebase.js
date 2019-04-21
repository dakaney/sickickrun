import * as firebase from "firebase";
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId } from "./dev";

const config = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId
};

firebase.initializeApp(config);

const database = firebase.firestore();

export { firebase, database };
