import React from 'react';
import myPicture from '../assets/images/placeholder.jpg'; // Replace with the path to your picture
import backgroundImg from '../assets/images/starsOnBlack.jpg';

const AboutMe = () => {
  const aboutMeStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5%',
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
    margin: '1%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '10px', // Add rounded corners
    backgroundColor: '#fff', // Add a background color
    
  };
  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'APIs', 'JQuery', 'JSON', 'AJAX', 'Agile Development', 'Object Oriented Programming', 'Express', 'MySQL', 'NoSQL', 'MVC', 'Sequelize', 'Testing', 'MERN Stack', 'GraphQL']; // Add your technologies
  
  return (
    <div style={aboutMeStyle}>
      <img src={myPicture} alt="Me" style={imageStyle} />
      <div style = {cardStyle}>
        <h1>About Me</h1> 
        
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
          </p>
      </div>

      <div style = {cardStyle}>
        <h1>Technologies & Knowledge</h1>
        <div style = {{height: '80%'}}>  
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