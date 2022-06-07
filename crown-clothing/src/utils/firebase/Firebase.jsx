import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8GKWr9bDyRjfHrr-FQknWPLVAXQs7x3M",
  authDomain: "crown-db-9b54a.firebaseapp.com",
  projectId: "crown-db-9b54a",
  storageBucket: "crown-db-9b54a.appspot.com",
  messagingSenderId: "43519169210",
  appId: "1:43519169210:web:8a4527b564e57482f3e883",
  measurementId: "G-9S6G6155ZJ",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
            
        }
    }

    return userDocRef
};
