// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvxdAXXnhtjPL_la-9hZOka3oEL0yRenY",
  authDomain: "netflix-gpt-d5874.firebaseapp.com",
  projectId: "netflix-gpt-d5874",
  storageBucket: "netflix-gpt-d5874.appspot.com",
  messagingSenderId: "573255864014",
  appId: "1:573255864014:web:3d80ac199c88f708ce0a9f",
  measurementId: "G-2826NNCD7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();