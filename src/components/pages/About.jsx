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
      <a>(303) 489-5490</a>
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
            Skills:
              <div style="margin: 1em 0;">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavasSript" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="jQuery" style="width: 4%;"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJs" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express" style="width: 4%;"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="handlebars" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VScode" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style="width: 4%;" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style="width: 4%;" />
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
}
