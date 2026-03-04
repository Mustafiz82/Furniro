// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD5yqKG9QLoIGRPCuSG87Eyg3yfLTI8No",
  authDomain: "furniro-f7e92.firebaseapp.com",
  projectId: "furniro-f7e92",
  storageBucket: "furniro-f7e92.firebasestorage.app",
  messagingSenderId: "317537067642",
  appId: "1:317537067642:web:90ee709a1f30e2d1f191c3",
  measurementId: "G-5XZSKVF6BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)