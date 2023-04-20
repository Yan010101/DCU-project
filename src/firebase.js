import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDYiL-UTQhPxUwgiRg1MfkVzmJVbS8X0JM",
  authDomain: "finaldcu.firebaseapp.com",
  projectId: "finaldcu",
  storageBucket: "finaldcu.appspot.com",
  messagingSenderId: "162489899972",
  appId: "1:162489899972:web:69fe8300e59a19bc502291"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
