// FIREBASE BACKEND
import firebase from 'firebase/app';
// SERVICES/FEATURES
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCF9J88g-x58eal6d4ug_Vma0dhRMaDfzc",
    authDomain: "v-recipe-3e516.firebaseapp.com",
    projectId: "v-recipe-3e516",
    storageBucket: "v-recipe-3e516.appspot.com",
    messagingSenderId: "26370996106",
    appId: "1:26370996106:web:a052c94b0afae96d39fa73"
  };


// INITILIAZE FIREBASE/BACKEND
firebase.initializeApp(firebaseConfig)

// INITILIAZES SERVICES/FEATURES
const projectFirestore  = firebase.firestore()

export { projectFirestore }