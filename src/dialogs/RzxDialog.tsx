import {observer} from 'mobx-react';
import {RzxCommonDialogModel} from './RzxDialogModel';
import {Dialog, DialogBody} from '@blueprintjs/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './RzxDialog.scss';
import {RzxButton} from '../buttons/RzxButton';
import classNames from 'classnames';
import rzxAppModel from '../application/RzxAppModel';
import {RzxAppTheme} from '../application/RzxAppSpec';
import {RzxToolbar} from '../toolbar/RzxToolbar';
import {faCancel, faCheck, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const RzxCommonDialog = observer(({model}: {model: RzxCommonDialogModel}) => {
    const rightButtons = [],
        leftButtons = [];

    if (model.hasCancelButton)
        rightButtons.push(
            <RzxButton
                text="Cancel"
                icon={faCancel}
                compact={true}
                outline={true}
                width={80}
                onClick={() => model.handleCancel()}
            />
        );

    if (model.hasEmailButton)
        rightButtons.push(<RzxButton text="Email" icon={faEnvelope} compact={true} outline={true} width={80} />);

    rightButtons.push(
        <RzxButton compact={true} text="OK" icon={faCheck} outline={true} width={75} onClick={() => model.handleOk()} />
    );

    return (
        <Dialog
            className={classNames(
                rzxAppModel.theme === RzxAppTheme.DARK ? 'bp5-dark' : 'bp5-light',
                'common-dialog',
                model.additionalClass
            )}
            title={model.title}
            icon={<FontAwesomeIcon icon={model.icon} size="lg" />}
            isOpen={model.isOpen}
            isCloseButtonShown={false}
            canEscapeKeyClose={true}
            canOutsideClickClose={false}
        >
            <DialogBody>
                <div className="common-dialog__body">
                    <div className="common-dialog__message">{model.message}</div>
                    <RzxToolbar leftItems={leftButtons} rightItems={rightButtons} />
                </div>
            </DialogBody>
        </Dialog>
    );
});
