import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage for Firebase Storage
import "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZusEl1IpkC-qz2wLYFQlsYNtn4CjRbjU",
  authDomain: "react-project-f7dda.firebaseapp.com",
  databaseURL: "https://react-project-f7dda-default-rtdb.firebaseio.com",
  projectId: "react-project-f7dda",
  storageBucket: "react-project-f7dda.appspot.com",
  messagingSenderId: "409375164549",
  appId: "1:409375164549:web:65849ba8534b58b518c1ec"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize Firebase Storage using getStorage

export const saveTodoToFirebase = async (todo) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(todo);
    console.log("Todo added to Firestore");
  } catch (error) {
    console.error("Error adding todo to Firestore:", error);
  }
};
