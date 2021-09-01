import firebase from 'firebase'

const firebaseConfig= {
        apiKey: "AIzaSyCdpeIbhvqFEc5-jJT_1scGT8NLF_BKYic",
        authDomain: "chatapp-87045.firebaseapp.com",
        databaseURL: "https://chatapp-87045.firebaseio.com",
        projectId: "chatapp-87045",
        storageBucket: "chatapp-87045.appspot.com",
        messagingSenderId: "717655266820",
        appId: "1:717655266820:web:b5486638198d010b8b0751",
        measurementId: "G-WXLNQG13ST"
};

firebase.initializeApp(firebaseConfig);

export default firebase;