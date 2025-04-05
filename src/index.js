import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { ThemeProvider } from './ThemeContext';
import './styles.css';

// Add Inter font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
); 