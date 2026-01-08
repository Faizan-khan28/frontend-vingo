// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY, 
  authDomain: "vigno-food-delivary.firebaseapp.com",
  projectId: "vigno-food-delivary",
  storageBucket: "vigno-food-delivary.firebasestorage.app",
  messagingSenderId: "63502565238",
  appId: "1:63502565238:web:42be8aee4413ddf4bc0457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app)
export {app,auth}