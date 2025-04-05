import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerStyle = {
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  };

  const darkContainerStyle = {
    background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const paragraphStyle = {
    marginBottom: '20px',
    fontSize: '1.1rem',
    lineHeight: '1.8',
  };

  const highlightStyle = {
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '600',
  };

  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '40px',
    gap: '20px',
  };

  const statStyle = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    minWidth: '150px',
  };

  const statNumberStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '5px',
  };

  const statLabelStyle = {
    fontSize: '0.9rem',
    color: '#666',
  };

  const darkStatLabelStyle = {
    color: '#a8b2d1',
  };

  return (
    <motion.section 
      className="section"
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={contentStyle}>
        <motion.p style={paragraphStyle}>
          I am a <span style={highlightStyle}>Software Engineer</span> with <span style={highlightStyle}>4+ years of experience</span> specializing in backend development and data engineering. My work focuses on building reliable systems and data pipelines.
        </motion.p>
        
        <motion.p style={paragraphStyle}>
          My experience includes working with <span style={highlightStyle}>ETL systems</span>, implementing solutions for enterprise clients, and working with <span style={highlightStyle}>cloud platforms</span> like AWS and GCP. I enjoy solving technical challenges and learning new technologies, including modern development tools.
        </motion.p>
        
        <motion.p style={paragraphStyle}>
          I have experience in developing applications for the media and entertainment industry, with a focus on data processing and automation.
        </motion.p>

        <motion.div 
          style={statsContainerStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div 
            style={statStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div style={statNumberStyle}>4+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </motion.div>
          
          <motion.div 
            style={statStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div style={statNumberStyle}>Backend</div>
            <div style={statLabelStyle}>Development</div>
          </motion.div>
          
          <motion.div 
            style={statStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div style={statNumberStyle}>AWS & GCP</div>
            <div style={statLabelStyle}>Cloud Technologies</div>
          </motion.div>
          
          <motion.div 
            style={statStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div style={statNumberStyle}>Cursor</div>
            <div style={statLabelStyle}>Development</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 