import {createBrowserRouter, NavigateFunction} from 'react-router-dom';
import {RzxSideNavItem} from '../application/RzxAppSpec';
import {RzxpAppComponent} from '../application/RzxApp';

export class RzxAppNavigator {
    router;
    navigate: NavigateFunction;
    navItems: RzxSideNavItem[];

    constructor(navItems: RzxSideNavItem[]) {
        this.navItems = navItems.map(item => ({...item, action: () => this.navigate(item.path)}));

        this.router = createBrowserRouter([
            {
                path: '/',
                element: <RzxpAppComponent />,
                children: this.navItems
            }
        ]);
    }
}
