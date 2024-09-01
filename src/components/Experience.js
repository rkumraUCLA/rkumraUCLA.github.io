// Experience.js or the component with tab functionality
import React, { useState } from 'react';

function Experience() {
  const [activeTab, setActiveTab] = useState('Reliance');

  function openTab(tabName) {
    setActiveTab(tabName);
  }

  return (
    <section id="experience" className="sec3">
      <div className="tabs-container section-animation">
        <div className="tabs">
          <button
            className={`tablinks ${activeTab === 'Reliance' ? 'active' : ''}`}
            onClick={() => openTab('Reliance')}
          >
            Reliance
          </button>
          <button
            className={`tablinks ${activeTab === 'Simplehuman' ? 'active' : ''}`}
            onClick={() => openTab('Simplehuman')}
          >
            Simplehuman
          </button>
          <button
            className={`tablinks ${activeTab === 'CodeNinjas' ? 'active' : ''}`}
            onClick={() => openTab('CodeNinjas')}
          >
            Codeninjas and Kumon
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'Reliance' && (
            <div id="Reliance" className="tabcontent active-tab">
              <h2>Data Engineer @ Reliance</h2>
              <p>May 2018 - Present</p>
              <ul>
                <li>Deliver high-quality, robust production code for a diverse array of projects...</li>
                <li>Work alongside creative directors to lead the research, development...</li>
                <li>Collaborate with designers, project managers, and other engineers...</li>
                <li>Provide leadership within the engineering department through close collaboration...</li>
              </ul>
            </div>
          )}
          {activeTab === 'Simplehuman' && (
            <div id="Simplehuman" className="tabcontent active-tab">
              <h2>Software Engineer Intern @ Simplehuman</h2>
              <p>June 2023 – September 2023 | Torrance, CA</p>
              <ul>
                <li>Played a key role in refining and tuning the integration of two ultrasonic sensors in the company’s new smart trash can.</li>
                {/* More list items */}
              </ul>
            </div>
          )}
          {activeTab === 'CodeNinjas' && (
            <div id="Codeninjas" className="tabcontent active-tab">
              <h2>Coding Instructor @ CodeNinjas</h2>
              <p>February 2022 – July 2022 | Torrance, CA</p>
              <ul>
                <li>Taught children aged 4 to 16 how to code in Python, Java, and C++.</li>
                {/* More list items */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
