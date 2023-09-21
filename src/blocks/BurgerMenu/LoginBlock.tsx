import Styles from "./BurgerMenu.module.css";
import { PiUserCircle } from "react-icons/pi";
import UserData from "../../store/UserData";
import { MdLogout } from "react-icons/md";
import ModalRegister from "../../store/ModalRegister";
import { useNavigate } from "react-router-dom";
import ModalWindows from "../../store/ModalWindows";

const LoginBlock: React.FC = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        ModalWindows.openBurgerMenu();
        ModalRegister.openRegWind();
    };
    return (
        <>
            <div
                className={Styles.logIn}
                onClick={
                    UserData.isRegister
                        ? () => {
                              navigate("/user");
                              ModalWindows.openBurgerMenu();
                          }
                        : loginHandler
                }
            >
                <span className={Styles.avatar}>
                    <PiUserCircle />
                </span>
                {UserData.isRegister ? (
                    <div className={Styles.currentUser}>
                        <div>
                            <h4>{UserData.currentUser?.userName}</h4>
                            <span>{UserData.currentUser?.email}</span>
                        </div>
                        <div
                            className={Styles.logOut}
                            onClick={(e) => {
                                e.stopPropagation();
                                UserData.logOut();
                            }}
                        >
                            <MdLogout />
                        </div>
                    </div>
                ) : (
                    <h4>Log in</h4>
                )}
            </div>
        </>
    );
};

export default LoginBlock;
