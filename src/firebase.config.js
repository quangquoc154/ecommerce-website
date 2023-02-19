// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxmnLilhpbY_Er3EzlIfiTvj5d16ZpJ-I',
  authDomain: 'qqmart-acb31.firebaseapp.com',
  projectId: 'qqmart-acb31',
  storageBucket: 'qqmart-acb31.appspot.com',
  messagingSenderId: '1017605974941',
  appId: '1:1017605974941:web:77049d26d3d981d5e99d74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
