import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import ExperienceEducation from './sections/ExperienceEducation';
import Projects from './sections/Projects';
import SkillsAchievements from './sections/SkillsAchievements';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Home />
        <ExperienceEducation />
        <Projects />
        <SkillsAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
