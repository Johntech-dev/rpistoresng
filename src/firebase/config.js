import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBP6RLLxK4oOH1XmnOjMdnff-88Xa2MIPc",
  authDomain: "rpistoresng.firebaseapp.com",
  projectId: "rpistoresng",
  storageBucket: "rpistoresng.appspot.com",
  messagingSenderId: "622617271103",
  appId: "1:622617271103:web:fd5626d04347a325d8d18a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;