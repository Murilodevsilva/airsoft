// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAfUOkl4Nw9gNpP-A2GTX5Mv6QJTvGgCV4',
  authDomain: 'airsoft-dac2e.firebaseapp.com',
  projectId: 'airsoft-dac2e',
  storageBucket: 'airsoft-dac2e.appspot.com',
  messagingSenderId: '644150164729',
  appId: '1:644150164729:web:a26347bac109c35edff628',
  measurementId: 'G-3B5E6B3CYC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
