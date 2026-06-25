import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-description">
          A selection of recent development work, highlighting architecture, technical problem-solving, and full-stack implementation.
        </p>

        <div className="projects-grid">
          
          <div className="project-card large card">
            <div className="project-image-placeholder">
               <div className="mock-laptop">
                 <div className="screen"></div>
               </div>
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3>NextRoll</h3>
                <span className="year">2026</span>
              </div>
              <p className="project-desc">
                A modern full-stack job hiring and recruitment platform empowering companies to seamlessly post openings and job seekers to discover their next career move. Engineered with role-based access control and integrated with Cloudinary for optimized media management, including applicant profile photos, company banners, and resume storage.
              </p>
              <ul className="project-bullets">
                <li>Architected scalable RESTful APIs with Express and Node.js for comprehensive job lifecycle management and dynamic search filtering.</li>
                <li>Integrated Cloudinary cloud storage for secure, seamless upload and transformation of candidate resumes and profile photos.</li>
                <li>Implemented robust JWT-based authentication featuring differentiated, protected dashboards for recruiters and applicants.</li>
              </ul>
              <div className="project-tags">
                <span>MERN Stack</span>
                <span>Cloudinary</span>
                <span>REST API</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="projects-row-2">
            <div className="project-card small card">
              <div className="project-header">
                <h3>TradeHub</h3>
                <span className="year">2024</span>
              </div>
              <p className="project-desc">
                A robust stock market information platform delivering real-time financial data. Built with an emphasis on high-performance RESTful APIs to handle rapid data ingestion and a highly responsive front-end for seamless user experience across devices.
              </p>
              <ul className="project-bullets">
                <li>Designed and deployed efficient REST APIs for market data retrieval.</li>
                <li>Engineered a responsive React interface optimized for real-time updates.</li>
                <li>Integrated third-party financial data providers ensuring high availability.</li>
              </ul>
              <div className="project-tags">
                <span>REST API</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
              </div>
            </div>

            <div className="project-card small more-projects card">
              <Terminal size={32} color="#888" strokeWidth={1.5} />
              <h3>More Projects</h3>
              <p>Explore my complete portfolio of work, including open-source contributions and algorithmic experiments on GitHub.</p>
              <a href="https://github.com/shivanshdani" target="_blank" rel="noreferrer" className="github-link">
                View GitHub Repository <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
