import React from 'react';
import { Mail, Code, Link as LinkIcon, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-desc">
            I'm currently open to new opportunities, collaborations, and conversations about tech. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-links">
            <div className="contact-link-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <h4>EMAIL</h4>
                <a href="mailto:shivansh2006dani@gmail.com">shivansh2006dani@gmail.com</a>
              </div>
            </div>

            <div className="contact-link-item">
              <div className="icon-box"><Code size={20} /></div>
              <div>
                <h4>GITHUB</h4>
                <a href="https://github.com/shivansh-star" target="_blank" rel="noreferrer">github.com/shivansh-star</a>
              </div>
            </div>

            <div className="contact-link-item">
              <div className="icon-box"><LinkIcon size={20} /></div>
              <div>
                <h4>LINKEDIN</h4>
                <a href="https://linkedin.com/in/shivansh1234" target="_blank" rel="noreferrer">linkedin.com/in/shivanshdani</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper card">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="jane@example.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Inquiry" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message here..." rows="5"></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
