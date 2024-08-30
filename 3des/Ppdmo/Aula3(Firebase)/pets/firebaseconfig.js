import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDwKpw3iqgop--s_LGPRIh19GnQEadV7ek",
  authDomain: "pets-632fc.firebaseapp.com",
  projectId: "pets-632fc",
  storageBucket: "pets-632fc.appspot.com",
  messagingSenderId: "328954938060",
  appId: "1:328954938060:web:95b95e25e99ac44550b869"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const auth = getAuth(app);

  const storage = getStorage(app)

    export {db, auth, storage};