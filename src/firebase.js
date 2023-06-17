import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3L9gujcu-h3y0CdOfORF_iqg_rmx8TI",
  authDomain: "srm-1ff4b.firebaseapp.com",
  projectId: "srm-1ff4b",
  storageBucket: "srm-1ff4b.appspot.com",
  messagingSenderId: "1006132878295",
  appId: "1:1006132878295:web:685e4089a7800056054992",
  measurementId: "G-147FVLEY29"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};