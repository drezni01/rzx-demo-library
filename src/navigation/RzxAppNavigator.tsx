import {createBrowserRouter, NavigateFunction} from 'react-router-dom';
import {RzxDesktopApp} from '../application/RzxApplication';
import {RzxSideNavItem} from '../application/RzxApplicationSpec';

export class RzxAppNavigator {
    router;
    navigate: NavigateFunction;
    navItems: RzxSideNavItem[];

    constructor(navItems: RzxSideNavItem[]) {
        this.navItems = navItems.map(item => ({...item, action: () => this.navigate(item.path)}));

        this.router = createBrowserRouter([
            {
                path: '/',
                element: <RzxDesktopApp />,
                children: this.navItems
            }
        ]);
    }
}
