// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx'; // Import Portfolio
//import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
    <Navbar />
    <Header />
    <Routes> {/* Use Routes instead of Switch */}
      <Route path="/" element={<AboutMe />} /> {/* Use element prop */}
      <Route path="/contact" element={<Contact />} /> {/* Use element prop */}
      <Route path="/portfolio" element={<Portfolio />} /> {/* Add this */}
    </Routes>
  </Router>
  );
}

export default App;