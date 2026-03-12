import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, query, orderByChild } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXDj0aCobQIJwnst99hzQOPvEIBjWUA-M",
  authDomain: "hkeep-ca6da.firebaseapp.com",
  databaseURL: "https://hkeep-ca6da-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hkeep-ca6da",
  storageBucket: "hkeep-ca6da.firebasestorage.app",
  messagingSenderId: "670242845257",
  appId: "1:670242845257:web:e80fc7da02eccef3044598",
  measurementId: "G-19162BGRGE",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export { ref, push, onValue, query, orderByChild };
