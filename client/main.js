import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'


const root = createRoot(
    document.getElementById("root")
);

root.render(<App/>)

//hydrateRoot(App, document.getElementById('root'))
