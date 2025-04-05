import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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

  const contactItemStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '20px',
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '5px',
  };

  const valueStyle = {
    fontSize: '1rem',
  };

  const linkStyle = {
    color: '#3a7bd5',
    textDecoration: 'none',
  };

  const contactInfo = [
    {
      label: 'Phone',
      value: '9094301550'
    },
    {
      label: 'Email',
      value: 'surajsrnvsn@gmail.com',
      isLink: true,
      href: 'mailto:surajsrnvsn@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/suraj-srinivasan',
      isLink: true,
      href: 'https://linkedin.com/in/suraj-srinivasan'
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
        <motion.h2 style={titleStyle}>Contact</motion.h2>
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            style={contactItemStyle}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div style={labelStyle}>{info.label}</div>
            {info.isLink ? (
              <a href={info.href} style={{...valueStyle, ...linkStyle}} target="_blank" rel="noopener noreferrer">
                {info.value}
              </a>
            ) : (
              <div style={valueStyle}>{info.value}</div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact; 