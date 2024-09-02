import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import backgroundImg from '../assets/images/darkBlueClouds.jpg';


const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    alignItems: 'center',
    height: '10%',
    backgroundImage: `url(${backgroundImg})`,
    color: 'black',
    bottom: 0,
    width: '100%',
    marginTop: 0,
  };

  const iconStyle = {
    margin: '5%',
  };

  return (
    <div style={footerStyle}>
      <a style={iconStyle} href="https://github.com/shhutc18" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a style={iconStyle} href="https://www.linkedin.com/in/shelby-hutchinson-00240b2b8/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a style={iconStyle} href="https://instagram.com/shelbyhutchinsonn" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default Footer;