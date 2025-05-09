import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home';
import {Positions} from './pages/Positions';
import {faDiagramNext, faHome, faTableList} from '@fortawesome/free-solid-svg-icons';
import {RzxAppSpec, RzxAppTheme} from './application/RzxAppSpec';
import {RzxApp} from './application/RzxApp';
import {Toolbars} from './pages/Toolbars';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const appSpec: RzxAppSpec = {
    theme: RzxAppTheme.DARK,
    navItems: [
        {title: 'Home', icon: faHome, path: '/home', element: <Home />},
        {title: 'Toolbars and Buttons', icon: faDiagramNext, path: '/toolbars', element: <Toolbars />},
        {title: 'Positions', icon: faTableList, path: '/positions', element: <Positions />}
    ]
};

root.render(
    <React.StrictMode>
        <RzxApp appSpec={appSpec} />
    </React.StrictMode>
);
