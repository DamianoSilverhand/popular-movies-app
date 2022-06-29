import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Liked from './pages/Liked'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/liked' element={<Liked/>} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
