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

  const jobs = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Engineer',
      date: 'Jan 2022 - Present',
      description: 'Led development of core features for the company\'s flagship product. Mentored junior developers and implemented best practices for code quality.'
    },
    {
      company: 'Digital Solutions LLC',
      position: 'Software Developer',
      date: 'Mar 2019 - Dec 2021',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with the UX team to implement responsive designs.'
    },
    {
      company: 'CodeCraft Studios',
      position: 'Junior Developer',
      date: 'Jun 2017 - Feb 2019',
      description: 'Assisted in building and testing features for client websites. Participated in code reviews and quality assurance processes.'
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
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience; 