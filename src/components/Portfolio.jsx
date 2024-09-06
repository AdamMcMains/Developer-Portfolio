import React from 'react';
import placeholder from '../assets/images/cracklingBlue.webp';
import backgroundImg from '../assets/images/darkBlueClouds.jpg';
import TechUmbrellaSS from '../assets/images/TechUmbrellaSS.png';
import BlackJackGameSS from '../assets/images/BlackJackGameSS.png';
import MenuMateSS from '../assets/images/MenuMateSS.png';



const Portfolio = () => {
  const portfolioItems = [
    { title: 'The Tech Umbrella', img: TechUmbrellaSS, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { title: '21 Black Jack', img: BlackJackGameSS, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { title: 'Menu Mate', img: MenuMateSS, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { title: 'app', img: placeholder, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { title: 'app', img: placeholder, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { title: 'app', img: placeholder, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      fontFamily: "'Work Sans', sans-serif",
    }}>
      {portfolioItems.map((item, index) => (
        <div key={index} style={{ border: '3px solid black', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px black', margin: '8px' }}>
          <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '50px' }}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.appLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#007BFF', color: '#fff', padding: '10px 0', borderRadius: '5px', marginTop: '10px' }}>Live Application 🔗</a>
            <a href={item.repoLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#6c757d', color: '#fff', padding: '10px 0', borderRadius: '5px', marginTop: '10px' }}>GitHub Repository 🐙</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
