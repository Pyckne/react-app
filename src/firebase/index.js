import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY/* "AIzaSyAOoFskBo2cMl1Q3aHu97I5YzueaajIsg0" */,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN/* "ecommerce-react-app-ddbb.firebaseapp.com" */,
    projectId: process.env.REACT_APP_PROJECT_ID/* "ecommerce-react-app-ddbb" */,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET/* "ecommerce-react-app-ddbb.appspot.com" */,
    messagingSenderId: process.env.REACT_APP_SENDER_ID/* "ecommerce-react-app-ddbb1074176970716" */,
    appId: process.env.REACT_APP_APP_ID/* "1:1074176970716:web:c3421f489fa5bb2616c919" */
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);