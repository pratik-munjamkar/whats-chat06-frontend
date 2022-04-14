import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvZydOWAkGDlwB7nEl2e1-mY6bkazZtmc",
    authDomain: "whatsapp-06-2b272.firebaseapp.com",
    projectId: "whatsapp-06-2b272",
    storageBucket: "whatsapp-06-2b272.appspot.com",
    messagingSenderId: "424734541244",
    appId: "1:424734541244:web:99c835e494b5e88947d7b9",
    measurementId: "G-P8SJ549MQD"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
//console.log(auth.currentUser());
export { auth, provider, app };