// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f11e9.firebaseapp.com",
  projectId: "mern-estate-f11e9",
  storageBucket: "mern-estate-f11e9.appspot.com",
  messagingSenderId: "295493740015",
  appId: "1:295493740015:web:019e6544c5e60193dbc21a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
