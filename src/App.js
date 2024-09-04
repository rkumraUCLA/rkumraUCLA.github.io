import React, { useEffect } from 'react';
import './styles/style.css'; // Link your CSS file here
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';
import FeaturedProjects from './components/FeaturedProjects'; // Import the new component
// In App.js or the relevant component

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    function revealSection() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        const screenHeight = window.innerHeight;
        const animatedElements = section.querySelectorAll('.section-animation');

        // Check if section is in view
        if (sectionTop <= screenHeight - sectionHeight / 4 && sectionTop >= -sectionHeight / 2) {
          animatedElements.forEach((element) => {
            element.classList.add('section-visible');
          });
        } else {
          animatedElements.forEach((element) => {
            element.classList.remove('section-visible');
          });
        }
      });
    }

    window.addEventListener('scroll', revealSection);

    // Trigger on load
    revealSection();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', revealSection);
    };
  }, []);

  return (
    <div className="App">
      <TopBar />
      <SideNav />
      <main>
        <section className="sec1">
          <p className="intro1 section-animation">Welcome! My name is,</p>
          <h1 className="intro2 section-animation">Rishi Kumra.</h1>
          <h2 className="desc1 section-animation">I'm an aspiring Software Engineer</h2>
          <p className="desc2 section-animation">
            Hi! I'm a third-year UCLA student pursuing Mathematics and Computer Science. Currently, I am enhancing my
            skills as a Data Engineer Intern at Reliance, Inc., aiming to evolve into a versatile Software Engineer.
          </p>
        </section>
        <AboutMe />
        <Experience />
        <FeaturedProjects />
      </main>
    </div>
  );
}

export default App;
