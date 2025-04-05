import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const containerStyle = {
    padding: '40px 20px',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '30px',
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const educationItemStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
  };

  const degreeStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '5px',
  };

  const institutionStyle = {
    fontSize: '1rem',
    marginBottom: '5px',
  };

  const periodStyle = {
    fontSize: '0.9rem',
    color: '#666',
  };

  const education = [
    {
      degree: 'Executive PG in ML & AI',
      institution: 'IIIT Bangalore',
      period: '2021 - 2022'
    },
    {
      degree: 'BCA',
      institution: 'Ramakrishna Mission Vivekananda College',
      period: '2016 - 2019'
    }
  ];

  return (
    <motion.section 
      className="section"
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={contentStyle}>
        <motion.h2 style={titleStyle}>Education</motion.h2>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            style={educationItemStyle}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div style={degreeStyle}>{edu.degree}</div>
            <div style={institutionStyle}>{edu.institution}</div>
            <div style={periodStyle}>{edu.period}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education; 