import React from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">RESUME & QUALIFICATIONS</h2>
        <p className="section-description">
          A comprehensive breakdown of my software engineering capabilities, competitive programming track record, and technical architecture experience.
        </p>

        <div className="resume-container">
          <div className="resume-banner">
            <div className="resume-banner-left">
              <div className="resume-file-icon">
                <FileText size={28} />
              </div>
              <div className="resume-info">
                <h3>Shivansh Dani — Official Resume</h3>
                <p>Full-Stack MERN Stack & High-Performance Software Engineer</p>
                <div className="resume-meta">
                  <span>📄 PDF Document</span>
                  <span>•</span>
                  <span>⚡ Updated for 2026</span>
                  <span>•</span>
                  <span>✨ ATS Optimized</span>
                </div>
              </div>
            </div>

            <div className="resume-banner-right">
              <a
                href="/resume.pdf"
                download="Shivansh_Dani_Resume.pdf"
                className="btn-download"
              >
                <Download size={18} /> Download Resume (PDF)
              </a>
            </div>
          </div>

          <div className="resume-stats-grid">
            <div className="resume-stat-card">
              <h4>System Design & Backend</h4>
              <p>RESTful APIs, Express.js microservices, JWT authentication, MongoDB schema optimization, Cloudinary pipeline integration.</p>
            </div>
            <div className="resume-stat-card">
              <h4>Algorithmic Problem Solving</h4>
              <p>Codeforces Pupil (Max 1221), 300+ LeetCode problems solved with optimal time & space complexities in C++.</p>
            </div>
            <div className="resume-stat-card">
              <h4>Frontend Engineering</h4>
              <p>React 19, Vite, responsive glassmorphic interfaces, Three.js 3D canvas animations, modern Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
