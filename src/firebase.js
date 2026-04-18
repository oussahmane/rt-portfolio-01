import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAoguK2ED_iAKne2vrQZTQMVqKNm2zNKDg",
  authDomain: "td-portfolio-01.firebaseapp.com",
  projectId: "td-portfolio-01",
  storageBucket: "td-portfolio-01.firebasestorage.app",
  messagingSenderId: "985508358412",
  appId: "1:985508358412:web:99759f104c20c983de8129"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };
