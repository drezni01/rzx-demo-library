import React from 'react';
import ReactDOM from 'react-dom/client';
import {Code} from './pages/Code';
import {Grid} from './pages/Grid';
import {faBarsProgress, faCode, faTableList, faWindowRestore} from '@fortawesome/free-solid-svg-icons';
import {RzxAppSpec, RzxAppTheme} from './application/RzxAppSpec';
import {Toolbars} from './pages/Toolbars';
import {ModuleRegistry, AllCommunityModule} from 'ag-grid-community';
import {Dialogs} from './pages/Dialogs';
import {RzxApp} from './application/RzxApp';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import {FocusStyleManager} from '@blueprintjs/core';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ModuleRegistry.registerModules([AllCommunityModule]);
FocusStyleManager.onlyShowFocusOnTabs();

const appSpec: RzxAppSpec = {
    theme: RzxAppTheme.DARK,
    navItems: [
        {title: 'Code snippets', icon: faCode, path: '/home', element: <Code />},
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
