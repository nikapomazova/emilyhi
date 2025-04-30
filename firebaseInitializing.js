import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  applyActionCode
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, addDoc, query, where, getDocs, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAQx2RwxCnb2FBfJI3uwqdXxd6Nc8cE60U",
    authDomain: "morsecode-2115b.firebaseapp.com",
    projectId: "morsecode-2115b",
    storageBucket: "morsecode-2115b.firebasestorage.app",
    messagingSenderId: "460224127225",
    appId: "1:460224127225:web:09c1d24c48b83351438228"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,
    applyActionCode,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    doc,
    setDoc,
    db,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    updateDoc,
    getDoc };