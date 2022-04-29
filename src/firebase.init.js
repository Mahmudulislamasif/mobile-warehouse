// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbXHdGjqB8cp5HCAl3truyKx-0VAc8p68",
  authDomain: "grocery-cde81.firebaseapp.com",
  projectId: "grocery-cde81",
  storageBucket: "grocery-cde81.appspot.com",
  messagingSenderId: "184112326128",
  appId: "1:184112326128:web:a520a2727a1ac507c7e935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;