import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerStyle = {
    padding: '40px 20px',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '30px',
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  };

  const skillCategoryStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    padding: '20px',
  };

  const categoryTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '15px',
  };

  const skillListStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const skillItemStyle = {
    marginBottom: '8px',
    fontSize: '0.9rem',
  };

  const skills = {
    'Languages': ['Python', 'Go', 'SQL', 'Scala', 'JavaScript'],
    'Data Engineering': ['Apache Spark', 'Airflow', 'Databricks', 'DBT', 'Fivetran'],
    'Cloud': ['AWS', 'GCP'],
    'Databases': ['Snowflake', 'BigQuery', 'Redshift', 'PostgreSQL', 'MySQL', 'DynamoDB', 'MSSQL'],
    'Web & Mobile': ['Django', 'Go', 'ReactJS', 'React Native'],
    'DevOps': ['Docker', 'Git'],
    'BI Tools': ['Tableau']
  };

  return (
    <motion.section 
      className="section"
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={contentStyle}>
        <motion.h2 style={titleStyle}>Tech Stack</motion.h2>
        <div style={skillsGridStyle}>
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              style={skillCategoryStyle}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={categoryTitleStyle}>{category}</h3>
              <ul style={skillListStyle}>
                {items.map((skill) => (
                  <li key={skill} style={skillItemStyle}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 