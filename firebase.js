// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAAEYthM7RIhqeg8sI4-Y1_AsxZ2Jq7ZnY",
    authDomain: "clone-yt-7b781.firebaseapp.com",
    projectId: "clone-yt-7b781",
    storageBucket: "clone-yt-7b781.firebasestorage.app",
    messagingSenderId: "815583709556",
    appId: "1:815583709556:web:34cd1f96fa0d84b4d44421",
    measurementId: "G-7VPTP23TDY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();