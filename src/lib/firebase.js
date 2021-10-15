import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// replace these with your own config values from Firebase!
const config = {
  apiKey: 'AIzaSyAK2oMYTzZGUiV47YARTl6uPkyzjoWqsN0',

  authDomain: 'konecta-pruebas.firebaseapp.com',

  projectId: 'konecta-pruebas',

  storageBucket: 'konecta-pruebas.appspot.com',

  messagingSenderId: '714228604689',

  appId: '1:714228604689:web:3c70a8709f7b33d2c136b0'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
