// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNoerhzqpqWEDIN5zE5UmoBqU_mZUBxqc",
    authDomain: "gaming-bib.firebaseapp.com",
    projectId: "gaming-bib",
    storageBucket: "gaming-bib.appspot.com",
    messagingSenderId: "59905086508",
    appId: "1:59905086508:web:4ce2aad6abc1a113e32d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Auth
const auth = getAuth(app);

export { db, auth };