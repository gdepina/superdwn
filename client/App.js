import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import MainRouter from './MainRouter';

const App = () => (
  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </MantineProvider>
);

export default App;
