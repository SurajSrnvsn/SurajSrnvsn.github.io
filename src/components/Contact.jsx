import React from 'react';

const Contact = () => {
  const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const labelStyle = {
    fontWeight: '500',
    minWidth: '80px'
  };

  const linkStyle = {
    color: '#3498db',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1f0fa',
    borderRadius: '50%',
    padding: '5px'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '10px'
  };

  const socialIconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e1f0fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3498db',
    fontSize: '20px',
    transition: 'all 0.3s ease'
  };

  // Simple inline SVG icons
  const EmailIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  const GitHubIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const LocationIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <div style={contactStyle}>
        <div style={contactItemStyle}>
          <EmailIcon />
          <a style={linkStyle} href="mailto:youremail@example.com">youremail@example.com</a>
        </div>
        <div style={contactItemStyle}>
          <LinkedInIcon />
          <a style={linkStyle} href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
        </div>
        <div style={contactItemStyle}>
          <GitHubIcon />
          <a style={linkStyle} href="https://github.com/SurajSrnvsn" target="_blank" rel="noopener noreferrer">github.com/SurajSrnvsn</a>
        </div>
        <div style={contactItemStyle}>
          <LocationIcon />
          <span>Your City, Country</span>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Get In Touch</h3>
        <p style={{ marginBottom: '15px' }}>
          I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out!
        </p>
      </div>
    </section>
  );
};

export default Contact; 