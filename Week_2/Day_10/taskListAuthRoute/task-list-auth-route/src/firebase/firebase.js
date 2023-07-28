// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzQa1diHEgi6AFrkfhGO4CDUXdw-LBG0",
  authDomain: "task-list-day9.firebaseapp.com",
  projectId: "task-list-day9",
  storageBucket: "task-list-day9.appspot.com",
  messagingSenderId: "41772928115",
  appId: "1:41772928115:web:f9b81dc6e32e42a8926e06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
