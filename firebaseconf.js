// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU29m98M9yDpKMi9WD4PT8ICsVjHzmHvs",
  authDomain: "shares-ea4cf.firebaseapp.com",
  projectId: "shares-ea4cf",
  storageBucket: "shares-ea4cf.appspot.com",
  messagingSenderId: "705948522880",
  appId: "1:705948522880:web:121ce6f907c1e6c72b0965",
  measurementId: "G-4TN7EET2NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);