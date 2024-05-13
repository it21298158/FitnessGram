// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1RtFXIIkfS1g4t7wHiBi2yh4xBxBQADY",
  authDomain: "fitnessgram-c3d74.firebaseapp.com",
  databaseURL: "https://fitnessgram-c3d74-default-rtdb.firebaseio.com",
  projectId: "fitnessgram-c3d74",
  storageBucket: "fitnessgram-c3d74.appspot.com",
  messagingSenderId: "1002375345005",
  appId: "1:1002375345005:web:bb82c8bb4c99fcdcb82064",
  measurementId: "G-G0ST8CDB0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };