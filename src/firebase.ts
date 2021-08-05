import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAI9oZUAb-vhuChRmt2dwlQ0aC9D-xqJ1c",
  authDomain: "disneyplusclone-c04df.firebaseapp.com",
  projectId: "disneyplusclone-c04df",
  storageBucket: "disneyplusclone-c04df.appspot.com",
  messagingSenderId: "742701103158",
  appId: "1:742701103158:web:e427263fa43a92fc384097",
  measurementId: "G-J0PJN9S0KS",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
