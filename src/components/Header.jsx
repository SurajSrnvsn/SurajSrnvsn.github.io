import React from 'react';

const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const nameStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: '700',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '15px',
    fontWeight: '300',
  };

  return (
    <header style={headerStyle}>
      <h1 style={nameStyle}>Suraj Srnvsn</h1>
      <h2 style={titleStyle}>Software Engineer</h2>
    </header>
  );
};

export default Header; 