import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCeHmTRRus_YVwg2gQfngohu_BXkOSpfmM",
    authDomain: "bellezaycolor-8a28e.firebaseapp.com",
    projectId: "bellezaycolor-8a28e",
    storageBucket: "bellezaycolor-8a28e.appspot.com",
    messagingSenderId: "291371054160",
    appId: "1:291371054160:web:2bb17106dd84cf671acd55"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}