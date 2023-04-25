import firebaseApp from 'firebase';
import 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrGnHEgaISc1v6DTWJ44ojs_nIs7FPjJI",
    authDomain: "yoonstagram-p1.firebaseapp.com",
    databaseURL: "https://yoonstagram-p1-default-rtdb.firebaseio.com",
    projectId: "yoonstagram-p1",
    storageBucket: "yoonstagram-p1.appspot.com",
    messagingSenderId: "801844484970",
    appId: "1:801844484970:web:20141237d137ec3e11a313",
    measurementId: "G-J2JLX2S77Y"
};

// Initialize Firebase
firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp; 