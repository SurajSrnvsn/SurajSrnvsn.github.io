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
      name: 'Languages',
      skills: ['Python', 'Go', 'SQL', 'Scala', 'JavaScript']
    },
    {
      name: 'Data Engineering',
      skills: ['Apache Spark', 'Airflow', 'Databricks', 'DBT', 'Fivetran']
    },
    {
      name: 'Cloud & Infrastructure',
      skills: ['AWS', 'GCP', 'Docker', 'Git']
    },
    {
      name: 'Databases',
      skills: ['Snowflake', 'BigQuery', 'Redshift', 'PostgreSQL', 'MySQL', 'DynamoDB', 'MSSQL']
    },
    {
      name: 'Machine Learning',
      skills: ['LangChain', 'Ollama', 'GPT', 'RAG techniques']
    },
    {
      name: 'Web & Mobile',
      skills: ['Django', 'ReactJS', 'React Native', 'REST']
    },
    {
      name: 'BI Tools',
      skills: ['Tableau']
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