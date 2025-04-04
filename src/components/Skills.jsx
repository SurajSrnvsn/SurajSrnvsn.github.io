import React from 'react';

const Skills = () => {
  const categoryStyle = {
    marginBottom: '20px'
  };

  const categoryTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: '10px'
  };

  const skillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const skillItemStyle = {
    backgroundColor: '#f0f8ff',
    color: '#2c3e50',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    border: '1px solid #3498db'
  };

  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux', 'Responsive Design']
    },
    {
      name: 'Backend Development',
      skills: ['Django', 'Go', 'Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'SQL/NoSQL Databases']
    },
    {
      name: 'AI & Machine Learning',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Gemini API', 'LLaMA', 'RAG/CAG Systems']
    },
    {
      name: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'GCP', 'Testing', 'Agile Methodologies']
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      
      {skillCategories.map((category, index) => (
        <div key={index} style={categoryStyle}>
          <h3 style={categoryTitleStyle}>{category.name}</h3>
          <div style={skillsStyle}>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={skillItemStyle}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills; 