import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzKgNCfLKS5BGdRJoltlQR1P8q3y4wGhE',
  authDomain: 'altashop.firebaseapp.com',
  projectId: 'altashop',
  storageBucket: 'altashop.appspot.com',
  messagingSenderId: '765360392448',
  appId: '1:765360392448:web:f6421e6a6d06fcd1af8be5',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore();

export default app;
export { auth, db };
