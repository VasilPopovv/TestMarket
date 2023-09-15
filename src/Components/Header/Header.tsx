import Styles from "./Header.module.css";
import { BsCart3, BsSearch } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import ModalWindows from "../../store/ModalWindows";
import ModalRegister from "../../store/ModalRegister";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useMatchMedia } from "../../hooks/myMatcMedia";
import StoreData from "../../store/StoreData";

const Header: React.FC = observer(() => {
    const { isMobile } = useMatchMedia();

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
            {!isMobile ? (
                <form
                    name="form"
                    className={Styles.form}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <span>
                        <BsSearch />
                    </span>
                    <input className={Styles.input} type="text" />
                    <button className={Styles.button}>Search</button>
                </form>
            ) : (
                <form
                    name="form"
                    className={Styles.form}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input className={Styles.mobInput} type="text" />
                    <button className={Styles.mobButton}>
                        <BsSearch />
                    </button>
                </form>
            )}
            <div className={Styles.navigation}>
                {!isMobile ? (
                    <>
                        <div
                            onClick={() => ModalRegister.openRegWind()}
                            className={Styles.person}
                        >
                            <PiUserCircle />
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
