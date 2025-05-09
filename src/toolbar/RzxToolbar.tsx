import './RzxToolbar.scss';
import classNames from 'classnames';

export type RzxToolbarProps = {
    title: string;
    compact?: boolean;
    items: JSX.Element[];
};

export const RzxToolbar = (props: RzxToolbarProps) => {
    const {compact} = props;
    const className = classNames('rzx-toolbar', compact ? 'rzx-toolbar__compact' : '');

    return (
        <div className={className}>
            <div className={`rzx-toolbar__title ${compact ? 'compact' : ''}`}>{props.title}</div>{' '}
            {props.title && <div className={'rzx-toolbar__separator'}></div>}
            <div className={'rzx-toolbar__items'}>
                {props.items?.map((item, idx) => (
                    <div key={idx}>{item}</div>
                ))}
            </div>
        </div>
    );
};
