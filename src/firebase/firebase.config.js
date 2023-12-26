// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6k3yDtckEwTvdbXQV4ausYmmYg30whMA",
  authDomain: "task-management-b0651.firebaseapp.com",
  projectId: "task-management-b0651",
  storageBucket: "task-management-b0651.appspot.com",
  messagingSenderId: "982910270851",
  appId: "1:982910270851:web:975f17c37b020213110ab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;