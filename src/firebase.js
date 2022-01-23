import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA7MAB3noK7aTcGvIuUPrsqbyEjvz4Rkl4",
    authDomain: "unichat-a1df9.firebaseapp.com",
    projectId: "unichat-a1df9",
    storageBucket: "unichat-a1df9.appspot.com",
    messagingSenderId: "443121239024",
    appId: "1:443121239024:web:c4cec3de8d4b520639d335"
}).auth();
