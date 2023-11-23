// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJgXJJvoed8rWV4BZbLZbg17crTDhaSs0",
  authDomain: "coderhousereact-cavero.firebaseapp.com",
  projectId: "coderhousereact-cavero",
  storageBucket: "coderhousereact-cavero.appspot.com",
  messagingSenderId: "976736232628",
  appId: "1:976736232628:web:77b19606864d47a4b4a3e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)