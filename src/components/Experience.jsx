import React from 'react';

const Experience = () => {
  const jobItemStyle = {
    marginBottom: '20px'
  };

  const companyStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#2c3e50'
  };

  const positionStyle = {
    color: '#3498db',
    fontWeight: '500',
    marginBottom: '5px'
  };

  const dateStyle = {
    color: '#7f8c8d',
    fontSize: '0.9rem',
    marginBottom: '8px'
  };

  const bulletStyle = {
    display: 'flex',
    marginBottom: '5px',
  };

  const bulletPointStyle = {
    minWidth: '8px',
    marginRight: '10px',
    marginTop: '8px',
    height: '8px',
    width: '8px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
  };

  const jobs = [
    {
      company: 'Comcast - Sky',
      position: 'Engineer II',
      date: 'Jan 2023 - May 2024',
      responsibilities: [
        'Built an in-house AI-powered data ingestion tool for metadata extraction and content generation.',
        'Developed a finance-focused RAG system using LLMs and dynamic SQL generation.',
        'Managed operational analytics with 12+ Airflow jobs for Sky Germany.',
        'Set up ML model monitoring pipelines with automatic retraining.',
        'Reduced processing time by 66% using parallel task execution in Airflow.'
      ]
    },
    {
      company: 'Systech Solutions - FOX',
      position: 'Software Engineer',
      date: 'Jan 2020 - Dec 2022',
      responsibilities: [
        'Built React Native features for data collection and ML integration.',
        'Designed ETL pipelines in Databricks using delta tables (30% faster).',
        'Integrated data from Operative One, Freewheel, and other platforms.',
        'Created data models for Redshift and DynamoDB.',
        'Developed AWS Lambda-based real-time systems for SCTE.',
        'Built dashboards in Tableau for FOX finance & engagement analytics.'
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={jobItemStyle}>
          <h3 style={companyStyle}>{job.company}</h3>
          <div style={positionStyle}>{job.position}</div>
          <div style={dateStyle}>{job.date}</div>
          {job.responsibilities.map((responsibility, respIndex) => (
            <div key={respIndex} style={bulletStyle}>
              <div style={bulletPointStyle}></div>
              <div>{responsibility}</div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Experience; 