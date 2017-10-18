import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from "firebase";


//MY First React Web App with FireBase DataBase Final on 17-10-17
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcCFWWlkf9m7-QShjaR6E9WTFXONcE5UQ",
    authDomain: "react-todo-fb5e3.firebaseapp.com",
    databaseURL: "https://react-todo-fb5e3.firebaseio.com",
    projectId: "react-todo-fb5e3",
    storageBucket: "react-todo-fb5e3.appspot.com",
    messagingSenderId: "298703714641"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();