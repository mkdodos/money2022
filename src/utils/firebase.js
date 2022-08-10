import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDUSJ5yzHvTCCSQTuONsPtOBGodjamReHc",
  authDomain: "money2022-173b9.firebaseapp.com",
  projectId: "money2022-173b9",
  storageBucket: "money2022-173b9.appspot.com",
  messagingSenderId: "944583877759",
  appId: "1:944583877759:web:0fd8a43af8a727a76c0b4a"
};

const firebaseConfig_dada = {
  apiKey: 'AIzaSyBKVsNm8RP9VKYBgEwmyRQsitx9dncLuaI',
  authDomain: 'social-cool-f16ba.firebaseapp.com',
  projectId: 'social-cool-f16ba',
  storageBucket: 'social-cool-f16ba.appspot.com',
  messagingSenderId: '578558980743',
  appId: '1:578558980743:web:4668ba80e8df3c24087e22',
};


// const secondaryApp = firebase.initializeApp(secondaryAppConfig, "secondary");


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const app_dada = firebase.initializeApp(firebaseConfig_dada,"dada");
const db_dada = app_dada.firestore();


const auth = app.auth();

// export default firebase;
export { db,db_dada, auth };
