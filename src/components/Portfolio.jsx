import React from 'react';
import placeholder from '../assets/images/cracklingBlue.webp';
import backgroundImg from '../assets/images/darkBlueClouds.jpg';
import TechUmbrellaSS from '../assets/images/TechUmbrellaSS.png';
import BlackJackGameSS from '../assets/images/BlackJackGameSS.png';
import MenuMateSS from '../assets/images/MenuMateSS.png';
import WorkDayPlannerSS from '../assets/images/WorkDayPlannerSS.png';
import PasswordGenSS from '../assets/images/PasswordGenSS.png';



const Portfolio = () => {
  const portfolioItems = [
    { title: 'The Tech Umbrella', img: TechUmbrellaSS, text: 'The Tech Umbrella is an all things tech blog forum which allows the user to login with an email and password to create conversation posts about anything and everything tech, from gaming consoles, to opinions on machine code, here you can post and chat about numerous topics, as well as comment on other peoples posts.', appLink: 'https://the-tech-umbrella.onrender.com/', repoLink: 'https://github.com/AdamMcMains/The-Tech-Umbrella', },
    { title: '21 Black Jack', img: BlackJackGameSS, text: '21 Black Jack is an application designed to allow a user to play quick games of the classic casino game black jack, this is a project still under development with plans to add a leaderboard as well as complex betting and additions to the games core mechanics, currently the appliation is not deployed anywhere since there are still occasional updates being made to the repositories code but it runs on localhost servers well',appLink:'', repoLink:'https://github.com/AdamMcMains/21-Black-Jack'},
    { title: 'Menu Mate', img: MenuMateSS, text: 'Menu Mate is an application designed for people with certain dietary restrictions that dont want to go through the hastle of searching for restaurants that fit their needs. this app uses a geolocation API to fetch the users location and then uses the Yelp API to filter restaurants in a users area based on their chosen dietary restriction options.',appLink:'https://adammcmains.github.io/Menu-Mate/', repoLink:'https://github.com/AdamMcMains/Menu-Mate'},
    { title: 'Work Day Planner', img: WorkDayPlannerSS, text: 'This is a simple application that allows you to plan your work day hour by hour and save the results on your local machine to review later or revise. simply click on the hour your event is planned for and enter it into the planner and hit save, the app should keep your entry saved even on refresh',appLink:'https://adammcmains.github.io/Work-Day-Planner/', repoLink:'https://github.com/AdamMcMains/Work-Day-Planner'},
    { title: 'Password Generator', img: PasswordGenSS, text: 'This application is a simple password generator, the application will ask you to input your desired password length, special character preference, case sensitivity preference and if you would like to use numeric values as well as letters, it then generates a completely random sequence of characters for you to use as a password. no result will ever be the same ',appLink:'https://adammcmains.github.io/Password-Generator/', repoLink:'https://github.com/AdamMcMains/Password-Generator'},
    { title: 'Placeholder', img: placeholder, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',appLink:'', repoLink:''},
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
