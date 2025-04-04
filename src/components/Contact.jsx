import React from 'react';

const Contact = () => {
  const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const labelStyle = {
    fontWeight: '500',
    minWidth: '80px'
  };

  const linkStyle = {
    color: '#3498db',
    textDecoration: 'none'
  };

  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <div style={contactStyle}>
        <div style={contactItemStyle}>
          <span style={labelStyle}>Email:</span>
          <a style={linkStyle} href="mailto:youremail@example.com">youremail@example.com</a>
        </div>
        <div style={contactItemStyle}>
          <span style={labelStyle}>LinkedIn:</span>
          <a style={linkStyle} href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
        </div>
        <div style={contactItemStyle}>
          <span style={labelStyle}>GitHub:</span>
          <a style={linkStyle} href="https://github.com/SurajSrnvsn" target="_blank" rel="noopener noreferrer">github.com/SurajSrnvsn</a>
        </div>
        <div style={contactItemStyle}>
          <span style={labelStyle}>Location:</span>
          <span>Your City, Country</span>
        </div>
      </div>
    </section>
  );
};

export default Contact; 