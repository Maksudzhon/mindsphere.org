import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Silence benign Vite HMR websocket connection errors in sandbox preview
if (typeof window !== 'undefined') {
  const handleBenignErrors = (event: ErrorEvent | PromiseRejectionEvent) => {
    const message = 'reason' in event 
      ? String(event.reason?.message || event.reason) 
      : String(event.message);

    if (
      message.includes('WebSocket') || 
      message.includes('websocket') || 
      message.includes('vite') || 
      message.includes('HMR')
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  window.addEventListener('error', handleBenignErrors, true);
  window.addEventListener('unhandledrejection', handleBenignErrors, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

