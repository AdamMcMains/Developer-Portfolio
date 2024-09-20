import React from 'react';
import myPicture from '../assets/images/pp1.jpg'; // Replace with the path to your picture
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
    borderRadius: '30%', // Make the image circular
    border: '2px solid lightgrey',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    position: 'relative',

  };

  const cardStyle = {
    width: '35%', // Adjust the width to make room for the new section
    fontSize: '20px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '10px', // Add rounded corners
    backgroundColor: '#fff', // Add a background color
    
  };
  const technologies = ['HTML', 'XML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind', 'JQuery', 'JSON', 'AJAX', 'OOP', 'MySQL', 'NoSQL', 'MongoDB', 'GraphQL', '3rd Party API', 'Server Side API', 'MVC', 'Unit Testing', 'GIT', 'MERN']; // Add your technologies
  
  return (
    <div style={aboutMeStyle}>
      <img src={myPicture} alt="Me" style={imageStyle} />
      <div style = {cardStyle}>
        <h1>About Me</h1> 
        
          <p>
          Hello! My Name is Adam. I recently completed an accelerated program with the University Of Oregon for full stack web development and software engineering. Before that I spent two years at Chemeketa Community College learning all that I could about the world of computer science.
          </p>
          <p>
          I am an extremely quick study who is looking for an opportunity to grow my knowledgebase in a professional work environment. For all of the things I do know how to do, I still understand there is still alot that I can learn, and I am always looking for the chance to grow as a developer.
          </p>
          <p>
          Ive put together this webpage so that you can learn a little about me and the things that I can do, I look forward to hearing from anyone who would give me their time and I am excited to meet you!
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