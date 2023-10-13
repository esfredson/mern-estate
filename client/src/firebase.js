// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-22599.firebaseapp.com",
  projectId: "mern-estate-22599",
  storageBucket: "mern-estate-22599.appspot.com",
  messagingSenderId: "31781969909",
  appId: "1:31781969909:web:4d1e77c8ff75b6a8d04abc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
