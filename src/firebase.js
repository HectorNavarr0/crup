// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChFvm4ZD-TAjBVnElNpUTuyJT4NDO--HQ",
  authDomain: "todo-app-yt-55ba3.firebaseapp.com",
  projectId: "todo-app-yt-55ba3",
  storageBucket: "todo-app-yt-55ba3.appspot.com",
  messagingSenderId: "227949030995",
  appId: "1:227949030995:web:8227f9b7f1a740e75a60a6"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };