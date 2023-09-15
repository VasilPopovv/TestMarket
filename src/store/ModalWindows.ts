import { makeAutoObservable } from "mobx";

class ModalWindows {
    isCartWindow = false;
    isBurgerMenu = false;

    constructor() {
        makeAutoObservable(this);
    }
    openBurgerMenu() {
        this.isBurgerMenu = !this.isBurgerMenu;
    }
    openCartWindow() {
        this.isCartWindow = !this.isCartWindow;
    }
}

export default new ModalWindows();
