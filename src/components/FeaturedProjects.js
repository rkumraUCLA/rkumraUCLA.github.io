// src/components/FeaturedProjects.js
import React, { useState, useEffect } from 'react';
import './FeaturedProjects.css';

const projects = [
  {
    title: 'Promptify',
    description: 'An AI-driven music recommendation app',
    details: 'Detailed information about Promptify. This section can be quite lengthy and scrollable.',
    image: '/assets/promptify_preview.png',
    media: [
      { type: 'image', src: '/images/promptify_screenshot1.png' },
      { type: 'image', src: '/images/promptify_screenshot2.png' },
      { type: 'video', src: '//promptify_demo.mp4' },
    ],
  },
  {
    title: 'Slide',
    description: 'A web app to slide into group events',
    image: '/assets/slide_preview.png',
    details: [
      {
        type: 'text',
        src: 'Slide is a web app designed to connect users through events based on shared interests, particularly group sports. It allows users to create and join events, find matches based on interests, and connect with like-minded individuals.',
      },
      { type: 'image', src: '/assets/slide_preview.png' },
      {
        type: 'text',
        src: 'User Profiles: View detailed profiles including sports interests and other personal details. Implemented using React Native and MongoDB.',
      },
      { type: 'video', src: '/assets/slide_vid_profile.mov' },
      {
        type: 'text',
        src: 'Event Creation: Users can create events by specifying type, date, time, and participants needed. Built using Node.js, Express, and React Native.',
      },
      { type: 'video', src: '/assets/slide_vid_create_event.mov' },
      {
        type: 'text',
        src: 'Finding Events: Users can discover events based on their interests and slide into them. Implemented using a custom event-matching algorithm in Node.js and MongoDB.',
      },
      { type: 'video', src: '/assets/slide_vid_events.mov' },
      {
        type: 'text',
        src: 'User Matching: Algorithmically match users to events based on shared interests. Developed with JavaScript and MongoDB for real-time matching.',
      },
      { type: 'video', src: '/assets/slide_vid_match.mov' },
      {
        type: 'text',
        src: 'Leaderboards: Track the most active users in event creation and participation. Built using MongoDB aggregation and React Native for UI.',
      },
      { type: 'image', src: '/assets/slide_leaderboard.png' },
    ],
  },
];

function FeaturedProjects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prevKey) => prevKey + 1);
  }, [currentProjectIndex]);

  const handleNext = () => {
    setSlideDirection('next');
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setSlideDirection('prev');
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="featured-projects" className="featured-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-display">
        <button className="nav-button" onClick={handlePrev}>
          &lt;
        </button>
        <div
          key={animateKey}
          className={`project-info ${
            slideDirection === 'next' ? 'slide-in-next' : 'slide-in-prev'
          }`}
          onClick={toggleModal}
        >
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
          {currentProject.image && (
            <img
              src={currentProject.image}
              alt={`${currentProject.title} preview`}
              className="project-image"
            />
          )}
        </div>
        <button className="nav-button" onClick={handleNext}>
          &gt;
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <h3>{currentProject.title}</h3>
            <div className="media-section">
              {currentProject.details.map((item, index) => (
                <div key={index} className="media-item">
                  {item.type === 'text' && <p className="media-text">{item.src}</p>}
                  {item.type === 'image' && (
                    <img
                      src={item.src}
                      alt={`Slide media ${index+1}`}
                      className="media-image"
                    />
                  )}
                  {item.type === 'video' && (
                    <video
                      src={item.src}
                      controls
                      className="media-video"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
