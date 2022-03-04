import React from 'react';
import favgame from "../../Assets/favgame.png";
import portrait from '../../Assets/salamander.png';
import "./About.css"

export default function About() {
  const greeting = 'I am a Full-Stack Web Development student with the University of Denver. I will be receiving my certificate this December! I love the outdoors. You can find me hiking and taking photos, behind my computer or at the playground with my kids! In the winter, I am a big time ski bum, find me on the mountain. Check out some of my projects I have been working on the past year. Leave me a comment!'

  const Game = 'https://play2048.co/'
  
  return (
    <div className="container">
    <h1>Amanda McBee</h1> <br />
    <div>
      <p>(303) 489-5490</p>
      <br />
      <a target="_blank" rel="noreferrer" href="mailto:amandajeanmcbee@gmail.com">
        amandajeanmcbee@gmail.com
      </a>
      <br />
      <br />
    </div>
    <img className="portrait" height="300px" src={portrait} alt="portrait" /> <br />
      <div className="aboutme">
        <h2>About me:</h2>
          <p className="me">
            {greeting} <br/><br/>
            Skills:
              <div className="div">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavasSript" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="jQuery" className="icon"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJs" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express" className="icon"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="handlebars" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VScode" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="icon" />
              </div>
              <br/><br/>
            One of my favorite games. Try it out:
            <a target="_blank" rel="noreferrer" href={Game} className="socialMedia">
              <img alt="2048" src={favgame}/></a>
          </p>
      </div>
    </div>
  );
}
