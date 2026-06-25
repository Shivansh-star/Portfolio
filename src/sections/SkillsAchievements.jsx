import React from 'react';
import { Code2, Globe, Database, Cpu, Wrench, Trophy, Code, Medal, TrendingUp } from 'lucide-react';
import './SkillsAchievements.css';

const SkillsAchievements = () => {
  return (
    <section id="skills" className="section sa-section">
      <div className="container sa-container">
        
        <div className="sa-col">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="skills-list">
            
            <div className="skill-category">
              <div className="skill-header">
                <Code2 size={20} color="#2563eb" />
                <h3>Languages</h3>
              </div>
              <div className="skill-tags">
                <span>C++</span><span>Python</span><span>JS</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <Globe size={20} color="#2563eb" />
                <h3>Web Development</h3>
              </div>
              <div className="skill-tags">
                <span>HTML</span><span>CSS</span><span>React</span><span>Tailwind</span><span>Node.js</span><span>Express</span><span>RESTful APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <Database size={20} color="#2563eb" />
                <h3>Databases</h3>
              </div>
              <div className="skill-tags">
                <span>MongoDB</span><span>MySQL</span><span>Firebase</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <Cpu size={20} color="#2563eb" />
                <h3>CS Core</h3>
              </div>
              <div className="skill-tags">
                <span>DSA</span><span>OOPs</span><span>DBMS</span><span>OS</span>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-header">
                <Wrench size={20} color="#2563eb" />
                <h3>Tools</h3>
              </div>
              <div className="skill-tags">
                <span>Git</span><span>VS Code</span><span>Linux</span>
              </div>
            </div>

          </div>
        </div>

        <div id="achievements" className="sa-col achievements-col">
          <h2 className="section-title">ACHIEVEMENTS</h2>
          <div className="achievements-list">
            
            <div className="achievement-card">
              <div className="ach-header">
                <h3>Codeforces</h3>
                <div className="ach-icon"><TrendingUp size={16} /> 1221 <Trophy size={16} color="#cbd5e1" /></div>
              </div>
              <p>Achieved Pupil rating, demonstrating strong problem-solving and algorithmic skills in competitive programming.</p>
            </div>

            <div className="achievement-card">
              <div className="ach-header">
                <h3>LeetCode</h3>
                <div className="ach-icon"><Code size={24} color="#cbd5e1" /></div>
              </div>
              <div className="ach-stat">✓ 300+ Solved</div>
              <p>Consistently practiced data structures and algorithms, solving over 300 medium to hard level problems.</p>
            </div>

            <div className="achievement-card">
              <div className="ach-header">
                <h3>Smart India Hackathon 2025</h3>
                <div className="ach-icon"><Medal size={24} color="#cbd5e1" /></div>
              </div>
              <div className="ach-stat">♕ Internal Winner</div>
              <p>Led a team to victory in the internal institutional round, developing an innovative software solution for a real-world problem.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsAchievements;
