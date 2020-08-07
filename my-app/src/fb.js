// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>

import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBD4AEnDNp-_6sgii8dFE2dT1pR-jhYAOA",
    authDomain: "todozwegyi.firebaseapp.com",
    databaseURL: "https://todozwegyi.firebaseio.com",
    projectId: "todozwegyi",
    storageBucket: "todozwegyi.appspot.com",
    messagingSenderId: "5832691348",
    appId: "1:5832691348:web:f6e216b5f0fce708c8ae81",
    measurementId: "G-XN53G89P0R"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();

db.settings({ timestampsInSnapshots: true});

export default db;