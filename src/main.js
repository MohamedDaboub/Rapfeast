import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-uJUKFdLYGy-6yDjRVAiWwuLb4nRWogQ",
    authDomain: "rap-feast.firebaseapp.com",
    projectId: "rap-feast",
    storageBucket: "rap-feast.appspot.com",
    messagingSenderId: "1012723630047",
    appId: "1:1012723630047:web:b0da44f3465b3c7f508e6a"
};
// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);


const app = createApp(App)
app.use(router)
app.mount('#app')

