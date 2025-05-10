import './RzxSideNav.scss';
import {RzxAppTheme, RzxSideNavItem} from '../application/RzxAppSpec';
import {RzxAppModel} from '../application/RzxAppModel';
import {faDisplay, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {observer} from 'mobx-react';
import {RzxButton} from '../buttons/RzxButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const RzxSideNav = observer(({model}: {model: RzxAppModel}) => {
    const navItems = model.appNavigator.navItems,
        theme = model.theme;

    const items = navItems.map((item: RzxSideNavItem) => (
        <RzxButton
            key={item.path}
            onClick={() => item.action()}
            icon={item.icon}
            minimal={true}
            width={38}
            height={38}
            tooltip={item.title}
        ></RzxButton>
    ));

    items.push(
        <RzxButton
            key={'theme'}
            icon={theme === RzxAppTheme.DARK ? faSun : faMoon}
            width={38}
            height={38}
            minimal={true}
            tooltip={`${theme === RzxAppTheme.DARK ? 'Light' : 'Dark'} Theme`}
            onClick={() => model.toggleTheme()}
        ></RzxButton>
    );

    return (
        <nav className="rzx-side-nav">
            <div className="rzx-app-icon">
                <FontAwesomeIcon icon={faDisplay} size="2x" />
            </div>
            <div className="rzx-side-nav__list">{items}</div>
        </nav>
    );
});
