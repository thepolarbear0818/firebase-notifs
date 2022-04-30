importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

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

  messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: "/logo192.png",
    };
  
    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
  