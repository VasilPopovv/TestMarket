import { makeObservable, observable, action } from "mobx";

class ModalRegister {
  isRegWindow = false;

  constructor() {
    makeObservable(this, {isRegWindow: observable, openRegWind: action});
  }

  openRegWind() {
    this.isRegWindow = !this.isRegWindow;
  }
}

export default new ModalRegister();
