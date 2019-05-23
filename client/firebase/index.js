import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyBUgWFi_vSJ6pNoUwoRwiuGeZ1cSyjAO-c',
	authDomain: 'construction-workers-hub.firebaseapp.com',
	databaseURL: 'https://construction-workers-hub.firebaseio.com',
	projectId: 'construction-workers-hub',
	storageBucket: 'construction-workers-hub.appspot.com',
	messagingSenderId: '924277145452',
	appId: '1:924277145452:web:e200678092af4f92'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
