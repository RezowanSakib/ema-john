// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5wKJ4CcxOzkAnYNCxog9Gygp1zcqA98M",
  authDomain: "ema-john-204a0.firebaseapp.com",
  projectId: "ema-john-204a0",
  storageBucket: "ema-john-204a0.appspot.com",
  messagingSenderId: "905940704252",
  appId: "1:905940704252:web:7ba5450a30178d6ed9b079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
