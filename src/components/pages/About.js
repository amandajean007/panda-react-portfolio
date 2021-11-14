import React from 'react';
import favgame from "../../Assets/favgame.png";
import resume from '../../Assets/Amanda_McBee_Resume.PDF';
import portrait from '../../Assets/Amanda.png';
import "./About.css"

export default function About() {
  const greeting = 'I am a Full-Stack Web Development student with the University of Denver. I will be receiving my certificate this December!'
  const aboutme = 'I love the outdoors. You can find me hiking and taking photos, behind my computer or at the playground with my kids! In the winter, I am a big time ski bum, find me on the mountain.'
  const mycode = 'Bellow are some of my projects I have been working on the last year. Feel free to check them out and let me know if you have any comments!';
  const Game = 'https://play2048.co/'
  
  return (
    <div className="container">
    <h1>Amanda McBee</h1>
    <img className="portrait" src={portrait} alt="portrait" />
    <div>
      <h1>(303) 489-5490</h1>
      <a target="_blank" rel="noreferrer" href="mailto:ahanes35@yahoo.com">
        ahanes35@yahoo.com</a>
      <p><a class="btn btn-warning" data-bs-toggle="offcanvas" target="_blank" rel="noreferrer" href={resume} role="button" aria-controls="offcanvasExample">
        Resume</a></p>
        </div>
      <h1>About me:</h1>
      <p className="paragraph">
        {greeting} <br/><br/>
        {aboutme} <br/><br/>
        {mycode} <br/><br/>
        One of my favorite games. Try it out:
        <a target="_blank" rel="noreferrer" href={Game} class="socialMedia">
          <img alt="2048" src={favgame}/></a>
      </p>
    </div>
  );
}