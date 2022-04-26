// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1QbI5gbuGtXN_2PA9ysmLVX6EUIvXMxU",
  authDomain: "emajon-82af3.firebaseapp.com",
  projectId: "emajon-82af3",
  storageBucket: "emajon-82af3.appspot.com",
  messagingSenderId: "862363753570",
  appId: "1:862363753570:web:45bb27a84bae34e045c53b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
