import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  
    apiKey: "AIzaSyBXth8FLkERBoSGJ9_F7WFB7wKSWUCgoQ8",
    authDomain: "castmap-firebase.firebaseapp.com",
    projectId: "castmap-firebase",
    storageBucket: "castmap-firebase.appspot.com",
    messagingSenderId: "419648283723",
    appId: "1:419648283723:web:eabf3a527c27daf3e999ce"
    };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);