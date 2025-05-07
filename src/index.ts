import { action, makeObservable, observable } from "mobx";
import { RzxCommonDialogModel } from "./dialogs/RzxDialog";

class RzxAppModel {
  @observable isBusy = false;
  @observable commonDialog = new RzxCommonDialogModel();
  private removeLater: boolean;

  constructor() {
    makeObservable(this);
  }

  @action showMask() {
    this.isBusy = true;
  }

  @action hideMask() {
    this.isBusy = false;
  }

  info(message: string, title?: string) {
    this.commonDialog.open({ message, title });
  }

  confirm(message: string, title?: string): Promise<boolean> {
    return this.commonDialog.open({
      message,
      title,
      isConfirm: true,
    }) as Promise<boolean>;
  }

  warn(message: string, title?: string) {
    this.commonDialog.open({ message, title, isWarn: true });
  }

  error(message: string, title?: string) {
    this.commonDialog.open({ message, title, isError: true });
  }
}

const rzxAppModel = new RzxAppModel();
export default rzxAppModel;
