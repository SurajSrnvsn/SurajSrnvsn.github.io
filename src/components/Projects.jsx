import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectStyle = {
    cursor: 'pointer',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #eaeaea',
    transition: 'all 0.3s ease',
  };

  const activeProjectStyle = {
    ...projectStyle,
    borderColor: '#3498db',
    boxShadow: '0 2px 10px rgba(52, 152, 219, 0.2)',
  };

  const projectTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: '5px',
  };

  const tagStyle = {
    display: 'inline-block',
    backgroundColor: '#e1f0fa',
    color: '#3498db',
    padding: '3px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    margin: '0 5px 5px 0',
  };

  const detailsStyle = {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #eaeaea',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '0.9rem',
  };

  const projects = [
    {
      id: 1,
      title: 'WaveBaba Data Collector',
      type: 'Mobile App',
      client: 'Individual Client',
      tech: ['React Native', 'Django'],
      description: 'Application to collect data about wave conditions in a descriptive way based on location and surf necessary metrics.',
      details: 'This mobile app allows surfers to log and track wave conditions at their favorite surf spots. Users can record data such as wave height, period, direction, and other surf-related metrics. The app uses location data to categorize observations and provides a comprehensive overview of surf conditions over time.',
      video: null,
    },
    {
      id: 2,
      title: 'WaveBaba ML Pipeline',
      type: 'ML System',
      client: 'Individual Client',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      description: 'Periodically trains across multiple models and compares metrics with real-time observations to choose the best one with continuous improvement.',
      details: 'This ML pipeline processes surf condition data collected from the WaveBaba app and meteorological sources. It trains multiple predictive models (including regression models, random forests, and neural networks) to forecast wave conditions. The system continuously evaluates model performance against real observations, automatically selecting the most accurate model for predictions and improving over time.',
      video: null,
    },
    {
      id: 3,
      title: 'Kaly Management App',
      type: 'Mobile App',
      client: 'Individual Client',
      tech: ['React Native', 'Go'],
      description: 'Management application built with React Native frontend and Go backend.',
      details: 'This mobile application provides comprehensive management tools for business operations. The React Native frontend delivers a smooth, native-like user experience, while the Go backend ensures high performance and reliability. The app includes features such as user management, reporting, and real-time analytics.',
      video: null,
    },
    {
      id: 4,
      title: 'Data Management App',
      type: 'Web App',
      client: 'In-house for Comcast',
      tech: ['React JS', 'Django'],
      description: 'Web application for data management with React frontend and Django backend.',
      details: 'Developed for Comcast internal use, this web application streamlines data management processes. It features a responsive React frontend with intuitive UI components and a robust Django backend handling data processing and storage. The app includes functions for data visualization, reporting, and audit trails, significantly improving operational efficiency.',
      video: null,
    },
    {
      id: 5,
      title: 'DB Connect RAG System',
      type: 'Gen-AI Tool',
      client: 'Comcast Hackathon',
      tech: ['GPT API', 'LLaMA', 'Database Integration'],
      description: 'Retrieval-Augmented Generation system that answers questions by fetching data from databases in real-time.',
      details: 'Developed during a Gen-AI hackathon at Comcast, this RAG system extracts content from user questions and retrieves relevant information from connected databases in real-time. The system combines the capabilities of OpenAI\'s GPT models and Meta\'s LLaMA to generate accurate, contextually relevant responses based on database content, effectively bridging conversational AI with structured data sources.',
      video: null,
    },
    {
      id: 6,
      title: 'Web Summarizer RAG',
      type: 'Hobby Project',
      client: 'Personal',
      tech: ['GPT API', 'Web Scraping', 'NLP'],
      description: 'Summarizes website content by scraping and batch summarizing to reduce token costs.',
      details: 'This hobby project efficiently summarizes web content by first scraping the target site, then intelligently batching content for processing through GPT APIs. The approach significantly reduces token usage and costs while maintaining summary quality. The tool handles articles, research papers, and long-form content, producing concise summaries with the key information preserved.',
      video: null,
    },
    {
      id: 7,
      title: 'Nifty50 Context-Augmented Generation',
      type: 'Hobby Project',
      client: 'Personal',
      tech: ['Gemini 2M', 'Financial Data Analysis'],
      description: 'Experimental CAG system that loads past 3 years of Nifty50 stocks data in pre-loaded context and answers queries in real-time.',
      details: 'This experimental Context-Augmented Generation system uses Google\'s Gemini 2M model with pre-loaded historical data for Nifty50 stocks from the past three years. By embedding this financial data directly in the context, the system can answer complex queries about stock performance, trends, and correlations without additional API calls, providing real-time financial insights with high accuracy.',
      video: null,
    }
  ];

  const toggleProjectDetails = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <p>Click on a project to see details and walkthrough</p>
      
      <div style={{ marginTop: '20px' }}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            style={activeProject === project.id ? activeProjectStyle : projectStyle}
            onClick={() => toggleProjectDetails(project.id)}
          >
            <div style={projectTitleStyle}>{project.title}</div>
            <div style={{ marginBottom: '8px' }}>
              <span style={tagStyle}>{project.type}</span>
              <span style={tagStyle}>Client: {project.client}</span>
              {project.tech.map((tech, index) => (
                <span key={index} style={tagStyle}>{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            
            {activeProject === project.id && (
              <div style={detailsStyle}>
                <h4 style={{ marginBottom: '10px' }}>Detailed Overview</h4>
                <p>{project.details}</p>
                
                {project.video ? (
                  <div style={{ marginTop: '15px' }}>
                    <h4 style={{ marginBottom: '10px' }}>Project Walkthrough</h4>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                      <iframe 
                        src={project.video} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        title={`${project.title} walkthrough`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <div style={{ marginTop: '15px', fontStyle: 'italic' }}>
                    Video walkthrough coming soon
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 