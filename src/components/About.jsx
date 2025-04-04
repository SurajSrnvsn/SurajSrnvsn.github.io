import React from 'react';

const About = () => {
  const paragraphStyle = {
    marginBottom: '15px'
  };

  const highlightStyle = {
    fontWeight: '500',
    color: '#3498db'
  };

  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <p style={paragraphStyle}>
        Data-driven Software Engineer with <span style={highlightStyle}>4+ years of experience</span> specializing in backend development, data pipelines, and AI/ML integration. Known for optimizing workflows that deliver measurable business impact through technical excellence.
      </p>
      <p style={paragraphStyle}>
        My expertise spans designing <span style={highlightStyle}>high-performance ETL systems</span> (improving throughput by up to 66%), implementing <span style={highlightStyle}>scalable AI solutions</span> for enterprise clients, and developing <span style={highlightStyle}>cloud-native applications</span> with AWS and GCP.
      </p>
      <p style={paragraphStyle}>
        I excel at translating complex business requirements into elegant technical solutions, particularly for data-intensive applications in the media and entertainment industry, with a focus on creating value through analytics and automation.
      </p>
    </section>
  );
};

export default About; 