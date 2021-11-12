import React from 'react';
import portrait from '../css/Amanda Headshot smaller.png';
import facebook from '../css/facebook.png';
import instagram from '../css/instagram.png';
import linkedin from '../css/linkedin.png';
import github from '../css/github.png';
import resume from '../Amanda_McBee_Resume.PDF';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Homepage` component is a child of our `App` component and is responsible for rendering the "Homepage World" header.
function Homepage() {
  const greeting = 'I am a Full-Stack Web Development student with the University of Denver. I will be receiving my certificate this December! I love the outdoors. You can find me hiking and taking photos, behind my computer or at the playground with my kids! In the winter, I am a big time ski bum, find me on the mountain. Bellow are some of my projects I have been working on the last year. Feel free to check them out and let me know if you have any comments!';
  const projectList = <div class="content">
  <h1>Project Finder:</h1>
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


const projects =
<div id="projectLinks" class="content">
<h1>Projects:</h1>
<div class="paragraph">
  <h3>Password Generator</h3>
  <a href="https://amandajean007.github.io/Password-Generator/" target="_blank" rel="noreferrer" id="1">
    <img alt="Password Generator" src="../css/Capture.passwordgenerator.PNG" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Password-Generator" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Code Quiz</h3>
  <a href="https://amandajean007.github.io/Code-Quiz/" target="_blank" rel="noreferrer" id="2">
    <img class="photo" alt="Code Quiz" src="../Biography/Assets/CodeQuiz.PNG" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Code-Quiz" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Work Day Scheduler</h3>
  <a href="https://amandajean007.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer" id="3">
    <img class="photo" alt="Work Day Scheduler" src="../Biography/Assets/work day screenshot.PNG" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Work-Day-Scheduler" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Recipe Generator</h3>
  <a href="https://amandajean007.github.io/AAA/" target="_blank" rel="noreferrer" id="4">
    <img class="photo" alt="recipe generator" src="../Biography/Assets/food generator.PNG" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/AAA" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Weather Tracker</h3>
  <a href="https://amandajean007.github.io/Weather-Tracker/ " target="_blank" rel="noreferrer" id="5">
    <img class="photo" alt="Weather Tracker" src="../Biography/Assets/WEATHERTRACKER.PNG" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Weather-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>DinDin - Recipe Warehouse</h3>
  <a href="https://secure-crag-98297.herokuapp.com/login" target="_blank" rel="noreferrer" id="6">
    <img class="photo" alt="DinDin" src="../Biography/Assets/dindin.PNG" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Din-Din" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Technology Blog</h3>
  <a href="https://whispering-brushlands-45251.herokuapp.com/" target="_blank" rel="noreferrer" id="7">
    <img class="photo" alt="TechBlog" src="../Biography/Assets/techblog.png" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Tech-Blog" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Fitness Tracker</h3>
  <a href="https://safe-spire-01308.herokuapp.com/" target="_blank" rel="noreferrer" id="8">
    <img class="photo" alt="FitnessTracker" src="../Biography/Assets/fitnesstracker.png" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Fitness-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Note Taker</h3>
  <a href="https://panda-note-taker.herokuapp.com/" target="_blank" rel="noreferrer" id="9">
    <img class="photo" alt="NoteTaker" src="../Biography/Assets/note-taker.png" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Note-Taker" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
<div class="paragraph">
  <h3>Offline-Online Budget Tracker</h3>
  <a href="https://cryptic-tundra-70283.herokuapp.com/" target="_blank" rel="noreferrer" id="10">
    <img class="photo" alt="OfflineOnlineBudgetTracker" src="../Biography/Assets/budget.png" width="600px" height="auto"></img>
  </a>
  <a href="https://github.com/amandajean007/Online-Offline-Budget-Tracker" target="_blank" rel="noreferrer">Check out the code!</a>
</div>
</div>
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="container">
      <h1>Amanda McBee</h1>
      <img className="portrait" src={portrait} alt="portrait" />
      <div>
        <p>(303) 489-5490</p>
        <a target="_blank" rel="noreferrer" href="mailto:ahanes35@yahoo.com">
          ahanes35@yahoo.com</a>
        <p><a class="btn btn-warning" data-bs-toggle="offcanvas" target="_blank" rel="noreferrer" href={resume} role="button" aria-controls="offcanvasExample">
          Resume</a></p>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/amanda.jean.7758">
        <img alt="facebook" src={facebook}/></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/amandajean007/">
        <img alt="instagram" src={instagram}/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amanda-mcbee-98a586108/">
        <img alt="linkedin" src={linkedin}/></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/amandajean007/">
        <img alt="github" src={github}/></a>
      </div>
      <p className="paragraph">
        {greeting}
      </p>
      <p>
        {projectList}
      </p>
      <p>
        {projects}
      </p>
    </div>
  );
}

export default Homepage;