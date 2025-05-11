import {action, makeObservable, observable} from 'mobx';
import {RzxCommonDialogModel} from '../dialogs/RzxDialogModel';
import {RzxAppNavigator} from '../navigation/RzxAppNavigator';
import {RzxAppSpec, RzxAppTheme} from './RzxAppSpec';

export class RzxAppModel {
    @observable isBusy = false;
    @observable busyText = '';
    @observable commonDialog = new RzxCommonDialogModel();
    appNavigator: RzxAppNavigator;
    @observable theme: RzxAppTheme;

    constructor() {
        makeObservable(this);
    }

    static getInstance() {
        return rzxAppModel;
    }

    configureAppplication(appSpec: RzxAppSpec) {
        this.theme = appSpec.theme;
        this.setTheme();
        this.appNavigator = new RzxAppNavigator(appSpec.navItems);
    }

    @action toggleTheme() {
        this.theme = this.theme === RzxAppTheme.DARK ? RzxAppTheme.LIGHT : RzxAppTheme.DARK;
        this.setTheme();
    }

    @action showMask(text?: string) {
        this.busyText = text;
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

    private setTheme() {
        const classList = document.body.classList;
        classList.toggle('rzx-dark', this.theme === RzxAppTheme.DARK);
        classList.toggle('bp5-dark', this.theme === RzxAppTheme.DARK);
        classList.toggle('bp5-light', this.theme !== RzxAppTheme.DARK);
        document.body.dataset.agThemeMode = this.theme === RzxAppTheme.DARK ? 'dark' : 'light';
    }
}

const rzxAppModel = new RzxAppModel();
export default rzxAppModel;
