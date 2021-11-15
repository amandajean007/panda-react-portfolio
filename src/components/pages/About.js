import React from 'react';
import favgame from "../../Assets/favgame.png";
import resume from '../../Assets/Amanda_McBee_Resume.PDF';
import portrait from '../../Assets/Amanda.png';
import "./About.css"

export default function About() {
  const greeting = 'I am a Full-Stack Web Development student with the University of Denver. I will be receiving my certificate this December!'
  const aboutme = 'I love the outdoors. You can find me hiking and taking photos, behind my computer or at the playground with my kids! In the winter, I am a big time ski bum, find me on the mountain.'
  const mycode = 'Check out some of my projects I have been working on the past year. Leave me a comment!';
  const Game = 'https://play2048.co/'
  
  return (
    <div className="container">
    <h1>Amanda McBee</h1> <br />
    <div>
      <a>(303) 489-5490</a>
      <br />
      <a target="_blank" rel="noreferrer" href="mailto:ahanes35@yahoo.com">
        ahanes35@yahoo.com
      </a>
      <br />
      <br />
    </div>
    <img className="portrait" src={portrait} alt="portrait" /> <br />
      <div className="aboutme">
        <h2>About me:</h2>
          <p>
            {greeting} <br/><br/>
            {aboutme} <br/><br/>
            {mycode} <br/><br/>
            One of my favorite games. Try it out:
            <a target="_blank" rel="noreferrer" href={Game} class="socialMedia">
              <img alt="2048" src={favgame}/></a>
          </p>
      </div>
    </div>
  );
}