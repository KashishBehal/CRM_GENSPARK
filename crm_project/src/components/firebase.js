// Import required functions from Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
  apiKey: 'AIzaSyCnP9GRHnYpm9hVeSr8F_u6rnV6ZXYl_sg',
  authDomain: 'crmproject-efdbc.firebaseapp.com',
  databaseURL: 'https://crmproject-efdbc-default-rtdb.firebaseio.com',
  projectId: 'crmproject-efdbc',
  storageBucket: 'crmproject-efdbc.appspot.com',
  messagingSenderId: '210982179583',
  appId: '1:210982179583:web:c1043ebcdb42512ea732ca',
  measurementId: 'G-6Q2VK6GWNX',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(); // Authentication
export const db = getFirestore(app); // Firestore database
export default app;
