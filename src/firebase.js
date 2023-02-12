// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//Traigo una funcion que me conecta con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjM04Ss2oQvKCBnNMfOEvlV-oKuMBJt0I",
  authDomain: "entregafinal-1c279.firebaseapp.com",
  projectId: "entregafinal-1c279",
  storageBucket: "entregafinal-1c279.appspot.com",
  messagingSenderId: "219094870898",
  appId: "1:219094870898:web:3e4f75d55b550aa8a40beb"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Esta es una variable que representa "la pestaña Firestore Database o la base de datos"
export const db = getFirestore(app);