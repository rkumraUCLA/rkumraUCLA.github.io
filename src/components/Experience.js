// Experience.js or the component with tab functionality
import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [activeTab, setActiveTab] = useState('Reliance');

  function openTab(tabName) {
    setActiveTab(tabName);
  }

  return (
    <section id="experience" className="sec3">
      <div className="section-container section-animation">
        <h2 className='experience-title'>Experience</h2>
        <div className="tabs-container">
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
                  <li>Developed diagnostic reporting for a data pipeline integrating 60+ ERPs into Snowflake using AWS services (Lambda, RDS, S3, EventBridge).</li>
                  <li>Automated job performance tracking, generating insights on discrepancies, success rates, and failures using Python (Boto3, Psycopg2) and SQL queries on AWS RDS.</li>
                  <li>Developed a Streamlit dashboard for monitoring job execution, visualizing diagnostics, and managing error logs with a custom built-in ticketing system.</li>
                  <li>Implemented an error-matching algorithm with FuzzyWuzzy to recommend solutions for similar past failures, enhancing issue resolution efficiency.</li>
                  <li>Automated daily notifications via AWS Lambda and SNS to keep stakeholders informed of job statuses and critical failures in real-time.</li>
                </ul>
              </div>
            )}
            {activeTab === 'Simplehuman' && (
              <div id="Simplehuman" className="tabcontent active-tab">
                <h2>Software Engineer Intern @ Simplehuman</h2>
                <p>June 2023 – September 2023 | Torrance, CA</p>
                <ul>
                  <li>Created software utilities in Python for data analysis and real-time visualization, improving product testing and validation processes.</li>
                  <li>Developed and tested noise reduction algorithms, enhancing sensor performance and product reliability.</li>
                  <li>Built interactive web applications using Node.js and Express to showcase product capabilities, supporting internal innovation efforts.</li>
                  <li>Collaborated with cross-functional teams to integrate firmware improvements, reducing false sensor activations by 40%.</li>
                  <li>Managed backend processes and API integrations for dynamic product data displays in a smart shelf concept.</li>
                </ul>
              </div>
            )}
            {activeTab === 'CodeNinjas' && (
              <div id="Codeninjas" className="tabcontent active-tab">
                <h2>Coding Instructor @ CodeNinjas</h2>
                <p>February 2022 – July 2022 | Torrance, CA</p>
                <ul>
                  <li>Taught children, ranging from ages 4 to 16, how to code in languages including Python, Java, and C++.</li>
                  <li>Helped kids through problem solving and debugging using my various experiences with programming.</li>
                  <li>Created modules for CodeNinjas to teach kids advanced coding topics like algorithms and recursion.</li>
                  <li>Adapted to each child with personalized instruction to give them an accommodating environment, which was inclusive to those with autism and behavioral challenges, to improve skill development.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
