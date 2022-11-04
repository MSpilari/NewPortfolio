// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.AUTH_DOMAIN || process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID || process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket:
		process.env.STORAGE_BUCKET || process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId:
		process.env.MESSAGING_SENDER_ID ||
		process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.APP_ID || process.env.NEXT_PUBLIC_APP_ID,
	measurementId:
		process.env.MEASUREMENT_ID || process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = initializeAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage }
