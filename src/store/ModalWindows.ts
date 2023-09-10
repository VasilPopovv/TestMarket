import {makeAutoObservable} from 'mobx'

class ModalWindows  {
    // isRegWindow = false
    isCartWindow = false
    isBurgerMenu = false

    constructor() {
        makeAutoObservable(this)
    }
    
    // openRegWind() {
    //     this.isRegWindow = !this.isRegWindow
    // }
    openBurgerMenu() {
        this.isBurgerMenu = !this.isBurgerMenu
    }
    openCartWindow() {
        this.isCartWindow = !this.isCartWindow
    }
}

export default new ModalWindows()