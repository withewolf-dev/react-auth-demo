import firebase from 'firebase'

//we import firebase as firebase from firebase

// a set of pre written code we get from firebase to config our application with our app
const firebaseConfig = {
    apiKey: "AIzaSyBdaox_coW4ayFM4bwRW9u2Me6TP_emheQ",
    authDomain: "clone-evernote-2b99c.firebaseapp.com",
    databaseURL: "https://clone-evernote-2b99c.firebaseio.com",
    projectId: "clone-evernote-2b99c",
    storageBucket: "clone-evernote-2b99c.appspot.com",
    messagingSenderId: "929592020955",
    appId: "1:929592020955:web:acd187caeb31269c3e61fe",
    measurementId: "G-F5KBH447NJ"
  };
// here we have a const variable 'fire' and intitialize the firebaseconfig to the fire variable and export it 
// so whenever we need to use firebase and it's features we won't have to write this whole code
 const fire = firebase.initializeApp(firebaseConfig);
export default fire;