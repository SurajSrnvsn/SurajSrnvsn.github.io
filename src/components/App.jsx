import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import TetrisGame from './TetrisGame';
import Education from './Education';
import Contact from './Contact';
import TetrisBackground from './TetrisBackground';

const App = () => {
  return (
    <div className="container">
      <TetrisBackground />
      <div className="resume-wrapper">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TetrisGame />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App; 