import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "tutorial-signin-a340c.firebaseapp.com",
  projectId: "tutorial-signin-a340c",
  storageBucket: "tutorial-signin-a340c.appspot.com",
  messagingSenderId: "630462768757",
  appId: "1:630462768757:web:158d2df98bdbc1c7c67a3c",
};

const app = initializeApp(firebaseConfig);
