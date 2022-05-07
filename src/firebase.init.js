// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcmf0SA7kf2zMadrFo7sEd34tQHkMftzo",
  authDomain: "babubhai-warehouse.firebaseapp.com",
  projectId: "babubhai-warehouse",
  storageBucket: "babubhai-warehouse.appspot.com",
  messagingSenderId: "614194462078",
  appId: "1:614194462078:web:134605877a6a6d92c9872f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
