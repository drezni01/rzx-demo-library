import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faExclamationCircle, faInfoCircle, faQuestionCircle, faWarning} from '@fortawesome/free-solid-svg-icons';
import {action, makeObservable, observable} from 'mobx';

export interface IDialogProps {
    title?: string;
    message: string;
    isConfirm?: boolean;
    isWarn?: boolean;
    isError?: boolean;
}

export class RzxCommonDialogModel {
    @observable isOpen: boolean;
    @observable title: string;
    @observable message: string;
    @observable icon: IconProp;
    @observable hasCancelButton: boolean;
    @observable hasEmailButton: boolean;
    additionalClass: string;
    private resolver: (value: boolean) => void;

    constructor() {
        makeObservable(this);
    }

    @action open(props: IDialogProps) {
        this.isOpen = true;
        this.title = props.title;
        if (!this.title) {
            this.title = props.isError ? 'Application Error:' : props.isConfirm ? 'Please confirm:' : 'Information:';
            if (props.isWarn) this.title = 'Warning!';
        }
        this.message = props.message;
        this.hasCancelButton = props.isConfirm;
        this.icon = props.isConfirm ? faQuestionCircle : props.isError ? faExclamationCircle : faInfoCircle;
        if (props.isWarn) this.icon = faWarning;
        this.additionalClass = props.isError ? 'error' : props.isConfirm ? 'confirm' : 'info';
        if (props.isWarn) this.additionalClass = 'warn';

        this.hasEmailButton = props.isError;

        return new Promise(r => (this.resolver = r));
    }

    @action close() {
        this.isOpen = false;
    }

    @action
    handleOk() {
        this.resolver(true);
        this.isOpen = false;
    }

    @action
    handleCancel() {
        this.resolver(false);
        this.isOpen = false;
    }
}
