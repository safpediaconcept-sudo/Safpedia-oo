// ====================================================================
// SHARED FIREBASE CONFIGURATION
// Tech Wizards Academy - Central Firebase Instance
// ====================================================================

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSmbDLlOOv7SSpU7SJgb1whwbWQoWxffM",
  authDomain: "safpediaconcept-fc6f3.firebaseapp.com",
  projectId: "safpediaconcept-fc6f3",
  storageBucket: "safpediaconcept-fc6f3.firebasestorage.app",
  messagingSenderId: "499308401998",
  appId: "1:499308401998:web:7b0efec7cda39158c3fa1f",
  measurementId: "G-DXEE1V8PVZ"
};

// Initialize Firebase (only once)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { app, auth, db };