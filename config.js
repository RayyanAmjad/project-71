import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDXtHw6f6gUOC1arWP5yeZMyGx-PS6eygI",
    authDomain: "e-ride-e05fe.firebaseapp.com",
    projectId: "e-ride-e05fe",
    storageBucket: "e-ride-e05fe.appspot.com",
    messagingSenderId: "146858718156",
    appId: "1:146858718156:web:d6806dd96006075f34e369"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
