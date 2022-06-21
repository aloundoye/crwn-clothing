import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA8iGnkXsEN7WGMt0rkyETWzmvxcJDly20',
  authDomain: 'crwn-clothing-db-c2d6d.firebaseapp.com',
  projectId: 'crwn-clothing-db-c2d6d',
  storageBucket: 'crwn-clothing-db-c2d6d.appspot.com',
  messagingSenderId: '321171343711',
  appId: '1:321171343711:web:87824ee57dc72728588eea',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
