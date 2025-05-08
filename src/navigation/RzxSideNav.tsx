import './RzxSideNav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {RzxAppTheme, RzxSideNavItem} from '../application/RzxAppSpec';
import {RzxAppModel} from '../application/RzxAppModel';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {observer} from 'mobx-react';

export const RzxSideNav = observer(({model}: {model: RzxAppModel}) => {
    const navItems = model.appNavigator.navItems,
        theme = model.theme;

    const items = navItems.map((item: RzxSideNavItem) => (
        <div key={item.path} onClick={() => item.action()}>
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="tooltip">{item.title}</span>
        </div>
    ));

    items.push(
        <div key={'theme'} className="theme-switcher" onClick={() => model.toggleTheme()}>
            <FontAwesomeIcon icon={theme === RzxAppTheme.DARK ? faSun : faMoon} size="lg" />
            <span className="tooltip">{`${theme === RzxAppTheme.DARK ? 'Light' : 'Dark'} Theme`}</span>
        </div>
    );

    return (
        <nav className="side-nav">
            <div className="side-nav__items">{items}</div>
        </nav>
    );
});
