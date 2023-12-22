import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// _____________________________________________
// Importing packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// _____________________________________________
// Importing Style
import './index.css'
// _____________________________________________
// Importing Components:
import Home from './components/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
  </React.StrictMode>
);


reportWebVitals();
