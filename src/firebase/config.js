import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: "chillax-908be.firebaseapp.com",
  projectId: "chillax-908be",
  storageBucket: "chillax-908be.appspot.com",
  messagingSenderId: "581670188966",
  appId: "1:581670188966:web:d03b509a8ea92a21b60167",
  measurementId: "G-BY1PD6G7PE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
