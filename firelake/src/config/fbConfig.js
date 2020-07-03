import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCUZ4tyuZUInWI1xRytetrcS_P9WqCphSs",
    authDomain: "firelake-123.firebaseapp.com",
    databaseURL: "https://firelake-123.firebaseio.com",
    projectId: "firelake-123",
    storageBucket: "firelake-123.appspot.com",
    messagingSenderId: "590820083981",
    appId: "1:590820083981:web:1aa638ecfce246007cc844",
    measurementId: "G-QML10907WE"};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
