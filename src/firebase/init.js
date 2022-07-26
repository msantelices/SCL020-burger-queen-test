import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {
  app,
  db,
  auth,
  createUserWithEmailAndPassword,
  addDoc,
  collection,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
