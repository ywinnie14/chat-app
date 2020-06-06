import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCboFWOEqbZpGkUvH9ASSYBZnpvXnAXzeg",
  authDomain: "chat-app-f479d.firebaseapp.com",
  databaseURL: "https://chat-app-f479d.firebaseio.com",
  projectId: "chat-app-f479d",
  storageBucket: "chat-app-f479d.appspot.com",
  messagingSenderId: "372920088669",
  appId: "1:372920088669:web:5f5c4757492c2cb45a35b4",
  measurementId: "G-FLHNQ00M7L"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render( routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
