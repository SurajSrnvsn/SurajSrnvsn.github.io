import React from 'react';

const About = () => {
  const paragraphStyle = {
    marginBottom: '15px'
  };

  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <p style={paragraphStyle}>
        I am a seasoned software engineer with expertise in full-stack development, specializing in building innovative applications that leverage cutting-edge technologies including machine learning, generative AI, and mobile development.
      </p>
      <p style={paragraphStyle}>
        With a strong background in both frontend and backend technologies, I excel at creating intuitive user experiences while implementing robust backend systems. My expertise spans multiple domains including web applications, mobile development, machine learning pipelines, and generative AI systems.
      </p>
      <p style={paragraphStyle}>
        I am particularly passionate about building solutions that combine technical excellence with real-world impact. My diverse portfolio includes work for enterprise clients like Comcast as well as individual clients and personal projects exploring the boundaries of what's possible with current technologies.
      </p>
    </section>
  );
};

export default About; 