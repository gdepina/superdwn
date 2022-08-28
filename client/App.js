import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import MainRouter from './MainRouter';
import Menu from './components/Menu';
import { AuthProvider } from './components/Providers/AuthProvider';
import { CartProvider } from './components/Providers/CartProvider';

import SearchBar from './components/SearchProducts';

const App = () => (
  <AuthProvider>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
        <CartProvider>
          <BrowserRouter>
            <AppShell
              padding="md"
              navbar={<Menu />}
              header={
                <Header height={68}>
                  <SearchBar />
                </Header>
              }
              styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
              })}
            >
              <MainRouter />
            </AppShell>
          </BrowserRouter>
        </CartProvider>
      </NotificationsProvider>
    </MantineProvider>
  </AuthProvider>
);

export default App;
