import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7o2py7t7KiHPvQuB20xOxWTr0ZGdNDYA",
    authDomain: "migues-react-8960d.firebaseapp.com",
    projectId: "migues-react-8960d",
    storageBucket: "migues-react-8960d.appspot.com",
    messagingSenderId: "852817431090",
    appId: "1:852817431090:web:ab87dbaa5e30279744ca2b"
  };

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();  
