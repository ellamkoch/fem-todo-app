//react imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//style imports
import './styles/index.css';
import './styles/main.scss';
// app import
import App from './App.jsx';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component inside StrictMode
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
