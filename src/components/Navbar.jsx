import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '2%',
    width: 'fit-content',
    margin: '0 auto',
    left: 0,
    right: 0,
    marginBottom: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '0 30px',
    fontSize: '20px',
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