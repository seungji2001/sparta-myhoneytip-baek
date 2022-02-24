import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyDfoap6lXedt0zT0Dfp3TrS7IotTXAy8Io",
    authDomain: "sparta-myhoneytip-baek-b2e5f.firebaseapp.com",
    projectId: "sparta-myhoneytip-baek-b2e5f",
    storageBucket: "sparta-myhoneytip-baek-b2e5f.appspot.com",
    messagingSenderId: "286583991481",
    databaseURL:"https://sparta-myhoneytip-baek-b2e5f-default-rtdb.asia-southeast1.firebasedatabase.app/",
    appId: "1:286583991481:web:483e85df0163c691323f68",
    measurementId: "G-7K9E06GNZY"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database() 