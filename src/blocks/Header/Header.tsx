import Styles from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import ModalWindows from "../../store/ModalWindows";
import ModalRegister from "../../store/ModalRegister";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { useMatchMedia } from "../../utils/hooks/myMatcMedia";
import StoreData from "../../store/StoreData";
import HeaderForm from "./HeaderForm";
import UserData from "../../store/UserData";

const Header: React.FC = observer(() => {
    const { isMobile } = useMatchMedia();
    const navigate = useNavigate()

    return (
        <header className={Styles.header}>
            <div className={Styles.longHeader}></div>
            {!isMobile ? (
                <div>
                    <Link to={"/"} className={Styles.logo}>
                        <span>{"My"}</span>
                        {" market"}
                    </Link>
                </div>
            ) : (
                <Link className={Styles.mobLogo} to={"/"}>
                    <div>M</div>
                </Link>
            )}
            <HeaderForm />
            <div className={Styles.navigation}>
                {!isMobile ? (
                    <>
                        <div
                            onClick={
                                UserData.isRegister
                                    ? () => navigate('/user')
                                    : () => ModalRegister.openRegWind()
                            }
                            className={Styles.person}
                        >
                            <PiUserCircle />
                            {UserData.isRegister && <span></span>}
                        </div>
                        <div
                            onClick={() => {
                                if (!StoreData.cart.length) return;
                                ModalWindows.openCartWindow();
                            }}
                            className={Styles.cart}
                        >
                            <BsCart3 />
                            {StoreData.cart.length ? (
                                <span className={Styles.cartN}>
                                    {StoreData.cart.length}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div
                            onClick={() => ModalWindows.openBurgerMenu()}
                            className={Styles.burger}
                        >
                            <HiMenu />
                        </div>
                    </>
                ) : (
                    <div
                        onClick={() => ModalWindows.openBurgerMenu()}
                        className={Styles.mobBurger}
                    >
                        <HiMenu />
                    </div>
                )}
            </div>
        </header>
    );
});

export default Header;
