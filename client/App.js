import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, AppShell, Header } from '@mantine/core';
import MainRouter from './MainRouter';
import Menu from './components/Menu';
import { AuthProvider } from './components/Providers/AuthProvider';

const App = () => (
  <AuthProvider>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <AppShell
          padding="md"
          navbar={<Menu />}
          header={<Header height={60} />}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <MainRouter />
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  </AuthProvider>
);

export default App;
