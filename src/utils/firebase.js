// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDixc-n17n2aq_RT70XcsGmnE2VsWyL4xA",
  authDomain: "netflixgpt-ca469.firebaseapp.com",
  projectId: "netflixgpt-ca469",
  storageBucket: "netflixgpt-ca469.firebasestorage.app",
  messagingSenderId: "833326810993",
  appId: "1:833326810993:web:10908ed1c9374b9a1cd8d0",
  measurementId: "G-ZQQ2VV0WVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();