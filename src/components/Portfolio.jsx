import React from 'react';
import placeholder from '../assets/images/cracklingBlue.webp';


const Portfolio = () => {
  const portfolioItems = [
    { title: 'app', img: placeholder, text: 'placeholder'},
    { title: 'app', img: placeholder, text: 'placeholder'},
    { title: 'app', img: placeholder, text: 'placeholder'},
    { title: 'app', img: placeholder, text: 'placeholder'},
    { title: 'app', img: placeholder, text: 'placeholder'},
    { title: 'app', img: placeholder, text: 'placeholder'},
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      {portfolioItems.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
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
