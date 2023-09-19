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
        }
        this.users.map((i) => {
            if (i.email === email) {
                console.log(i)
                this.regMistake = "User with the same E-mail already exists!";
                this.isRegMistake = true;
            }
        });
        if(!this.isRegMistake) {
            this.users.push({
                userName: name,
                password: password,
                email: email,
            });
        }
    }
}

export default new UserData();
