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
      <>(303) 489-5490</>
      <br />
      <a target="_blank" rel="noreferrer" href="mailto:ahanes35@yahoo.com">
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
            One of my favorite games. Try it out:
            <a target="_blank" rel="noreferrer" href={Game} className="socialMedia">
              <img alt="2048" src={favgame}/></a>
          </p>
      </div>
    </div>
  );
}