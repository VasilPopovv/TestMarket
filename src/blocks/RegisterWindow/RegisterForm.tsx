import Styles from "./RegisterWindow.module.css";
import { ChangeEvent, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import UserData from "../../store/UserData";
import { observer } from "mobx-react-lite";
// import ModalRegister from '../../store/ModalRegister'

const RegisterForm: React.FC = observer(() => {
    const [isReg, setIsReg] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const addUser = () => {
        UserData.users.map(i => console.log({...i}))
        if (userName.length && userEmail.length && userPassword.length) {
            UserData.addUser(userName, userEmail, userPassword);
        }
        if (!UserData.isRegMistake) {
            setUserName("");
            setUserEmail("");
            setUserPassword("");
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
                className={UserData.isRegMistake ? Styles.mailInp : ''}
            />
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
                <label htmlFor="check">
                    <input
                        className={Styles.check}
                        type="checkbox"
                        id="check"
                    />
                    <div>Remeber me</div>
                </label>
                {!isReg && <span>Forgot password</span>}
                {isReg && <span onClick={() => setIsReg(false)}>Log in</span>}
            </div>
            {!isReg && <button className={Styles.button}>log in</button>}
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
