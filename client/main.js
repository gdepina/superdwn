import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(

  // eslint-disable-next-line no-undef
  document.getElementById('root'),

);

root.render(<App />);

// hydrateRoot(App, document.getElementById('root'))
