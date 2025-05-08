import {action, makeObservable, observable} from 'mobx';
import {RzxCommonDialogModel} from '../dialogs/RzxDialogModel';
import {RzxAppNavigator} from '../navigation/RzxAppNavigator';
import {RzxApplicationSpec, RzxAppTheme} from './RzxApplicationSpec';

export class RzxApplicationModel {
    @observable isBusy = false;
    @observable commonDialog = new RzxCommonDialogModel();
    appNavigator: RzxAppNavigator;
    @observable theme: RzxAppTheme;

    constructor() {
        makeObservable(this);
    }

    configureAppplication(appSpec: RzxApplicationSpec) {
        this.theme = appSpec.theme;
        this.appNavigator = new RzxAppNavigator(appSpec.navItems);
    }

    @action toggleTheme() {
        this.theme = this.theme === RzxAppTheme.DARK ? RzxAppTheme.LIGHT : RzxAppTheme.DARK;

        const classList = document.body.classList;
        classList.toggle('rzx-dark', this.theme === RzxAppTheme.DARK);
        classList.toggle('bp5-dark', this.theme === RzxAppTheme.DARK);
    }

    @action showMask() {
        this.isBusy = true;
    }

    @action hideMask() {
        this.isBusy = false;
    }

    info(message: string, title?: string) {
        this.commonDialog.open({message, title});
    }

    confirm(message: string, title?: string): Promise<boolean> {
        return this.commonDialog.open({
            message,
            title,
            isConfirm: true
        }) as Promise<boolean>;
    }

    warn(message: string, title?: string) {
        this.commonDialog.open({message, title, isWarn: true});
    }

    error(message: string, title?: string) {
        this.commonDialog.open({message, title, isError: true});
    }
}

const rzxAppModel = new RzxApplicationModel();
export default rzxAppModel;
