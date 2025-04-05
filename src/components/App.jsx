import React, { useContext } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import TetrisGame from './TetrisGame';
import Education from './Education';
import Contact from './Contact';
import ThemeToggle from './ThemeToggle';
import TetrisBackground from './TetrisBackground';
import { ThemeContext } from '../ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
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
      <ThemeToggle />
    </div>
  );
};

export default App; 