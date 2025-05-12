import './RzxToolbar.scss';
import classNames from 'classnames';

export type RzxToolbarProps = {
    title?: string;
    compact?: boolean;
    leftItems?: JSX.Element[];
    rightItems?: JSX.Element[];
};

export const RzxToolbar = (props: RzxToolbarProps) => {
    const {compact} = props;
    const className = classNames('rzx-toolbar', compact ? 'rzx-toolbar__compact' : '');

    return (
        <div className={className}>
            <div className={`rzx-toolbar__title ${compact ? 'compact' : ''}`}>{props.title}</div>{' '}
            <div className={'rzx-toolbar__left-items'}>
                {props.leftItems?.map((item, idx) => (
                    <div className="rzx-toolbar__item-container" key={idx}>
                        {item}
                    </div>
                ))}
            </div>
            <div className={'rzx-toolbar__right-items'}>
                {props.rightItems?.map((item, idx) => (
                    <div className="rzx-toolbar__item-container" key={idx}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const RzxToolbarSeparator = () => {
    return <div className={'rzx-toolbar__separator'}></div>;
};
