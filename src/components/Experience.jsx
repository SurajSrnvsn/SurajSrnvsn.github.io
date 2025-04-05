import React from 'react';

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="experience-item">
        <h3>Software Engineer</h3>
        <p className="company">Tata Consultancy Services</p>
        <p className="duration">Jan 2023 - Present</p>
        <ul>
          <li>Developed and maintained <span className="highlight">10+ Jenkins pipelines</span> for automated testing and deployment</li>
          <li>Created <span className="highlight">5+ Python scripts</span> for test automation and data processing</li>
          <li>Implemented <span className="highlight">3+ automation frameworks</span> using Python and Selenium</li>
          <li>Collaborated with team members to integrate automated tests into CI/CD pipelines</li>
          <li>Participated in code reviews and contributed to improving code quality</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Software Engineer Intern</h3>
        <p className="company">Tata Consultancy Services</p>
        <p className="duration">Jul 2022 - Dec 2022</p>
        <ul>
          <li>Assisted in developing and maintaining Jenkins pipelines</li>
          <li>Worked on Python scripts for test automation</li>
          <li>Learned and implemented best practices in software development</li>
          <li>Participated in team meetings and project discussions</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience; 