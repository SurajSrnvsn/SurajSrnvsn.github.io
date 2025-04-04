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
      school: 'IIIT Bangalore',
      degree: 'Executive PG in ML & AI',
      date: '2021 - 2022',
      description: ''
    },
    {
      school: 'Ramakrishna Mission Vivekananda College',
      degree: 'BCA',
      date: '2016 - 2019',
      description: ''
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
          {edu.description && <p>{edu.description}</p>}
        </div>
      ))}
    </section>
  );
};

export default Education; 