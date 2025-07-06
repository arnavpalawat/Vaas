// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0_6IYryl4y4Spl0pKhUYtA-WLJruENKA",
    authDomain: "vaasai.firebaseapp.com",
    projectId: "vaasai",
    storageBucket: "vaasai.firebasestorage.app",
    messagingSenderId: "244525985280",
    appId: "1:244525985280:web:be364a2904e3c9d2c6f2e5",
    measurementId: "G-T00FFR899C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);