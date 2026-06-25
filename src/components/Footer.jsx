import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Shivansh Dani</h3>
          <p>© 2024 Shivansh Dani. Built with precision.</p>
        </div>
        
        <div className="footer-col">
          <ul>
            <li><a href="mailto:hello@shivanshdani.com">Email</a></li>
            <li>Phone</li>
            <li>Noida, India</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <ul>
            <li><a href="https://github.com/shivanshdani" target="_blank" rel="noreferrer" className="external-link">GitHub <ExternalLink size={14} /></a></li>
            <li><a href="https://linkedin.com/in/shivanshdani" target="_blank" rel="noreferrer" className="external-link">LinkedIn <ExternalLink size={14} /></a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
