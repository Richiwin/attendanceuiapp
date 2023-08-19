import { FIREBASE_CONFIG } from './constants/firebase'; // Import your Firebase configuration
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp(FIREBASE_CONFIG);
