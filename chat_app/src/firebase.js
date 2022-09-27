
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyAV4uASz6hYSnShOBt4ASeWUi_fHEUSyX0",
  authDomain: "chat-7080e.firebaseapp.com",
  projectId: "chat-7080e",
  storageBucket: "chat-7080e.appspot.com",
  messagingSenderId: "1065109095123",
  appId: "1:1065109095123:web:215a07f4b8eaecd6704a26",

  
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();