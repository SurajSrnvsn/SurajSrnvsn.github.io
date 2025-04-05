import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const containerStyle = {
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  };

  const projectStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const activeProjectStyle = {
    ...projectStyle,
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(58, 123, 213, 0.3)',
  };

  const projectTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '10px',
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: 'rgba(58, 123, 213, 0.1)',
    color: '#3a7bd5',
    borderRadius: '20px',
    fontSize: '0.8rem',
    margin: '0 5px 5px 0',
  };

  const techTagStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: 'rgba(0, 210, 255, 0.1)',
    color: '#00d2ff',
    borderRadius: '20px',
    fontSize: '0.8rem',
    margin: '0 5px 5px 0',
  };

  const detailsStyle = {
    marginTop: '20px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const challengesHeaderStyle = {
    fontSize: '1.1rem',
    fontWeight: '500',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#2c3e50',
  };

  const sectionDividerStyle = {
    margin: '20px 0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const videoPlaceholderStyle = {
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
  };

  const techHighlightStyle = {
    fontWeight: '500',
    color: '#3a7bd5',
  };

  const projects = [
    {
      id: 1,
      title: 'WaveBaba Data Collector',
      type: 'Mobile App',
      client: 'Individual Client',
      tech: ['React Native', 'Django', 'PostgreSQL', 'REST API', 'AWS S3', 'Redux', 'JWT Auth', 'Mapbox'],
      description: 'Mobile application to collect and analyze surf conditions data with location-based tracking and metrics.',
      details: 'Developed a comprehensive mobile application that allows surfers to record, analyze, and share detailed wave conditions. The app includes location-based data collection, statistical analysis of wave patterns, and a social component for sharing reports. Implemented real-time data synchronization and offline capabilities.',
      challenges: [
        'Implementing accurate geolocation with offline capabilities and battery optimization',
        'Designing intuitive UI for complex data input during outdoor activities',
        'Optimizing database schema for efficient location-based queries',
        'Handling real-time data synchronization with conflict resolution'
      ],
      keyFeatures: [
        'GPS-based location tracking with offline data storage and battery optimization',
        'Custom visualization of wave conditions and trends with predictive analytics',
        'Integration with weather APIs for forecast comparison and validation',
        'Social sharing and community reports with gamification elements',
        'Advanced search and filtering based on wave conditions and locations',
        'Automated data quality checks and validation rules'
      ],
      achievements: [
        'Achieved 99.9% data accuracy through automated validation',
        'Reduced battery consumption by 40% through optimized location services',
        'Grew user base to 10,000+ active users in 6 months',
        'Implemented real-time data sync with 99.99% reliability'
      ],
      video: null,
      imagePlaceholder: 'Wave data collection interface with height, period and direction inputs'
    },
    {
      id: 2,
      title: 'WaveBaba ML Pipeline',
      type: 'ML System',
      client: 'Individual Client',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Docker', 'AWS Lambda', 'SageMaker', 'Redis'],
      description: 'Automated ML pipeline for wave prediction using multiple models with continuous improvement.',
      details: 'Built a sophisticated machine learning pipeline that continuously trains and evaluates multiple forecasting models against real-world observations. The system automatically selects the best-performing model for each location and condition type. Implemented automated retraining and model versioning.',
      challenges: [
        'Creating a reliable automated validation system against real-world observations',
        'Implementing efficient model versioning and deployment with rollback capabilities',
        'Handling highly variable seasonal data patterns and outliers',
        'Optimizing model inference for real-time predictions'
      ],
      keyFeatures: [
        'Automated model training and evaluation pipeline with A/B testing',
        'Multi-model comparison framework with weighted metrics and confidence scoring',
        'Continuous integration with oceanographic data sources and real-time updates',
        'Adaptive prediction confidence scoring with uncertainty estimation',
        'Automated feature engineering and selection pipeline',
        'Model explainability and interpretability tools'
      ],
      achievements: [
        'Achieved 85% prediction accuracy for wave height and period',
        'Reduced model training time by 60% through parallel processing',
        'Implemented automated model retraining with 99.9% uptime',
        'Reduced prediction latency to under 100ms for real-time use'
      ],
      video: null,
      imagePlaceholder: 'Dashboard showing model performance comparison and accuracy metrics'
    },
    {
      id: 3,
      title: 'Kaly Management App',
      type: 'Mobile App',
      client: 'Individual Client',
      tech: ['React Native', 'Go', 'MongoDB', 'Redux', 'JWT Auth', 'WebSocket', 'Redis', 'AWS'],
      description: 'Comprehensive business management mobile application with secure authentication and real-time analytics.',
      details: 'Created a full-featured management application that provides business intelligence, operations tracking, and administrative tools. The app features a responsive React Native frontend and high-performance Go backend with comprehensive authentication and real-time updates.',
      challenges: [
        'Building a performant cross-platform mobile experience with complex functionality',
        'Implementing secure authentication and role-based permissions with audit logging',
        'Designing a scalable Go backend architecture with microservices',
        'Handling real-time data synchronization across multiple devices'
      ],
      keyFeatures: [
        'Real-time operational dashboards and analytics with custom visualizations',
        'Role-based access control system with granular permissions',
        'Offline-first architecture with conflict resolution and data synchronization',
        'Push notification system for alerts and updates with delivery tracking',
        'Automated reporting and data export capabilities',
        'Integration with third-party services and APIs'
      ],
      achievements: [
        'Reduced operational reporting time by 70%',
        'Achieved 99.99% uptime for critical business operations',
        'Implemented real-time sync with 99.9% reliability',
        'Reduced server response time to under 200ms'
      ],
      video: null,
      imagePlaceholder: 'Management dashboard showing key business metrics and controls'
    },
    {
      id: 4,
      title: 'Data Management App',
      type: 'Web App',
      client: 'In-house for Comcast',
      tech: ['React JS', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Elasticsearch', 'Docker', 'Kubernetes'],
      description: 'Enterprise data management platform for tracking, processing, and analyzing media content.',
      details: 'Developed an internal data management platform that enables efficient tracking and analysis of media assets. The application provides powerful search capabilities, metadata management, and integration with existing enterprise systems. Implemented advanced caching and performance optimization.',
      challenges: [
        'Handling large media metadata sets with complex relationships and versioning',
        'Designing an intuitive interface for non-technical users with complex workflows',
        'Integrating with multiple enterprise data sources and authentication systems',
        'Optimizing search performance for large datasets'
      ],
      keyFeatures: [
        'Advanced search and filtering of media assets with faceted navigation',
        'Metadata editing and enrichment workflows with validation rules',
        'Audit logging and compliance tracking with automated reporting',
        'Customizable dashboards and reports with scheduled delivery',
        'Real-time collaboration and commenting system',
        'Automated data quality checks and validation'
      ],
      achievements: [
        'Reduced metadata management time by 65%',
        'Improved search performance by 80% through optimized indexing',
        'Achieved 99.9% data accuracy through automated validation',
        'Reduced storage costs by 40% through data optimization'
      ],
      video: null,
      imagePlaceholder: 'Data management interface showing search, filter and edit capabilities'
    },
    {
      id: 5,
      title: 'DB Connect RAG System',
      type: 'Gen-AI Tool',
      client: 'Comcast Hackathon',
      tech: ['Python', 'GPT API', 'LLaMA', 'SQL', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      description: 'Retrieval-Augmented Generation system connecting natural language queries to database data in real-time.',
      details: 'Created an innovative RAG system that translates natural language questions into dynamic SQL queries, retrieving relevant information from databases and formatting responses in a conversational manner. The system supports multiple database types and schemas without predefined mappings.',
      challenges: [
        'Converting natural language to accurate SQL across different schemas and dialects',
        'Ensuring security and preventing SQL injection in generated queries',
        'Optimizing token usage and retrieval relevance for LLM context',
        'Handling complex joins and aggregations in generated queries'
      ],
      keyFeatures: [
        'Natural language to SQL translation with schema awareness',
        'Support for multiple database types and schemas with automatic mapping',
        'Dynamic query construction with security controls and validation',
        'Contextual response formatting with database data and explanations',
        'Query optimization and caching for frequently asked questions',
        'Interactive query refinement and clarification system'
      ],
      achievements: [
        'Achieved 95% accuracy in SQL query generation',
        'Reduced query response time by 70% through caching',
        'Implemented security controls with zero injection vulnerabilities',
        'Supported 8 different database types with automatic schema mapping'
      ],
      video: null,
      imagePlaceholder: 'Interface showing natural language query and resulting database information'
    },
    {
      id: 6,
      title: 'Web Summarizer RAG',
      type: 'Hobby Project',
      client: 'Personal',
      tech: ['Python', 'GPT API', 'BeautifulSoup', 'FastAPI', 'Redis', 'Docker', 'NLTK', 'SpaCy'],
      description: 'Efficient web content summarization tool using intelligent chunking and caching.',
      details: 'Built a web content summarization tool that intelligently scrapes, chunks, and processes web content for efficient summarization. The system uses a combination of semantic chunking and caching to minimize token usage while maintaining summary quality.',
      challenges: [
        'Developing intelligent chunking strategies for different content types and languages',
        'Balancing summary quality with token usage efficiency',
        'Handling varied and unpredictable web page structures',
        'Implementing effective caching strategies for similar content'
      ],
      keyFeatures: [
        'Adaptive web scraping with content extraction and cleaning',
        'Semantic chunking for coherent summarization with context preservation',
        'Token-efficient processing pipeline with intelligent batching',
        'Caching system for frequently requested content with versioning',
        'Multi-language support with automatic language detection',
        'Customizable summary length and style options'
      ],
      achievements: [
        'Reduced token usage by 60% through optimized chunking',
        'Achieved 90% accuracy in content extraction',
        'Implemented caching with 80% hit rate for similar content',
        'Supported 5 languages with automatic detection'
      ],
      video: null,
      imagePlaceholder: 'Web interface showing original article and generated summary'
    },
    {
      id: 7,
      title: 'Nifty50 Context-Augmented Generation',
      type: 'Hobby Project',
      client: 'Personal',
      tech: ['Python', 'Gemini 2M API', 'Pandas', 'NumPy', 'Streamlit', 'Redis', 'Docker', 'Plotly'],
      description: 'Financial analysis tool using preloaded stock data context for LLM-based insights.',
      details: 'Developed an experimental context-augmented generation system that loads 3 years of Nifty50 stock data directly into the prompt context. This approach enables the LLM to answer detailed questions about stock performance without additional API calls or database queries.',
      challenges: [
        'Efficiently formatting large datasets for context inclusion with compression',
        'Optimizing prompt design for financial analysis questions and terminology',
        'Balancing context size with model token limitations',
        'Handling real-time market data updates and synchronization'
      ],
      keyFeatures: [
        'Pre-loaded financial data context with efficient compression',
        'Real-time query processing without database lookups',
        'Technical and fundamental analysis capabilities with visualization',
        'Interactive visualization of results with custom charts',
        'Historical data analysis with trend detection',
        'Custom financial indicators and metrics calculation'
      ],
      achievements: [
        'Reduced response time to under 2 seconds for complex queries',
        'Achieved 85% accuracy in technical analysis predictions',
        'Implemented real-time data updates with 99.9% reliability',
        'Supported 50+ custom financial indicators'
      ],
      video: null,
      imagePlaceholder: 'Dashboard showing stock analysis and natural language query interface'
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
        <h2 className="section-title">Projects</h2>
        <p style={{ marginBottom: '30px', color: '#666' }}>
          Click on a project to see details and tech stack. Video walkthroughs coming soon.
        </p>
        
        {projects.map((project) => (
          <motion.div
            key={project.id}
            style={activeProject === project.id ? activeProjectStyle : projectStyle}
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div style={projectTitleStyle}>{project.title}</div>
            <div style={{ marginBottom: '15px' }}>
              <span style={tagStyle}>{project.type}</span>
              <span style={tagStyle}>Client: {project.client}</span>
            </div>
            <p style={{ color: '#666', marginBottom: '15px' }}>{project.description}</p>
            
            {activeProject === project.id && (
              <motion.div
                style={detailsStyle}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <h4 style={{ marginBottom: '15px' }}>Overview</h4>
                <p style={{ color: '#666', marginBottom: '20px' }}>{project.details}</p>
                
                <div style={sectionDividerStyle}></div>
                
                <div>
                  <h4 style={challengesHeaderStyle}>Technical Challenges</h4>
                  <ul style={{ paddingLeft: '20px', color: '#666' }}>
                    {project.challenges.map((challenge, index) => (
                      <li key={index} style={{ marginBottom: '8px' }}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginTop: '20px' }}>
                  <h4 style={challengesHeaderStyle}>Key Features</h4>
                  <ul style={{ paddingLeft: '20px', color: '#666' }}>
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={sectionDividerStyle}></div>
                
                <div>
                  <h4 style={challengesHeaderStyle}>Tech Stack</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {project.tech.map((tech, index) => (
                      <span key={index} style={techTagStyle}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                {project.video ? (
                  <div style={{ marginTop: '20px' }}>
                    <h4 style={{ marginBottom: '10px' }}>Project Demo</h4>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                      <iframe 
                        src={project.video} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        title={`${project.title} demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <motion.div 
                    style={videoPlaceholderStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p style={{ fontWeight: '500', marginBottom: '10px' }}>Video Demo Coming Soon</p>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                      A walkthrough of <span style={techHighlightStyle}>{project.title}</span> will be added here.
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '10px', fontStyle: 'italic' }}>
                      {project.imagePlaceholder}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects; 