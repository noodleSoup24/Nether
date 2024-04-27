// Import js modules
import "./ui";
import "./vanilla-tilt";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9OjLHHNbfOmiAQ0nOV_Qn95TU7u8mw10",
  authDomain: "nether-community.firebaseapp.com",
  projectId: "nether-community",
  storageBucket: "nether-community.appspot.com",
  messagingSenderId: "232943850894",
  appId: "1:232943850894:web:e62eff5759a8e999b040df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const uid = user.uid;
    console.log("User is already signed in with UID:", uid);
  } else {
    // No user is signed in, sign in anonymously
    signInAnonymously(auth)
      .then(() => {
        console.log("Signed in anonymously");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in anonymously:", errorCode, errorMessage);
      });
  }
});
