import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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