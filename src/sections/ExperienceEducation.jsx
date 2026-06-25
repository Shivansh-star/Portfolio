import React from 'react';
import { Compass } from 'lucide-react';
import './ExperienceEducation.css';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="section ee-section">
      <div className="container ee-container">
        
        {/* Experience Section */}
        <div className="ee-block">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="ee-content">
            
            <div className="timeline">
              <div className="timeline-item card">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div>
                    <h3>Web Development Intern</h3>
                    <p className="subtitle">InternPe</p>
                  </div>
                  <span className="date">June 2026 - Aug 2026</span>
                </div>
                <ul className="timeline-body">
                  <li>Assisted in building responsive and dynamic user interfaces using modern web technologies.</li>
                  <li>Collaborated closely with the development team to implement new features and resolve bugs.</li>
                  <li>Optimized web applications for maximum speed and cross-browser compatibility.</li>
                </ul>
              </div>

              <div className="timeline-item card">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div>
                    <h3>Core Team Member</h3>
                    <p className="subtitle">Rapid Programming Hub, JIIT</p>
                  </div>
                  <span className="date">2024 - Present</span>
                </div>
                <ul className="timeline-body">
                  <li>Organized intensive coding sessions to enhance algorithmic problem-solving skills among peers.</li>
                  <li>Mentored junior students in foundational computer science concepts and modern development practices.</li>
                  <li>Managed and executed large-scale technical events, coordinating logistics and technical requirements.</li>
                </ul>
              </div>
            </div>

            <div className="experience-image-placeholder card">
              <Compass size={48} color="#cbd5e1" strokeWidth={1} />
            </div>

          </div>
        </div>
        

        {/* Education Section */}
        <div id="education" className="ee-block">
          <h2 className="section-title">EDUCATION</h2>
          <div className="timeline">
            
            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div>
                  <h3>Jaypee Institute of Information Technology</h3>
                  <p className="subtitle">Computer Science & Engineering</p>
                </div>
                <span className="date">2024 - 2028</span>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div>
                  <h3>Nirmala Convent Senior Secondary School</h3>
                  <p className="subtitle">High School</p>
                </div>
                <span className="date">2023</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
