// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPIyighMf0sSYrEzvWwJpJYkWae3LpY-0",
  authDomain: "book-library-day10.firebaseapp.com",
  projectId: "book-library-day10",
  storageBucket: "book-library-day10.appspot.com",
  messagingSenderId: "717705868946",
  appId: "1:717705868946:web:430106689f4739b33f184b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
