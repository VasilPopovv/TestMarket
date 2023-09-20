import Styles from "./RegisterWindow.module.css";
import { ChangeEvent, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import UserData from "../../store/UserData";
import { observer } from "mobx-react-lite";
import ModalRegister from "../../store/ModalRegister";

const RegisterForm: React.FC = observer(() => {
    const [isReg, setIsReg] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const logIn = () => {
        if (!userEmail.length && !userPassword.length) return;
        UserData.logIn(userEmail, userPassword);
        if (!UserData.isLogInMistake) {
            setUserName("");
            setUserEmail("");
            setUserPassword("");
            ModalRegister.openRegWind();
        }
    };

    const addUser = () => {
        if (userName.length && userEmail.length && userPassword.length) {
            UserData.addUser(userName, userEmail, userPassword);
        }
        if (!UserData.isRegMistake) {
            UserData.logIn(userEmail, userPassword);
            setUserName("");
            setUserEmail("");
            setUserPassword("");
            ModalRegister.openRegWind();
        }
    };

    return (
        <form
            name="registerForm"
            onSubmit={(e) => e.preventDefault()}
            className={Styles.registerForm}
        >
            <input
                onInput={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserEmail(e.target.value)
                }
                value={userEmail}
                type="email"
                placeholder="E-mail"
                className={UserData.isRegMistake ? Styles.mailInp : ""}
            />
            {UserData.isLogInMistake && <p>E-mail or Password incorrect!</p>}
            {UserData.isRegMistake && <p>{UserData.regMistake}</p>}
            {isReg && (
                <input
                    onInput={(e: ChangeEvent<HTMLInputElement>) =>
                        setUserName(e.target.value)
                    }
                    value={userName}
                    type="text"
                    placeholder="User name"
                />
            )}
            <div className={Styles.passInput}>
                <input
                    onInput={(e: ChangeEvent<HTMLInputElement>) =>
                        setUserPassword(e.target.value)
                    }
                    value={userPassword}
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                />
                <span onClick={() => setShowPass((prev) => !prev)}>
                    {!showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
            </div>
            <div className={Styles.forgot}>
                <label htmlFor="checkBox">
                    <input
                        className={Styles.check}
                        type="checkbox"
                        id="checkBox"
                    />
                    <div>Remeber me</div>
                </label>
                {!isReg && <span>Forgot password</span>}
                {isReg && <span onClick={() => setIsReg(false)}>log in</span>}
            </div>
            {!isReg && (
                <button onClick={logIn} className={Styles.button}>
                    Log in
                </button>
            )}
            <button
                onClick={!isReg ? () => setIsReg(true) : addUser}
                className={isReg ? Styles.buttonRegAct : Styles.buttonReg}
            >
                Register
            </button>
        </form>
    );
});

export default RegisterForm;
