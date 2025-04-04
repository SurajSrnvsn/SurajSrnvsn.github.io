import React from 'react';

const About = () => {
  const paragraphStyle = {
    marginBottom: '15px'
  };

  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <p style={paragraphStyle}>
        Software Engineer with 4+ years of experience in backend development, system design, and building scalable applications. Experienced in optimizing data workflows, integrating AI/ML-driven solutions, and enhancing structured data retrieval.
      </p>
    </section>
  );
};

export default About; 