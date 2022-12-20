import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import ThankYou from "./ThankYouPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
  Routing through pages so the first page (index) on load will be App and the second will be Thank you page: 
*/
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/interactive-rating-component'>
    <Routes>
      <Route index element={<App  />}  />
      <Route path='ThankYouPage' element={<ThankYou />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
