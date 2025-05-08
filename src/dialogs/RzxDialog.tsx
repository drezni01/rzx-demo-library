import {observer} from 'mobx-react';
import {RzxCommonDialogModel} from './RzxDialogModel';
import {Button, Dialog, DialogBody} from '@blueprintjs/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const RzxCommonDialog = observer(({model}: {model: RzxCommonDialogModel}) => {
    return (
        <Dialog
            className={'bp5-dark common-dialog ' + model.additionalClass}
            title={model.title}
            icon={<FontAwesomeIcon icon={model.icon} size="lg" />}
            isOpen={model.isOpen}
            isCloseButtonShown={false}
            canEscapeKeyClose={false}
            canOutsideClickClose={false}
        >
            <DialogBody>
                <div className="common-dialog__body">
                    <div className="common-dialog__message">{model.message}</div>
                    <div>
                        <Button text="OK" onClick={() => model.handleOk()} style={{marginLeft: 10}} />
                        {model.hasCancelButton && <Button text="Cancel" onClick={() => model.handleCancel()} />}
                    </div>
                </div>
            </DialogBody>
        </Dialog>
    );
});
