import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type RzxAppSpec = {
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

export enum VisualIntent {
    NONE = 'none',
    PRIMARY = 'primary',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger'
}

export type MarginSpec = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};
