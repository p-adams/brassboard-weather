import Firebase from 'firebase'
const App = Firebase.initializeApp({
    apiKey: "AIzaSyD0cmbu_y9F-qIKW3wzmKFRkxTQDYgYqcQ",
    authDomain: "brassboard-weather.firebaseapp.com",
    databaseURL: "https://brassboard-weather.firebaseio.com",
    projectId: "brassboard-weather",
    storageBucket: "brassboard-weather.appspot.com",
    messagingSenderId: "829667301095"
})
export const db = App.database()