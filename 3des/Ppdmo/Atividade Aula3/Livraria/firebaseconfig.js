import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCGKzM5Xy-x37wplcQdAY-HVOYknc7BEPY",
    authDomain: "livroslido-2024.firebaseapp.com",
    projectId: "livroslido-2024",
    storageBucket: "livroslido-2024.appspot.com",
    messagingSenderId: "1059202730871",
    appId: "1:1059202730871:web:7672a18831116651c02f72"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const auth = getAuth(app);

    export {db, auth};