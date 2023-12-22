import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// _____________________________________________
// Importing packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// _____________________________________________
// Importing Style
import "./index.css";
// _____________________________________________
// Importing Components:
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
