// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE,
  authDomain: "community-project-3b0e2.firebaseapp.com",
  projectId: "community-project-3b0e2",
  storageBucket: "community-project-3b0e2.appspot.com",
  messagingSenderId: "112058210111",
  appId: "1:112058210111:web:60e0a7ea30651d0611658a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
