import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsVq9uZDql6giF4WNQ9R22O189p3oLs54",
  authDomain: "who-got-next-auth.firebaseapp.com",
  projectId: "who-got-next-auth",
  storageBucket: "who-got-next-auth.appspot.com",
  messagingSenderId: "313688600920",
  appId: "1:313688600920:web:ad4dd3edec9427717cf52d",
  measurementId: "G-C78NEJ0NE0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);