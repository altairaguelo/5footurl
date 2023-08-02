import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCesXMumAeea_QuRdbIesnGuWNhfHOOU14",
  authDomain: "footurl-df5fb.firebaseapp.com",
  projectId: "footurl-df5fb",
  storageBucket: "footurl-df5fb.appspot.com",
  messagingSenderId: "117992599859",
  appId: "1:117992599859:web:0732e62613ef7b580cce46",
  measurementId: "G-V2P1T7991C"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
