import React from 'react'
import MainRouter from './MainRouter'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';


const App = () => (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
    </MantineProvider>
)

export default App
