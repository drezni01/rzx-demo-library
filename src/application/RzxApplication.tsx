import {observer} from 'mobx-react';
import rzxAppModel, {RzxApplicationModel} from './RzxApplicationModel';
import {Classes, Overlay2, OverlaysProvider, Spinner} from '@blueprintjs/core';
import {RzxCommonDialog} from '../dialogs/RzxDialog';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import './RzxApplication.scss';
import {RzxSideNav} from '../navigation/RzxSideNav';

export function RzxDesktopApp() {
    return <AppContainer model={rzxAppModel} />;
}

const AppContainer = observer(({model}: {model: RzxApplicationModel}) => {
    rzxAppModel.appNavigator.navigate = useNavigate();

    return (
        <>
            <OverlaysProvider>
                <div className="desktop bp5-dark">
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
