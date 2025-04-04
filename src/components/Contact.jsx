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

  const PhoneIcon = () => (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <div style={contactStyle}>
        <div style={contactItemStyle}>
          <PhoneIcon />
          <a style={linkStyle} href="tel:9094301550">9094301550</a>
        </div>
        <div style={contactItemStyle}>
          <EmailIcon />
          <a style={linkStyle} href="mailto:surajsrnvsn@gmail.com">surajsrnvsn@gmail.com</a>
        </div>
        <div style={contactItemStyle}>
          <LinkedInIcon />
          <a style={linkStyle} href="https://linkedin.com/in/suraj-srinivasan" target="_blank" rel="noopener noreferrer">linkedin.com/in/suraj-srinivasan</a>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Get In Touch</h3>
        <p style={{ marginBottom: '15px' }}>
          I'm always open to discussing new opportunities in software engineering, data engineering, and AI/ML projects. Feel free to reach out!
        </p>
      </div>
    </section>
  );
};

export default Contact; 