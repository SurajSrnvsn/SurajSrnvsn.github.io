import React from 'react';

const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
    color: '#fff',
    padding: '60px 20px 40px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const nameStyle = {
    fontSize: '3rem',
    marginBottom: '10px',
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '15px',
    fontWeight: '300',
    letterSpacing: '1px'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    fontWeight: '300',
    opacity: '0.9',
    maxWidth: '700px',
    margin: '0 auto'
  };

  // Add a decorative pattern to the header
  const patternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)',
    backgroundSize: '30px 30px',
    zIndex: 1,
    opacity: 0.5
  };

  // Content needs to be above the pattern
  const contentStyle = {
    position: 'relative',
    zIndex: 2
  };

  return (
    <header style={headerStyle}>
      <div style={patternStyle}></div>
      <div style={contentStyle}>
        <h1 style={nameStyle}>Suraj Srnvsn</h1>
        <h2 style={titleStyle}>Full-Stack Developer & AI Engineer</h2>
        <p style={subtitleStyle}>
          Building innovative applications at the intersection of web, mobile, and artificial intelligence
        </p>
      </div>
    </header>
  );
};

export default Header; 