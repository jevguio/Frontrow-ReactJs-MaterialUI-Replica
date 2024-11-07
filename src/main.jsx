import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './Shop.jsx'
import About from './About.jsx'
import Login from './Login.jsx'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/believers" element={<App />} />
        <Route path="/contacts" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
