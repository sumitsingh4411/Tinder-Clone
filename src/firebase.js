import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB-2jsufk78cvzLeeXSrxZY8RLyWVGdcq0",
  authDomain: "tinder-bdd43.firebaseapp.com",
  projectId: "tinder-bdd43",
  storageBucket: "tinder-bdd43.appspot.com",
  messagingSenderId: "985007739642",
  appId: "1:985007739642:web:f244bb2ca53032a1982f43"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  const db=fire.firestore();
  const auth=fire.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
