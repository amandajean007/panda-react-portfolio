import './App.css';
import React from 'react';
import portrait from '../src/Amanda.png';
import facebook from '../src/facebook.png';
import instagram from '../src/instagram.png';
import linkedin from '../src/linkedin.png';
import github from '../src/github.png';
import resume from '../src/Amanda_McBee_Resume.PDF';
import codequiz from '../src/CodeQuiz.PNG';
import budget from '../src/budget.png';
import password from '../src/Capture.passwordgenerator.PNG';
import scheduler from '../src/work day screenshot.PNG';
import foodGenerator from '../src/food generator.PNG';
import weather from "../src/WEATHERTRACKER.PNG";
import dindin from "../src/dindin.PNG";
import techblog from "../src/techblog.png";
import fitness from "../src/fitnesstracker.png";
import notetaker from "../src/note-taker.png";
import favgame from "../src/favgame.png";

function App() {
  const greeting = 'I am a Full-Stack Web Development student with the University of Denver. I will be receiving my certificate this December!'
  const aboutme = 'I love the outdoors. You can find me hiking and taking photos, behind my computer or at the playground with my kids! In the winter, I am a big time ski bum, find me on the mountain.'
  const mycode = 'Bellow are some of my projects I have been working on the last year. Feel free to check them out and let me know if you have any comments!';
  const Game = 'https://play2048.co/'

  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
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
        <section>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/amanda.jean.7758" class="socialMedia">
          <img alt="facebook" src={facebook}/></a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/amandajean007/" class="socialMedia">
          <img alt="instagram" src={instagram}/></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amanda-mcbee-98a586108/" class="socialMedia">
          <img alt="linkedin" src={linkedin}/></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/amandajean007/" class="socialMedia">
          <img alt="github" src={github}/></a>
        </section>
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
      <p>
      <h1>Project Finder:</h1>
        
      <div class="content">
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#1'">Password Generator</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#2'">Code Quiz</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#3'">Work Day Scheduler</button>
        </div> 
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#4'">Recipe Generator</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#5'">Weather Tracker</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#6'">DinDin - Recipe Warehosue</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#7'">Technology Blog</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#8'">Fitness Tracker</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#9'">Note Taker</button>
        </div>
        <div class="red">
            <button class="glow-on-hover" onclick="location.href='#10'">Offline-Online Budget Tracker</button>
        </div>
      </div>

      </p>
      <p>
      <h1>Projects:</h1>
      <div id="projectLinks" class="content">

        <div class="paragraph">
          <h3>Password Generator</h3>
          <a href="https://amandajean007.github.io/Password-Generator/" target="_blank" rel="noreferrer" id="1">
            <img alt="Password Generator" src={password} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Password-Generator" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Code Quiz</h3>
          <a href="https://amandajean007.github.io/Code-Quiz/" target="_blank" rel="noreferrer" id="2">
            <img class="photo" alt="Code Quiz" src={codequiz} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Code-Quiz" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Work Day Scheduler</h3>
          <a href="https://amandajean007.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer" id="3">
            <img class="photo" alt="Work Day Scheduler" src={scheduler} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Work-Day-Scheduler" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Recipe Generator</h3>
          <a href="https://amandajean007.github.io/AAA/" target="_blank" rel="noreferrer" id="4">
            <img class="photo" alt="recipe generator" src={foodGenerator} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/AAA" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Weather Tracker</h3>
          <a href="https://amandajean007.github.io/Weather-Tracker/ " target="_blank" rel="noreferrer" id="5">
            <img class="photo" alt="Weather Tracker" src={weather} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Weather-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>DinDin - Recipe Warehouse</h3>
          <a href="https://secure-crag-98297.herokuapp.com/login" target="_blank" rel="noreferrer" id="6">
            <img class="photo" alt="DinDin" src={dindin} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Din-Din" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Technology Blog</h3>
          <a href="https://whispering-brushlands-45251.herokuapp.com/" target="_blank" rel="noreferrer" id="7">
            <img class="photo" alt="TechBlog" src={techblog} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Tech-Blog" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Fitness Tracker</h3>
          <a href="https://safe-spire-01308.herokuapp.com/" target="_blank" rel="noreferrer" id="8">
            <img class="photo" alt="FitnessTracker" src={fitness} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Fitness-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>

        <div class="paragraph">
          <h3>Note Taker</h3>
          <a href="https://panda-note-taker.herokuapp.com/" target="_blank" rel="noreferrer" id="9">
            <img class="photo" alt="NoteTaker" src={notetaker} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Note-Taker" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>
        
        <div class="paragraph">
          <h3>Offline-Online Budget Tracker</h3>
          <a href="https://cryptic-tundra-70283.herokuapp.com/" target="_blank" rel="noreferrer" id="10">
            <img class="photo" alt="OfflineOnlineBudgetTracker" src={budget} width="80%" height="auto"></img>
          </a>
          <a href="https://github.com/amandajean007/Online-Offline-Budget-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
        </div>
      </div>
      </p>
      <footer>
      Chase your stars fool, life is short ✨ 
      </footer>
    </div>
  );
}

export default App;
