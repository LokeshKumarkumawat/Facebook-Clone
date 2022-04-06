import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBH2-dgMxnsVinI3HNGQVGmPngg08a4DoY",
    authDomain: "fb-collage.firebaseapp.com",
    projectId: "fb-collage",
    storageBucket: "fb-collage.appspot.com",
    messagingSenderId: "515921748001",
    appId: "1:515921748001:web:fb5e42b98af0d25b6f4360",
    measurementId: "G-QDNFCTZVFJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore()
const auth = firebase.auth()


export { auth, provider }
export default db