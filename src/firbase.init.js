// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDwccmS1A9lDdK9aP6vaYvSQ2c6zBL090",
  authDomain: "greenstar-manufacturing.firebaseapp.com",
  projectId: "greenstar-manufacturing",
  storageBucket: "greenstar-manufacturing.appspot.com",
  messagingSenderId: "478518614416",
  appId: "1:478518614416:web:7087fc86f1f766593a7b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
