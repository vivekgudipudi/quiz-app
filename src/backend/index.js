import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgsDAEzqHH2XtVDDKORO6eStU0qtYszYU",
  authDomain: "quiz-app-f08dd.firebaseapp.com",
  projectId: "quiz-app-f08dd",
  storageBucket: "quiz-app-f08dd.appspot.com",
  messagingSenderId: "1065296823244",
  appId: "1:1065296823244:web:01a838324ae71ffcac5369",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
