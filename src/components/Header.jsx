import React from 'react';
import headerImg from '../assets/images/darkBlueClouds.jpg';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100%',
    backgroundImage: `url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderTop: '5px solid lightgrey',
    borderBottom: '5px solid lightgrey',
  };

  const h1Style = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white', 
    padding: '10px',
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '350%',
  };


  return (
    <div style={headerStyle}>
      <h1 style={h1Style}> Adam McMains </h1>
    </div>
  );
};

export default Header;