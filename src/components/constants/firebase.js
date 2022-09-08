import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBHRynryR9YO7zihTBV6wd8ABHJJ2SwK1U",
    authDomain: "fresh-produce-791ce.firebaseapp.com",
    projectId: "fresh-produce-791ce",
    storageBucket: "fresh-produce-791ce.appspot.com",
    messagingSenderId: "466520144908",
    appId: "1:466520144908:web:348764b968cdcd71184229",
    measurementId: "G-SQQHXWRMGX"
  };

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)