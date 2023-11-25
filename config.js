import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDTxcCZGG1zjDojhY4b-mvLHcNYdRrxLkc",
    authDomain: "attendence-app-32429.firebaseapp.com",
    projectId: "attendence-app-32429",
    storageBucket: "attendence-app-32429.appspot.com",
    messagingSenderId: "1075426018695",
    appId: "1:1075426018695:web:2343a6744a1d7b866d3f22",
    measurementId: "G-9WJ2N984J7"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);