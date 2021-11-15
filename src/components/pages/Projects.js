import React from 'react';
import './Projects.css';
import codequiz from '../../Assets/CodeQuiz.PNG';
import budget from '../../Assets/budget.png';
import password from '../../Assets/Capture.passwordgenerator.PNG';
import scheduler from '../../Assets/work day screenshot.PNG';
import foodGenerator from '../../Assets/food generator.PNG';
import weather from "../../Assets/WEATHERTRACKER.PNG";
import dindin from "../../Assets/dindin.PNG";
import techblog from "../../Assets/techblog.png";
import fitness from "../../Assets/fitnesstracker.png";
import notetaker from "../../Assets/note-taker.png";

export default function Projects() {
  const triggers = document.getElementsByClassName('trigger');
  const triggerArray = Array.from(triggers).entries();
  const modals = document.getElementsByClassName('modal');
  const closeButtons = document.getElementsByClassName('close-button');

  for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
      modals[index].classList.toggle('show-modal');
    };
    trigger.addEventListener('click', toggleModal);
    closeButtons[index].addEventListener('click', toggleModal);
  }

  return (
    <div className="content">

      <div class="paragraph">
        <p>Password Generator</p>
        <a href="https://amandajean007.github.io/Password-Generator/" target="_blank" rel="noreferrer" id="1">
          <img alt="Password Generator" src={password} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Password-Generator" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Code Quiz</p>
        <a href="https://amandajean007.github.io/Code-Quiz/" target="_blank" rel="noreferrer" id="2">
          <img class="photo" alt="Code Quiz" src={codequiz} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Code-Quiz" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Work Day Scheduler</p>
        <a href="https://amandajean007.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer" id="3">
          <img class="photo" alt="Work Day Scheduler" src={scheduler} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Work-Day-Scheduler" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Recipe Generator</p>
        <a href="https://amandajean007.github.io/AAA/" target="_blank" rel="noreferrer" id="4">
          <img class="photo" alt="recipe generator" src={foodGenerator} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/AAA" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Weather Tracker</p>
        <a href="https://amandajean007.github.io/Weather-Tracker/ " target="_blank" rel="noreferrer" id="5">
          <img class="photo" alt="Weather Tracker" src={weather} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Weather-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>DinDin - Recipe Warehouse</p>
        <a href="https://secure-crag-98297.herokuapp.com/login" target="_blank" rel="noreferrer" id="6">
          <img class="photo" alt="DinDin" src={dindin} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Din-Din" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Technology Blog</p>
        <a href="https://whispering-brushlands-45251.herokuapp.com/" target="_blank" rel="noreferrer" id="7">
          <img class="photo" alt="TechBlog" src={techblog} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Tech-Blog" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Fitness Tracker</p>
        <a href="https://safe-spire-01308.herokuapp.com/" target="_blank" rel="noreferrer" id="8">
          <img class="photo" alt="FitnessTracker" src={fitness} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Fitness-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Note Taker</p>
        <a href="https://panda-note-taker.herokuapp.com/" target="_blank" rel="noreferrer" id="9">
          <img class="photo" alt="NoteTaker" src={notetaker} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Note-Taker" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

      <div class="paragraph">
        <p>Offline-Online Budget Tracker</p>
        <a href="https://cryptic-tundra-70283.herokuapp.com/" target="_blank" rel="noreferrer" id="10">
          <img class="photo" alt="OfflineOnlineBudgetTracker" src={budget} width="80%" height="auto"></img>
        </a><br />
        <a href="https://github.com/amandajean007/Online-Offline-Budget-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
      </div>

    </div>
);
}