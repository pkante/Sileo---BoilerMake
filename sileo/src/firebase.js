import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBV90YAgun9BHC9U1P8QkQCB4mE_bho8ww",
  authDomain: "sileo-8cf36.firebaseapp.com",
  projectId: "sileo-8cf36",
  storageBucket: "sileo-8cf36.appspot.com",
  messagingSenderId: "231523646096",
  appId: "1:231523646096:web:1fccf338a65650d2ba3615",
  measurementId: "G-X4C6J6BJX1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

const analytics = getAnalytics(app);
