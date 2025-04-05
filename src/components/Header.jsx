import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(58, 123, 213, 0.3)',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#a8b2d1',
    marginBottom: '20px',
  };

  const aiTagStyle = {
    display: 'inline-block',
    padding: '5px 15px',
    backgroundColor: 'rgba(58, 123, 213, 0.2)',
    borderRadius: '20px',
    color: '#00d2ff',
    fontSize: '0.9rem',
    marginTop: '10px',
    border: '1px solid rgba(0, 210, 255, 0.3)',
  };

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <motion.header 
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            backgroundColor: 'rgba(0, 210, 255, 0.3)',
            borderRadius: '50%',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      <motion.h1 
        style={titleStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Suraj Srinivasan
      </motion.h1>
      
      <motion.p 
        style={subtitleStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        AI/ML Engineer | Full Stack Developer | Data Scientist
      </motion.p>
      
      <motion.div 
        style={aiTagStyle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        AI-Powered Solutions
      </motion.div>
    </motion.header>
  );
};

export default Header; 