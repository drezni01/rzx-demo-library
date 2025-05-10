import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import './RzxButton.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {VisualIntent} from '../application/RzxAppSpec';

export type RzxButtonProps = {
    text?: string;
    tooltip?: string;
    icon?: IconDefinition;
    width?: number;
    height?: number;
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

    return (
        <div className="rzx-button__container">
            <button
                className={className}
                style={{
                    width: width ? `${width}px` : 'undefined',
                    height: props.height ? `${props.height}px` : compact ? '25px' : '32px'
                }}
                onClick={props.onClick}
            >
                {icon && <FontAwesomeIcon icon={icon} />}
                <span>{text}</span>
                {props.children}
            </button>
            {props.tooltip && <span className="tooltip">{props.tooltip}</span>}
        </div>
    );
};
