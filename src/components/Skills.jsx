import React from 'react';

const Skills = () => {
  const skillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '15px'
  };

  const skillItemStyle = {
    backgroundColor: '#f0f8ff',
    color: '#2c3e50',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    border: '1px solid #3498db'
  };

  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML/CSS', 
    'Python', 'SQL', 'Git', 'REST APIs',
    'TypeScript', 'Redux', 'Express', 'MongoDB'
  ];

  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <div style={skillsStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={skillItemStyle}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 