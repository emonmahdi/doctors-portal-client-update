// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}; */
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1RIFYkl3uqv9y8Lczlyn81c_bssorRWE",
    authDomain: "doctors-portal-8c158.firebaseapp.com",
    projectId: "doctors-portal-8c158",
    storageBucket: "doctors-portal-8c158.appspot.com",
    messagingSenderId: "159868312613",
    appId: "1:159868312613:web:1fba089f5ddfd1ac2eb3cc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;