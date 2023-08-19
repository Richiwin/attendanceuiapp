import { FIREBASE_CONFIG } from './constants/firebase'; // Import your Firebase configuration
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


firebase.initializeApp(FIREBASE_CONFIG);



// import firebase from 'firebase';
// import 'firebase/firestore';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import firebaseConfig from './firebaseConfig'; // Your Firebase configuration
// // import { getAuth } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

