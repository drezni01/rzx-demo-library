import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home';
import {Grid} from './pages/Grid';
import {faBarsProgress, faHome, faTableList, faWindowRestore} from '@fortawesome/free-solid-svg-icons';
import {RzxAppSpec, RzxAppTheme} from './application/RzxAppSpec';
import {RzxApp} from './application/RzxApp';
import {Toolbars} from './pages/Toolbars';
import {ModuleRegistry, AllCommunityModule} from 'ag-grid-community';
import {Dialogs} from './pages/Dialogs';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ModuleRegistry.registerModules([AllCommunityModule]);

const appSpec: RzxAppSpec = {
    theme: RzxAppTheme.DARK,
    navItems: [
        {title: 'Home', icon: faHome, path: '/home', element: <Home />},
        {title: 'Toolbars and Buttons', icon: faBarsProgress, path: '/toolbars', element: <Toolbars />},
        {title: 'Grid w/options', icon: faTableList, path: '/positions', element: <Grid />},
        {title: 'Modals', icon: faWindowRestore, path: '/modals', element: <Dialogs />}
    ]
};

root.render(
    <React.StrictMode>
        <RzxApp appSpec={appSpec} />
    </React.StrictMode>
);
