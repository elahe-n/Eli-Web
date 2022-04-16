import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARCAhKhHnqknHSPKWgSELEV2UkgZY7pJI",
  authDomain: "portfolio-e30cb.firebaseapp.com",
  projectId: "portfolio-e30cb",
  storageBucket: "portfolio-e30cb.appspot.com",
  messagingSenderId: "722652053449",
  appId: "1:722652053449:web:289efe7616b5cd9acb3218"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()