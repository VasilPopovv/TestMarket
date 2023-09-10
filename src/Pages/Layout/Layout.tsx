import Header from "../../Components/Header/Header";
import NavBar from "../../Components/NavBar/NavBar";
import Styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import RegisterWindow from "../../Components/RegisterWindow/RegisterWindow";
import CartWindow from "../../Components/CartWindow/CartWindow";
import ModalWindow from "../../store/ModalWindows";
import { observer } from "mobx-react-lite";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import { useMatchMedia } from "../../hooks/myMatcMedia";
import { useEffect } from "react";
import StoreData from "../../store/StoreData";
import ModalRegistr from "../../store/ModalRegistr";

const Layout = observer(() => {
    const { isMobile } = useMatchMedia();

    useEffect(() => {
        StoreData.getData();
    }, []);

    return (
        <div className={Styles.container}>
                <Header />
                {ModalRegistr.isRegWindow && <RegisterWindow />}
                {ModalWindow.isBurgerMenu && <BurgerMenu />}
                {ModalWindow.isCartWindow && <CartWindow />}
                <main className={Styles.main}>
                    {!isMobile && <NavBar />}
                    <div className={Styles.outlet}>
                        <Outlet />
                    </div>
                </main>
        </div>
    );
});

export default Layout;
