import { FIREBASE_API_KEY } from "@env";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "tutorial-signin-a340c.firebaseapp.com",
  projectId: "tutorial-signin-a340c",
  storageBucket: "tutorial-signin-a340c.appspot.com",
  messagingSenderId: "630462768757",
  appId: "1:630462768757:web:158d2df98bdbc1c7c67a3c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// IOS 클라이언트 ID : 280057957535-c8as34mn9g0otj53k7fk6ohgab5slr3j.apps.googleusercontent.com
// Android 클라이언트 ID : 280057957535-iepboa6iiesu3ur9q908drhtapmhetoa.apps.googleusercontent.com
