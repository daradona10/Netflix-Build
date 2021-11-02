import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCf0htrDROCCH-J-miH73xcKPpq1X89qSs",
  authDomain: "netflix-clone-b6e8c.firebaseapp.com",
  projectId: "netflix-clone-b6e8c",
  storageBucket: "netflix-clone-b6e8c.appspot.com",
  messagingSenderId: "593734759681",
  appId: "1:593734759681:web:df8abdf44b9b76fac25700",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
