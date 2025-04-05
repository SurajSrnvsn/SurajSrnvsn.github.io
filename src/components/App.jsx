import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    minHeight: '100vh',
    background: theme === 'light' 
      ? 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)'
      : 'linear-gradient(135deg, #1a1f2c 0%, #2d3748 100%)',
    transition: 'all 0.3s ease',
    padding: '2rem 0',
  };

  const resumeWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  };

  return (
    <motion.div 
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={resumeWrapperStyle}>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      <ThemeToggle />
    </motion.div>
  );
};

export default App; 