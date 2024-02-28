import React from 'react';
import { ROUTES } from './route/routes';
import { useRoutes } from 'react-router-dom';
// import './index.css';



function App () {
    return useRoutes(ROUTES)
}

export default App;
