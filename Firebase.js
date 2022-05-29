// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3-e8RVz40F3NlH6cSqTPY-bplEY2uKmw",
  authDomain: "teamup-39128.firebaseapp.com",
  projectId: "teamup-39128",
  storageBucket: "teamup-39128.appspot.com",
  messagingSenderId: "1023123226558",
  appId: "1:1023123226558:web:8ea41e43725ac687f4c3ef",
  measurementId: "G-JDQ7D4YFHW"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
export { auth };