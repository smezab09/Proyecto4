// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.DB_PASSWORD,
  authDomain: "proyecto-react-b7001.firebaseapp.com",
  projectId: "proyecto-react-b7001",
  storageBucket: "proyecto-react-b7001.appspot.com",
  messagingSenderId: "72059108087",
  appId: "1:72059108087:web:3d0217662e26e0ccec31f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
