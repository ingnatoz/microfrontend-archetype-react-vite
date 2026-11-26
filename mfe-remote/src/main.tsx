// Standalone entry point: develop and test the remote without the App Shell.
// Inside the App Shell this file is not used: the host loads ./RemoteApp.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RemoteApp from './RemoteApp';
import './styles/standalone.css';

const container = document.getElementById('root');
if (!container) throw new Error('Element #root not found.');

createRoot(container).render(
  <StrictMode>
    <main className="standalone">
      <RemoteApp />
    </main>
  </StrictMode>,
);
