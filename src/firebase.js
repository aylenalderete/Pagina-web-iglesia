import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCdWKWHD72Ll3hSkQqq6ahVJPpsnMnB5aU",
    authDomain: "webiglesia-4d578.firebaseapp.com",
    projectId: "webiglesia-4d578",
    storageBucket: "webiglesia-4d578.appspot.com",
    messagingSenderId: "669647982095",
    appId: "1:669647982095:web:fd7c0b3d2b7bac50765d7a"
  };
  
// Initialize Firebase
// firebase.analytics();
const fb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = fb.firestore();