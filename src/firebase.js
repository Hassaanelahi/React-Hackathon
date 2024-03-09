// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR2UTT2UE92pTQYmCu-4LJYNlo2KOjN6g",
    authDomain: "react-hackathon-577e1.firebaseapp.com",
    projectId: "react-hackathon-577e1",
    storageBucket: "react-hackathon-577e1.appspot.com",
    messagingSenderId: "20091325521",
    appId: "1:20091325521:web:24cd5b0e0b5e2a7d833c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {
    auth,
    db
};