import {observer} from 'mobx-react';
import rzxAppModel, {RzxAppModel} from './RzxAppModel';
import {Classes, Overlay2, OverlaysProvider, Spinner} from '@blueprintjs/core';
import {RzxCommonDialog} from '../dialogs/RzxDialog';
import {Navigate, Outlet, RouterProvider, useNavigate} from 'react-router-dom';
import './RzxApp.scss';
import {RzxSideNav} from '../navigation/RzxSideNav';
import {RzxAppSpec} from './RzxAppSpec';

export function DesktopApp() {
    return <RzxAppContainer model={rzxAppModel} />;
}

export function RzxpAppComponent() {
    return <RzxAppContainer model={rzxAppModel} />;
}

export const RzxApp = ({appSpec}: {appSpec: RzxAppSpec}) => {
    rzxAppModel.configureAppplication(appSpec);
    return <RouterProvider router={rzxAppModel.appNavigator.router} />;
};

const RzxAppContainer = observer(({model}: {model: RzxAppModel}) => {
    rzxAppModel.appNavigator.navigate = useNavigate();

    return (
        <>
            <OverlaysProvider>
                <div className="desktop">
                    <RzxSideNav model={rzxAppModel} />
                    <div className="main">
                        <Outlet />
                    </div>

                    <Overlay2
                        className={'mask ' + Classes.OVERLAY_SCROLL_CONTAINER}
                        isOpen={model.isBusy}
                        canEscapeKeyClose={false}
                        canOutsideClickClose={false}
                        onClose={() => model.hideMask()}
                        transitionDuration={100}
                    >
                        <div className="mask-body">
                            <Spinner size={50} style={{margin: 'auto'}} />
                            <div className="mask-text">{model.busyText}</div>
                        </div>
                    </Overlay2>

                    <Overlay2
                        className={'mask ' + Classes.OVERLAY_SCROLL_CONTAINER}
                        isOpen={model.commonDialog.isOpen}
                        canEscapeKeyClose={false}
                        canOutsideClickClose={false}
                        onClose={() => model.commonDialog.close()}
                        transitionDuration={100}
                    >
                        <RzxCommonDialog model={model.commonDialog} />
                    </Overlay2>
                </div>

                <Navigate to="home" />
            </OverlaysProvider>
        </>
    );
});
