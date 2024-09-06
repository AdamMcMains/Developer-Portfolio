import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/images/starsOnBlack.jpg'; // Adjust the path if necessary
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundPosition = null;
    };
  }, []);

  
  const ContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    border: '2px solid black',
    margin: '8% auto',
    padding: '2%',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    
  };
  const inputStyle = { 
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };
  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '5%'
  };
  const iconStyle = {
    margin: '0 20px',
  };


  return (
    <div style={ContainerStyle}>
      <h1>Contact Me</h1>
        <div>
          <h2>Email: AdamMcMains@gmail.com</h2>
        </div>
        <div>
          <h2>Phone: (971)-600-8632</h2>
        </div>
        <div style = {iconContainerStyle}>
      <a style={iconStyle} href="https://github.com/AdamMcMains" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a style={iconStyle} href="https://www.linkedin.com/in/adam-mcmains-6aa91b314/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a style={iconStyle} href="https://instagram.com/AdamMcmains" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
      </div>
    </div>
  );
};

export default Contact;