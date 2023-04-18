// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB1pWEOQk43iBhZS6vNbgO23Xfo-dJ5P48',
	authDomain: 'auth-task-app.firebaseapp.com',
	projectId: 'auth-task-app',
	storageBucket: 'auth-task-app.appspot.com',
	messagingSenderId: '942318429629',
	appId: '1:942318429629:web:542836b82dbb77d9ab9ed4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
