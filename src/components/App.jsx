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
      ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      : 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
    transition: 'all 0.3s ease',
  };

  const resumeWrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
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