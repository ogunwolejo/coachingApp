// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5LzeVvGg1r5CQj4-ftHR6bwIpvlzsNrE',
  authDomain: 'coaching-7b9ab.firebaseapp.com',
  projectId: 'coaching-7b9ab',
  storageBucket: 'coaching-7b9ab.appspot.com',
  messagingSenderId: '695386371759',
  appId: '1:695386371759:web:76fd01b3ded04c5f68865a',
  measurementId: 'G-H5GLZSK9Y9',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
