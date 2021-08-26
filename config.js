import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAsS7VDXuvEG2syxWTQQihI1VF1h__oGnc",
    authDomain: "attendance-app-8a39f.firebaseapp.com",
    databaseURL: "https://attendance-app-8a39f-default-rtdb.firebaseio.com",
    projectId: "attendance-app-8a39f",
    storageBucket: "attendance-app-8a39f.appspot.com",
    messagingSenderId: "708215796433",
    appId: "1:708215796433:web:628f4de3ff890b1cd2cbf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()