// // src/firebase.ts
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY_HERE", // ✅ Replace with your real Firebase API key
//   authDomain: "YOUR_AUTH_DOMAIN_HERE",
//   projectId: "YOUR_PROJECT_ID_HERE",
//   storageBucket: "YOUR_STORAGE_BUCKET_HERE",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
//   appId: "YOUR_APP_ID_HERE",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app); // Make sure you include this for Firestore


// src/firebase.ts





// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "YOUR_REAL_API_KEY_HERE", // ← Replace with your Firebase API key
//   authDomain: "your-project-id.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project-id.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export Firebase Auth and Firestore
// export const auth = getAuth(app);
// export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJFKp2bX3fVUk2rpIysrPywX6wS1og_sY",
  authDomain: "aussietravelexplorer.firebaseapp.com",
  projectId: "aussietravelexplorer",
  storageBucket: "aussietravelexplorer.firebasestorage.app",
  messagingSenderId: "720518148501",
  appId: "1:720518148501:web:6007622245614fd971869c",
  measurementId: "G-T8J8YRX37Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
// Export Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
