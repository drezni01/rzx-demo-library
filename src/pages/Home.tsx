import {Classes, Tooltip} from '@blueprintjs/core';

export function Home() {
    return (
        <>
            <div className="home_toolbar" />
            <div>
                This line's tooltip{' '}
                <Tooltip
                    className={Classes.TOOLTIP_INDICATOR}
                    content={<span>This tooltip has the minimal style applied!</span>}
                    minimal={true}
                >
                    is minimal.
                </Tooltip>
            </div>
        </>
    );
}
