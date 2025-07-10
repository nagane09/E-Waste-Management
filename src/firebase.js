import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-2rdVjN9JOOiLUf2J2GWq1zne_85Uq9M",
  authDomain: "e-waste-management-76e27.firebaseapp.com",
  projectId: "e-waste-management-76e27",
  storageBucket: "e-waste-management-76e27.firebasestorage.app",
  messagingSenderId: "1045766439158",
  appId: "1:1045766439158:web:bfa987896b39b7dc2c6cd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Declare db once

// Export everything correctly
export { db, collection, addDoc, query, orderBy, onSnapshot };
