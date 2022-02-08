import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAOoFskBo2cMl1Q3aHu97I5YzueaajIsg0",
    authDomain: "ecommerce-react-app-ddbb.firebaseapp.com",
    projectId: "ecommerce-react-app-ddbb",
    storageBucket: "ecommerce-react-app-ddbb.appspot.com",
    messagingSenderId: "1074176970716",
    appId: "1:1074176970716:web:c3421f489fa5bb2616c919"
  
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);