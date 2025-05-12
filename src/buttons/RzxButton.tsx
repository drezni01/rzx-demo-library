import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import './RzxButton.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {MarginSpec, VisualIntent} from '../application/RzxAppSpec';
import {Tooltip} from '@blueprintjs/core';

export type RzxButtonProps = {
    text?: string;
    tooltip?: string;
    icon?: IconDefinition;
    width?: number;
    height?: number;
    margin?: MarginSpec;
    minimal?: boolean;
    outline?: boolean;
    compact?: boolean;
    intent?: VisualIntent;
    onClick?: () => void;
    children?: React.ReactNode;
};

export const RzxButton = (props: RzxButtonProps) => {
    const {icon, text, minimal, outline, compact} = props;
    const intent = props.intent || VisualIntent.NONE;

    const className = classNames(
        'rzx-button',
        minimal ? 'rzx-button__minimal' : '',
        !outline ? 'rzx-button__no-outline' : '',
        !text ? 'rzx-button__icon-only' : '',
        compact ? 'rzx-button__compact' : '',
        intent === VisualIntent.NONE ? 'rzx-button__none' : '',
        intent === VisualIntent.PRIMARY ? 'rzx-button__primary' : '',
        intent === VisualIntent.SUCCESS ? 'rzx-button__success' : '',
        intent === VisualIntent.WARNING ? 'rzx-button__warning' : '',
        intent === VisualIntent.DANGER ? 'rzx-button__danger' : ''
    );

    let width = props.width;
    if (!width && !text) width = compact ? 25 : 32;

    return buttonWrapper(
        className,
        width,
        props.height,
        props.margin,
        icon,
        text,
        props.tooltip,
        compact,
        props.onClick,
        props.children
    );
};

function buttonWrapper(className, width, height, margin, icon, text, tooltip, compact, onClick, children) {
    if (!tooltip) return buttonImpl(className, width, height, margin, icon, text, compact, onClick, children);
    else
        return (
            <Tooltip content={tooltip} position="right" compact={true}>
                {buttonImpl(className, width, height, margin, icon, text, compact, onClick, children)}
            </Tooltip>
        );
}

function buttonImpl(className, width, height, margin, icon, text, compact, onClick, children) {
    return (
        <button
            className={className}
            style={{
                width: width ? `${width}px` : 'undefined',
                height: height ? `${height}px` : compact ? '25px' : '32px',
                marginTop: margin?.top ? `${margin.top}px` : '0px',
                marginRight: margin?.right ? `${margin.right}px` : '0px',
                marginBottom: margin?.bottom ? `${margin.bottom}px` : '0px',
                marginLeft: margin?.left ? `${margin.left}px` : '0px'
            }}
            onClick={onClick}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            <span>{text}</span>
            {children}
        </button>
    );
}
