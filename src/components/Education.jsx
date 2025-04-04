import React from 'react';

const Education = () => {
  const educationItemStyle = {
    marginBottom: '20px'
  };

  const schoolStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#2c3e50'
  };

  const degreeStyle = {
    color: '#3498db',
    fontWeight: '500',
    marginBottom: '5px'
  };

  const dateStyle = {
    color: '#7f8c8d',
    fontSize: '0.9rem',
    marginBottom: '8px'
  };

  const education = [
    {
      school: 'University of Technology',
      degree: 'Master of Science in Computer Science',
      date: '2015 - 2017',
      description: 'Specialized in artificial intelligence and machine learning. Graduated with distinction.'
    },
    {
      school: 'State University',
      degree: 'Bachelor of Science in Software Engineering',
      date: '2011 - 2015',
      description: 'Completed capstone project on developing efficient algorithms for data processing.'
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={educationItemStyle}>
          <h3 style={schoolStyle}>{edu.school}</h3>
          <div style={degreeStyle}>{edu.degree}</div>
          <div style={dateStyle}>{edu.date}</div>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education; 