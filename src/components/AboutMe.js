import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="about-me" className="sec2">
      <div className="about-me-container section-animation">
        <div className="about-text section-animation">
          {/* <h1>About Me</h1>
          <p>
            Hi! My name is Rishi Kumra, and I’m passionate about creating impactful software solutions. My journey in
            software engineering began during my high school years, where I developed a deep interest in coding and
            problem-solving.
          </p>
          <p>
            Fast-forward to today, I've had the privilege of interning at Simplehuman, where I worked on refining
            cutting-edge technologies, and teaching at CodeNinjas, where I nurtured young coders. My main focus now is
            to build efficient, scalable software solutions that meet user needs.
          </p>
          <p>Some skills I've picked up along the way:</p>
          <ul className="technologies">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>C++</li>
          </ul> */}
        <h1>About Me</h1>
        <p>
          Hi! I'm Rishi Kumra, I'm 20 years old, born and raised in Torrance, California. Being near LA over the years, I've developed hobbies in snowboarding, surfing, and watching the NBA and NFL. 
        </p>
        <p>
          My journey in software engineering began during my high school years, where I developed an interest in coding and problem-solving. This gradually progressed to learning multiple coding languages, leading the robotics team in high school, and eventually working internships in college.       
        </p>
        <p>
          I'm now a Mathematics of Computation major at UCLA, where I combine advanced mathematics and computer science to tackle complex computational challenges.
        </p>
        <p>Skills I've developed:</p>
        <ul class="technologies">
          <li>JavaScript</li>
          <li>C, C++, C#</li>
          <li>Python</li>
          <li>SQL & NoSQL</li>
          <li>AWS Services</li>
          <li>Data Integration</li>
        </ul>

        </div>
        <div className="about-image section-animation">
          <img src={`/assets/pfp.jpg`} alt="Rishi Kumra" className="profile-picture" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
