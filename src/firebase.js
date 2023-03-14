import firebase from 'firebase'


//it is the configaration of whatsaapClone created on 26th feb
const firebaseConfig = {
    apiKey: "AIzaSyCScvO0G7B53I_JzCH0dr7tMqq5gduJ49g",
    authDomain: "whatsaap-clone-8e161.firebaseapp.com",
    projectId: "whatsaap-clone-8e161",
    storageBucket: "whatsaap-clone-8e161.appspot.com",
    messagingSenderId: "905787971698",
    appId: "1:905787971698:web:9c1c7567808c4e16a6caeb"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;