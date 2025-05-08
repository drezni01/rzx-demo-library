import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import './RzxButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export type RzxButtonProps = {
    text?: string;
    icon?: IconDefinition;
};

export const RzxButton = (props: RzxButtonProps) => {
    return (
        <div className="rzx-button">
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            <span>{props.text}</span>
        </div>
    );
};
