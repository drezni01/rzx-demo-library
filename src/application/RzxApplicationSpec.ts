import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type RzxApplicationSpec = {
    theme: RzxAppTheme;
    navItems: RzxSideNavItem[];
};

export type RzxSideNavItem = {
    title: string;
    icon: IconDefinition;
    path: string;
    element: JSX.Element;
    action?: () => void;
};

export enum RzxAppTheme {
    LIGHT = 'light',
    DARK = 'dark'
}
