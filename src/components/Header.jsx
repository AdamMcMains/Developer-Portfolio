import React from 'react';
import headerImg from '../assets/images/darkBlueClouds.jpg';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '100%',
    backgroundImage: `url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginTop: 0, // Add margin to make navbar on top
    borderBottom: '5px solid lightgrey',
  };

  const h1Style = {
    color: 'white', 
    padding: '10px',
    marginLeft: '-75px',
    fontFamily: "'Work Sans', sans-serif",
  };

  return (
    <div style={headerStyle}>
      <h1 style={h1Style}></h1>
    </div>
  );
};

export default Header;