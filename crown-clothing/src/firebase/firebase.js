import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyA8GKWr9bDyRjfHrr-FQknWPLVAXQs7x3M",
  authDomain: "crown-db-9b54a.firebaseapp.com",
  projectId: "crown-db-9b54a",
  storageBucket: "crown-db-9b54a.appspot.com",
  messagingSenderId: "43519169210",
  appId: "1:43519169210:web:8a4527b564e57482f3e883",
  measurementId: "G-9S6G6155ZJ",
}; 

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;