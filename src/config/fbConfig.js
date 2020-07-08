import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyD9-4MIXE9GdaKVf8RAURUyjU-Qvg7AoIM",
    authDomain: "amandayoncephotos.firebaseapp.com",
    databaseURL: "https://amandayoncephotos.firebaseio.com",
    projectId: "amandayoncephotos",
    storageBucket: "amandayoncephotos.appspot.com",
    messagingSenderId: "440458583699",
    appId: "1:440458583699:web:cad42f55d9b031f919f766",
    measurementId: "G-2G7N96G6HF"
  };

  firebase.initializeApp(firebaseConfig)
//   firebase.firestore()


  export default firebase