import firebase from 'firebase/app'; //different import statement from firebase 8.0.0 and onward

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}


//configure firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const database = firebaseApp.firestore();
//authentication
const auth = firebase.auth();
// firebase cloud storage
const storage = firebase.storage();
//creates instance of google provider object
const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, storage, provider };