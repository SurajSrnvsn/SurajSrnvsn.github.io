import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const App = () => {
  return (
    <div className="container">
      <div className="resume-wrapper">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App; 