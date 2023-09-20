import { makeAutoObservable } from "mobx";

type usersType = {
    userName: string;
    password: string;
    email: string;
};

class UserData {
    users: Array<usersType> = [];
    isRegister: boolean = false;
    currentUser: usersType | null = null;
    isRegMistake: boolean = false;
    isLogInMistake: boolean = false;
    regMistake: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    addUser(name: string, email: string, password: string) {
        this.isRegMistake = false;
        if (!this.users.length) {
            this.users.push({
                userName: name,
                password: password,
                email: email,
            });
            return;
        } else {
            const users = this.users;
            for (let i = 0; i < this.users.length; i++) {
                if (users[i].email === email) {
                    this.regMistake =
                        "User with the same E-mail already exists!";
                    this.isRegMistake = true;
                    return;
                }
            }
        }
        this.users.push({
            userName: name,
            password: password,
            email: email,
        });
    }

    logIn(email: string, userPassword: string) {
        this.isLogInMistake = false
        for (let i = 0; i < this.users.length; i++) {
            if (
                email === this.users[i].email &&
                userPassword === this.users[i].password
            ) {
                this.isRegister = true;
                this.currentUser = this.users[i];
                console.log('registr is success')
                console.log({...this.currentUser})
                return
            }
        }
        this.isLogInMistake = true
        console.log('registr error')
    }

    logOut() {
        this.isRegister = false
        this.currentUser = null
    }
}

export default new UserData();
