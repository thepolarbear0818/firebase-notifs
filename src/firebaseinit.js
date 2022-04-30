import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_LaE_VghEljYoTJC24Gb-Qosp_8lOKVQ",
  authDomain: "nofifications-test.firebaseapp.com",
  projectId: "nofifications-test",
  storageBucket: "nofifications-test.appspot.com",
  messagingSenderId: "1034312702760",
  appId: "1:1034312702760:web:172365f10be90e58b10e1d",
  measurementId: "G-S6M8D2TN3J",
};

firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
