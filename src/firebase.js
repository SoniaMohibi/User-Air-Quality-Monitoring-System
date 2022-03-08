
import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCjwRYB8CB5qMRl68Z6WUIFIuvGqcwl5EU",
  authDomain: "realtimeaqi-9a479.firebaseapp.com",
  databaseURL: "https://realtimeaqi-9a479-default-rtdb.firebaseio.com",
  projectId: "realtimeaqi-9a479",
  storageBucket: "realtimeaqi-9a479.appspot.com",
  messagingSenderId: "852937185284",
  appId: "1:852937185284:web:d4ff3fb1578f009bb9fd51"
};
var fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref();