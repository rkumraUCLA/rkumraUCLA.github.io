import React from 'react';

function AboutMe() {
  return (
    <section id="about-me" className="sec2">
      <div className="about-me-container section-animation">
        <div className="about-text section-animation">
          <h1>About Me</h1>
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
