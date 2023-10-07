// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/getAuth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBP6RLLxK4oOH1XmnOjMdnff-88Xa2MIPc",
  authDomain: "rpistoresng.firebaseapp.com",
  projectId: "rpistoresng",
  storageBucket: "rpistoresng.appspot.com",
  messagingSenderId: "622617271103",
  appId: "1:622617271103:web:fd5626d04347a325d8d18a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app