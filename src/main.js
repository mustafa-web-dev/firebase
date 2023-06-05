import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './assets/tailwind.css'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzKnr7jNdE66Z2iFZOixH0PEREYmUJrpY",
  authDomain: "fir-43dae.firebaseapp.com",
  projectId: "fir-43dae",
  storageBucket: "fir-43dae.appspot.com",
  messagingSenderId: "435772154037",
  appId: "1:435772154037:web:4983bd1dc2419365f89efc",
  measurementId: "G-CZ3G1DEEP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
