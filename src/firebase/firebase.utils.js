import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyD0X9qVHcevfLs9Xw2-ZwQIn2iSUyjUzE8",
  authDomain: "crwn-db-493ce.firebaseapp.com",
  databaseURL: "https://crwn-db-493ce.firebaseio.com",
  projectId: "crwn-db-493ce",
  storageBucket: "crwn-db-493ce.appspot.com",
  messagingSenderId: "108482312258",
  appId: "1:108482312258:web:3494d99603ab5d33e5d5db",
  measurementId: "G-PFCTGKBZ9Q",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
