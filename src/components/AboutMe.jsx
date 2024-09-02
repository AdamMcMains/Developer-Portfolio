import React from 'react';
import myPicture from '../assets/images/placeholder.jpg'; // Replace with the path to your picture
import backgroundImg from '../assets/images/starsOnBlack.jpg';

const AboutMe = () => {
  const aboutMeStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2%',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    color: '#333',
    lineHeight: '1.6',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  };

  const imageStyle = {
    width: '30%',
    height: '550px',
    marginRight: '2%',
    borderRadius: '50%', // Make the image circular
    border: '2px solid lightgrey',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    position: 'relative',

  };

  const cardStyle = {
    width: '35%', // Adjust the width to make room for the new section
    fontSize: '18px',
    padding: '2%',
    paddingTop: '1%',
    marginBottom: '1%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '10px', // Add rounded corners
    backgroundColor: '#fff', // Add a background color
    
  };
  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'APIs', 'JQuery', 'JSON', 'AJAX', 'Agile Development', 'Object Oriented Programming', 'Express', 'MySQL', 'NoSQL', 'MVC', 'Sequelize', 'Testing', 'MERN Stack', 'GraphQL']; // Add your technologies
  
  return (
    <div style={aboutMeStyle}>
      <img src={myPicture} alt="Me" style={imageStyle} />
      <div style = {cardStyle}>
        <h2>About Me</h2> 
        
          <p>
            placeholder.
          </p>
          <p>
            placeholder.
          </p>
          <p>
            placeholder.
          </p>
      </div>

      <div style = {cardStyle}>
        <h2>Technologies & Knowledge</h2>
        <div style = {{height: '80%', overflowY: 'scroll'}}>  
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;