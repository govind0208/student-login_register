// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCpkJDgNmOKg5SBeYaUnZrcb1TXYhRM4k",
  authDomain: "student-erp-5f842.firebaseapp.com",
  projectId: "student-erp-5f842",
  storageBucket: "student-erp-5f842.appspot.com",
  messagingSenderId: "419495296460",
  appId: "1:419495296460:web:3e022da19fa5540333f169",
  measurementId: "G-GQHST0W5RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };