import React from 'react';

function SideNav() {
  return (
    <div className="sidenav">
      <a href="https://github.com/rkumraUCLA" target="_blank" className="contact-link" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/images/github-icon.png`} alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/rishi-kumra/" target="_blank" className="contact-link" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/images/linkedin-icon.png`} alt="LinkedIn" />
      </a>
      <a href="mailto:rkumra@ucla.edu" className="contact-link">
        <img src={`${process.env.PUBLIC_URL}/images/email-icon.png`} alt="Email" />
      </a>
    </div>
  );
}

export default SideNav;
