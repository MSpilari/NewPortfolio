// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyADSdoObiMYITIAxmXTCEcDuTUsQW1mIGY',
	authDomain: 'newportfoliobackend.firebaseapp.com',
	projectId: 'newportfoliobackend',
	storageBucket: 'newportfoliobackend.appspot.com',
	messagingSenderId: '175855079708',
	appId: '1:175855079708:web:5d8700cc0eb74842e8ead9',
	measurementId: 'G-369B393D0K'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage }
