import firebase from "firebase";
import { FIREBASE_CONFIG } from "./constants/firebase";
import "firebase/compat/storage";

firebase.initializeApp(FIREBASE_CONFIG);
export const storage = firebase.storage();
export default firebase;

