import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBaPkF3K9yZKdsn0d9m9yPOYm77J2g47ko",
    authDomain: "proyecto-tweets-438a4.firebaseapp.com",
    projectId: "proyecto-tweets-438a4",
    storageBucket: "proyecto-tweets-438a4.appspot.com",
    messagingSenderId: "823477343148",
    appId: "1:823477343148:web:0326556b5054d96c4ba009",
    measurementId: "G-V49PM8PH7S"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
//el modulo de autenticacion 
export const auth = firebase.auth();
//el proveedor de autenticación
export const provider = new firebase.auth.GoogleAuthProvider();
//la utilidad para hacer login con el pop-pup
export const loginConGoogle =()=> auth.signInWithPopup(provider);
//la utilidad para hacer logout
export const logout =()=> auth.signOut();
// exporta el paquete de firebase para poder usarlo
export default firebase
