import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container home-container">
        
        <div className="badge">
          <span className="dot"></span> AVAILABLE FOR OPPORTUNITIES
        </div>
        
        <h1 className="hero-title">Shivansh Dani</h1>
        
        <p className="hero-subtitle">
          Computer Science undergraduate with strong fundamentals in data structures and algorithms. Building scalable systems and writing clean, efficient code.
        </p>
        
        <div className="hero-buttons">
          <a href="mailto:shivansh2006dani@gmail.com" className="btn">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/Shivansh-star" target="_blank" rel="noreferrer" className="btn">
            <FiGithub size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/shivansh1234" target="_blank" rel="noreferrer" className="btn">
            <FiLinkedin size={18} /> LinkedIn
          </a>
        </div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="mac-btn close"></div>
            <div className="mac-btn minimize"></div>
            <div className="mac-btn maximize"></div>
          </div>
          <div className="terminal-body">
            <p><span className="prompt">~ /shivansh $</span> cat skills.json</p>
            <p>{`{`}</p>
            <p className="indent">"languages": ["C++", "Java", "Python", "JavaScript"],</p>
            <p className="indent">"focus": "Backend Architecture & Algorithmic Problem Solving"</p>
            <p>{`}`}</p>
            <p className="cursor">_</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
