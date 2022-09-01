import firebase from 'firebase/app';
import 'firebase/firestore';

//custom config
const firebaseConfig = {
    apiKey: "AIzaSyCyEWlgO8fX6rPKuaQKayB4qoI9N_Pwbho",
    authDomain: "stroit-eddf5.firebaseapp.com",
    projectId: "stroit-eddf5",
    storageBucket: "stroit-eddf5.appspot.com",
    messagingSenderId: "359102018573",
    appId: "1:359102018573:web:6ba717ea5c665489849144"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };

