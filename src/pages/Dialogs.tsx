import {
    faCheck,
    faCloudArrowUp,
    faQuestionCircle,
    faSkullCrossbones,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import rzxAppModel from '../application/RzxAppModel';
import {RzxButton} from '../buttons/RzxButton';
import {RzxToolbar, RzxToolbarSeparator} from '../toolbar/RzxToolbar';
import {VisualIntent} from '../application/RzxAppSpec';

export function Dialogs() {
    return (
        <>
            <RzxToolbar
                title="Modal feedback dialogs"
                items={[
                    <RzxButton
                        text="OK"
                        icon={faCheck}
                        width={75}
                        outline={true}
                        onClick={() => {
                            rzxAppModel.info('Request submitted');
                        }}
                    />,
                    <RzxButton
                        text="Confirm"
                        icon={faQuestionCircle}
                        outline={true}
                        intent={VisualIntent.PRIMARY}
                        onClick={() => {
                            rzxAppModel.confirm('Are you sure you want to proceed?', 'User confirmation required');
                        }}
                    />,
                    <RzxButton
                        text="Warn"
                        icon={faTriangleExclamation}
                        width={75}
                        outline={true}
                        intent={VisualIntent.WARNING}
                        onClick={() => {
                            rzxAppModel.warn(
                                'This command will delete all records from the POSITIONS talbe.',
                                'Warning, this action may not be reversible'
                            );
                        }}
                    />,
                    <RzxButton
                        text="Erorr"
                        icon={faSkullCrossbones}
                        width={75}
                        outline={true}
                        intent={VisualIntent.DANGER}
                        onClick={() => {
                            rzxAppModel.error(
                                `TS2551: Property 'onlyShowFocusOnabs' does not exist on type '{ alwaysShowFocus: () => boolean | void; isActive: () => boolean; onlyShowFocusOnTabs: () => boolean | void; }'. Did you mean 'onlyShowFocusOnTabs'?`,
                                'Application Error'
                            );
                        }}
                    />,
                    <RzxToolbarSeparator />,
                    <RzxButton
                        text="Load"
                        icon={faCloudArrowUp}
                        width={75}
                        outline={true}
                        onClick={async () => {
                            rzxAppModel.showMask('Loading...');
                            await new Promise(resolve => setTimeout(resolve, 2000));
                            rzxAppModel.hideMask();
                        }}
                    />
                ]}
            />
        </>
    );
}
