// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7CRIk-9wScthI_ZavfMFAxMVA96tfAQ0",
  authDomain: "tide-869b6.firebaseapp.com",
  projectId: "tide-869b6",
  storageBucket: "tide-869b6.firebasestorage.app",
  messagingSenderId: "419969049379",
  appId: "1:419969049379:web:bae309d4edd6ebb8ffe296",
  measurementId: "G-MYSL8MK735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
