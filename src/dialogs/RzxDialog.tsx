import {observer} from 'mobx-react';
import {RzxCommonDialogModel} from './RzxDialogModel';
import {Dialog, DialogBody} from '@blueprintjs/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './RzxDialog.scss';
import {RzxButton} from '../buttons/RzxButton';
import classNames from 'classnames';
import rzxAppModel from '../application/RzxAppModel';
import {RzxAppTheme} from '../application/RzxAppSpec';

export const RzxCommonDialog = observer(({model}: {model: RzxCommonDialogModel}) => {
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
                    <div className="common-dialog__buttons">
                        <RzxButton text="OK" outline={true} onClick={() => model.handleOk()} />
                        {model.hasCancelButton && (
                            <RzxButton text="Cancel" outline={true} onClick={() => model.handleCancel()} />
                        )}
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    );
});
