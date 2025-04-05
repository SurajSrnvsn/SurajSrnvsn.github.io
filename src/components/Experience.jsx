import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeJob, setActiveJob] = useState(null);

  const containerStyle = {
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  };

  const jobItemStyle = {
    marginBottom: '30px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const activeJobStyle = {
    ...jobItemStyle,
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(58, 123, 213, 0.3)',
  };

  const companyStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '5px',
  };

  const positionStyle = {
    fontSize: '1.1rem',
    color: '#3a7bd5',
    fontWeight: '500',
    marginBottom: '5px',
  };

  const dateStyle = {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '15px',
  };

  const teamInfoStyle = {
    fontStyle: 'italic',
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '15px',
  };

  const bulletStyle = {
    display: 'flex',
    marginBottom: '12px',
    alignItems: 'flex-start',
  };

  const bulletPointStyle = {
    minWidth: '8px',
    height: '8px',
    backgroundColor: '#3a7bd5',
    borderRadius: '50%',
    marginRight: '12px',
    marginTop: '5px',
  };

  const keywordStyle = {
    backgroundColor: 'rgba(58, 123, 213, 0.1)',
    color: '#3a7bd5',
    padding: '2px 8px',
    borderRadius: '4px',
    fontWeight: '500',
    fontSize: '0.9em',
    margin: '0 2px',
  };

  const metricStyle = {
    fontWeight: '600',
    color: '#00d2ff',
  };

  const jobs = [
    {
      id: 1,
      company: 'Comcast - Sky',
      position: 'Engineer II',
      date: 'Jan 2023 - May 2024',
      teamInfo: 'Data & Analytics Team | Collaborated with cross-functional teams',
      responsibilities: [
        <>Built an in-house <span style={keywordStyle}>AI-powered data ingestion tool</span> for metadata extraction and content generation, reducing manual content tagging time by <span style={metricStyle}>78%</span> and improving discoverability across <span style={metricStyle}>50K+</span> media assets.</>,
        <>Developed a <span style={keywordStyle}>finance-focused RAG system</span> using <span style={keywordStyle}>LLMs</span> and <span style={keywordStyle}>dynamic SQL generation</span>, achieving <span style={metricStyle}>95%</span> accuracy in financial report querying across <span style={metricStyle}>8</span> different database schemas.</>,
        <>Managed operational analytics with <span style={keywordStyle}>12+ Airflow jobs</span> for Sky Germany, processing <span style={metricStyle}>2TB+</span> daily data with <span style={metricStyle}>99.7%</span> reliability. Implemented <span style={keywordStyle}>data quality frameworks</span> reducing issues by <span style={metricStyle}>82%</span>.</>,
        <>Set up <span style={keywordStyle}>ML model monitoring pipelines</span> with automatic retraining based on data drift detection, maintaining model accuracy above <span style={metricStyle}>92%</span> threshold. Implemented <span style={keywordStyle}>A/B testing framework</span> for model comparison.</>,
        <>Reduced processing time by <span style={metricStyle}>66%</span> using <span style={keywordStyle}>parallel task execution</span> in Airflow, saving approximately <span style={metricStyle}>400</span> compute hours monthly. Implemented <span style={keywordStyle}>cost optimization</span> strategies across data pipelines.</>,
        <>Led migration from <span style={keywordStyle}>legacy ETL processes</span> to modern data stack, reducing maintenance overhead by <span style={metricStyle}>45%</span> and improving data freshness by <span style={metricStyle}>3 hours</span>.</>,
        <>Implemented comprehensive <span style={keywordStyle}>logging and monitoring</span> systems across all data pipelines, reducing mean time to recovery (MTTR) by <span style={metricStyle}>60%</span> and improving overall system reliability.</>
      ]
    },
    {
      id: 2,
      company: 'Systech Solutions - FOX',
      position: 'Software Engineer',
      date: 'Jan 2020 - Dec 2022',
      teamInfo: 'Media Analytics & Mobile Development Team',
      responsibilities: [
        <>Built <span style={keywordStyle}>React Native features</span> for data collection and ML integration, increasing field reporting compliance by <span style={metricStyle}>46%</span>. Implemented <span style={keywordStyle}>offline-first architecture</span> for on-location data gathering.</>,
        <>Designed <span style={keywordStyle}>ETL pipelines</span> in Databricks using <span style={keywordStyle}>delta tables</span>, delivering <span style={metricStyle}>30%</span> faster performance on <span style={metricStyle}>100M+</span> daily records with <span style={metricStyle}>25%</span> reduced storage costs through optimized partitioning.</>,
        <>Integrated data from <span style={keywordStyle}>Operative One, Freewheel</span> and other platforms, consolidating advertising metrics across <span style={metricStyle}>3</span> business units with <span style={keywordStyle}>real-time synchronization</span>.</>,
        <>Created <span style={keywordStyle}>data models</span> for Redshift and DynamoDB, reducing query latency by <span style={metricStyle}>40%</span> while implementing comprehensive <span style={keywordStyle}>data lifecycle management</span>.</>,
        <>Developed <span style={keywordStyle}>AWS Lambda-based real-time systems</span> for SCTE, processing <span style={metricStyle}>10K+ events/min</span> with <span style={metricStyle}>99.9%</span> reliability through <span style={keywordStyle}>circuit breakers</span> and <span style={keywordStyle}>retry mechanisms</span>.</>,
        <>Built <span style={keywordStyle}>Tableau dashboards</span> for FOX finance & engagement analytics supporting <span style={metricStyle}>200+</span> concurrent users. Designed <span style={keywordStyle}>automated reporting</span> workflows for executive stakeholders.</>,
        <>Implemented comprehensive <span style={keywordStyle}>data governance framework</span> with role-based access control, reducing unauthorized access incidents by <span style={metricStyle}>90%</span> while maintaining regulatory compliance.</>
      ]
    }
  ];

  return (
    <motion.section 
      className="section"
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title">Experience</h2>
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            style={activeJob === job.id ? activeJobStyle : jobItemStyle}
            onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={companyStyle}>{job.company}</h3>
            <div style={positionStyle}>{job.position}</div>
            <div style={dateStyle}>{job.date}</div>
            <div style={teamInfoStyle}>{job.teamInfo}</div>
            {activeJob === job.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                {job.responsibilities.map((responsibility, index) => (
                  <div key={index} style={bulletStyle}>
                    <div style={bulletPointStyle}></div>
                    <div>{responsibility}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience; 