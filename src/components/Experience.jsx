import React from 'react';

const Experience = () => {
  const jobItemStyle = {
    marginBottom: '30px'
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

  const teamInfoStyle = {
    fontStyle: 'italic',
    color: '#7f8c8d',
    fontSize: '0.9rem',
    marginBottom: '12px'
  };

  const bulletStyle = {
    display: 'flex',
    marginBottom: '8px',
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

  const keywordStyle = {
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    color: '#2980b9',
    padding: '0 4px',
    borderRadius: '3px',
    fontWeight: '500',
    fontSize: '0.9em'
  };

  const metricStyle = {
    fontWeight: '600',
    color: '#16a085'
  };

  const jobs = [
    {
      company: 'Comcast - Sky',
      position: 'Engineer II',
      date: 'Jan 2023 - May 2024',
      teamInfo: 'Data & Analytics Team | Collaborated with 3 cross-functional teams',
      responsibilities: [
        <>Built an in-house <span style={keywordStyle}>AI-powered metadata extraction tool</span>, reducing manual tagging time by <span style={metricStyle}>78%</span> and improving content discoverability for 50K+ media assets.</>,
        <>Architected a <span style={keywordStyle}>finance-focused RAG system</span> using <span style={keywordStyle}>LLM integration</span> and <span style={keywordStyle}>dynamic SQL generation</span>, delivering accurate financial insights across <span style={metricStyle}>8 different database schemas</span>.</>,
        <>Led operational analytics with <span style={keywordStyle}>12+ Airflow DAGs</span> processing <span style={metricStyle}>2TB+ daily data</span> for Sky Germany, improving ETL reliability from 91% to <span style={metricStyle}>99.7%</span>.</>,
        <>Implemented automated <span style={keywordStyle}>ML model monitoring</span> with retraining triggers based on data drift detection, maintaining model accuracy above <span style={metricStyle}>92%</span> threshold.</>,
        <>Redesigned data pipelines using <span style={keywordStyle}>parallel task execution</span> in Airflow, reducing processing time by <span style={metricStyle}>66%</span> and saving approximately <span style={metricStyle}>400 compute hours</span> monthly.</>
      ]
    },
    {
      company: 'Systech Solutions - FOX',
      position: 'Software Engineer',
      date: 'Jan 2020 - Dec 2022',
      teamInfo: 'Media Analytics & Mobile Development | 5-person team',
      responsibilities: [
        <>Developed <span style={keywordStyle}>React Native mobile features</span> for real-time data collection, increasing field reporting compliance by <span style={metricStyle}>46%</span> and enabling ML-based predictive analytics.</>,
        <>Architected <span style={keywordStyle}>ETL pipelines</span> in Databricks using <span style={keywordStyle}>delta tables</span> with optimized partitioning, achieving <span style={metricStyle}>30% faster</span> query response on 100M+ daily records.</>,
        <>Built integrations with <span style={keywordStyle}>5 media platforms</span> (Operative One, Freewheel, etc.), consolidating advertising data across <span style={metricStyle}>3 business units</span> and enabling unified reporting.</>,
        <>Designed efficient data models for <span style={keywordStyle}>Redshift and DynamoDB</span>, reducing storage costs by <span style={metricStyle}>25%</span> while improving query performance by <span style={metricStyle}>40%</span>.</>,
        <>Created <span style={keywordStyle}>AWS Lambda-based real-time systems</span> for SCTE insertion points, processing <span style={metricStyle}>10K+ events/min</span> with 99.9% reliability.</>,
        <>Built interactive <span style={keywordStyle}>Tableau dashboards</span> supporting <span style={metricStyle}>200+ concurrent users</span> for FOX finance & engagement analytics, delivering critical KPIs to executive leadership.</>
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
          <div style={teamInfoStyle}>{job.teamInfo}</div>
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