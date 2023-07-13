import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsiDtj5i6YPg5SJqDq2oyQDwMhNOdRiF0",
  authDomain: "instantchat-5fbcb.firebaseapp.com",
  projectId: "instantchat-5fbcb",
  storageBucket: "instantchat-5fbcb.appspot.com",
  messagingSenderId: "1090692342228",
  appId: "1:1090692342228:web:e53e4be7bd314b158af641"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);