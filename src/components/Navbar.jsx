import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import headerImg from '../assets/images/darkBlueClouds.jpg';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    top: '0',
    width: '100%',
    padding: '20px',
    marginBottom: 0,
    backgroundImage: `url(${headerImg})`,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '0 30px',
    fontSize: '30px',
    fontFamily: "'Work Sans', sans-serif",
  };

  return (
    <div style={navbarStyle}>
      <Link style={linkStyle} to="/">About Me</Link> {/* Change to Link */}
      <Link style={linkStyle} to="/portfolio">Portfolio</Link> {/* Change to Link */}
      <Link style={linkStyle} to="/contact">Contact</Link> {/* Change to Link */}
      <a style={linkStyle} href="https://docs.google.com/document/d/1iipN7P56I5bFahgOklL6vKXA6sbZYPa3l5vCPQ9yp4U/edit#heading=h.ca0awj8022e2" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
  );
};

export default Navbar;