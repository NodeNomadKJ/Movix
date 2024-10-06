
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAKOi_0kgemCA9iKLH6YhZnvbnM-1Ydiv4",
  authDomain: "movie-app-a321e.firebaseapp.com",
  projectId: "movie-app-a321e",
  storageBucket: "movie-app-a321e.appspot.com",
  messagingSenderId: "576382669610",
  appId: "1:576382669610:web:d58b11d399ddc00e024453",
  measurementId: "G-HCDXQ11K64"
};


const app = initializeApp(firebaseConfig);
export const database  = getAuth(app);