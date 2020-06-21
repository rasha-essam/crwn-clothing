import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAe8DJHONVB9R8fdiO4t7yVQLtuQpOqfmc',
  authDomain: 'crwn-db-5a8d2.firebaseapp.com',
  databaseURL: 'https://crwn-db-5a8d2.firebaseio.com',
  projectId: 'crwn-db-5a8d2',
  storageBucket: 'crwn-db-5a8d2.appspot.com',
  messagingSenderId: '870049556494',
  appId: '1:870049556494:web:f6f0a29fdd1881cfa8345f',
  measurementId: 'G-JLRYXY74WC'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
