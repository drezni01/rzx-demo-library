import './RzxToolbar.css';

export type RzxToolbarProps = {
    title: string;
    items: JSX.Element[];
};

export const RzxToolbar = (props: RzxToolbarProps) => {
    const className = 'rzx-toolbar';

    return (
        <div className={className}>
            <div className={`${className}__title`}>{props.title}</div>{' '}
            {props.title && <div className={`${className}__separator`}></div>}
            <div className={`${className}__items`}>
                {props.items?.map((item, idx) => (
                    <div key={idx}>{item}</div>
                ))}
            </div>
        </div>
    );
};
