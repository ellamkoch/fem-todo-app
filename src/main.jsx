/**
 * Application entry point.
 * Wraps the app with providers and routing.
 * @see ThemeProvider - Provides theme context (light/dark mode)
 * @see App - Root component
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@styles/index.css';
import App from '@/App.jsx';
import { ThemeProvider } from '@/providers/themeProvider';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
