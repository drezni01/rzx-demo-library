import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home';
import {Positions} from './pages/Positions';
import {faHome, faTableList} from '@fortawesome/free-solid-svg-icons';
import {RzxAppSpec, RzxAppTheme} from './application/RzxAppSpec';
import {RzxApp} from './application/RzxApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const appSpec: RzxAppSpec = {
    theme: RzxAppTheme.DARK,
    navItems: [
        {title: 'Home', icon: faHome, path: '/home', element: <Home />},
        {title: 'Positions', icon: faTableList, path: '/positions', element: <Positions />}
    ]
};

root.render(
    <React.StrictMode>
        <RzxApp appSpec={appSpec} />
    </React.StrictMode>
);
