import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-right-buttons">
        <button className="scroll-button" onClick={() => scrollToSection('about-me')}>
          About Me
        </button>
        <button className="scroll-button" onClick={() => scrollToSection('experience')}>
          Experience
        </button>
        <button className="scroll-button" onClick={() => scrollToSection('featured-projects')}>
          My Projects
        </button>
      </div>
    </div>
  );
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

export default TopBar;
