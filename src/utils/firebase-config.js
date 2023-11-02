
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAB9swb6tI0hU6becQlS1C1oKYkpfkosJM",
  authDomain: "netflix-project-536fc.firebaseapp.com",
  projectId: "netflix-project-536fc",
  storageBucket: "netflix-project-536fc.appspot.com",
  messagingSenderId: "916178593241",
  appId: "1:916178593241:web:080e577ee40ae12f0d25c8",
  measurementId: "G-NN35T92HCD"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)