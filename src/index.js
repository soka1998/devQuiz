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
import Quiz from './components/Quiz';
import Header from './components/Header';
import Footer from './components/Footer';
import StartQuiz from './components/StartQuiz';
import IntroPage from './components/IntroPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/intro/startquiz" element={<StartQuiz />} />
        <Route path="/startquiz/quiz/:selectedCategory" element={<Quiz />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
