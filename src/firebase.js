// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDecL8VPRRZ3qrfXQDQJZucEm2wV9_T3eo",
  authDomain: "blogapp-73822.firebaseapp.com",
  projectId: "blogapp-73822",
  storageBucket: "blogapp-73822.appspot.com",
  messagingSenderId: "267814894709",
  appId: "1:267814894709:web:65aebf4c489255f9b04c3c",
  measurementId: "G-91XMB97PCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app); // db değişkenini doğru şekilde dışa aktar

const analytics = getAnalytics(app);
