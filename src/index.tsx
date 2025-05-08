import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import rzxAppModel from './application/RzxApplicationModel';
import {Home} from './pages/Home';
import {Positions} from './pages/Positions';
import {faHome, faTableList} from '@fortawesome/free-solid-svg-icons';
import {RzxAppTheme} from './application/RzxApplicationSpec';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

rzxAppModel.configureAppplication({
    theme: RzxAppTheme.DARK,
    navItems: [
        {title: 'Home', icon: faHome, path: '/home', element: <Home />},
        {title: 'Positions', icon: faTableList, path: '/positions', element: <Positions />}
    ]
});

root.render(
    <React.StrictMode>
        <RouterProvider router={rzxAppModel.appNavigator.router} />
    </React.StrictMode>
);
