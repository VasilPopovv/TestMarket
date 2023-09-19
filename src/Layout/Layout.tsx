import Header from "../blocks/Header/Header";
import Styles from "./Layout.module.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import StoreData from "../store/StoreData";
import Container from "../blocks/Container/Container";
import ModalWindowsComp from "../blocks/ModalWindows/ModalWindows";
import ModalWindows from "../store/ModalWindows";
import ModalRegister from "../store/ModalRegister";
import Spinner from "../UI/Spinner/Spinner";

const Layout = observer(() => {
    const { isCartWindow, isBurgerMenu } = ModalWindows;
    const { isRegWindow } = ModalRegister;
    
    useEffect(() => {
        StoreData.getData();
    }, []);

    return (
        <div
            className={
                isBurgerMenu || isCartWindow || isRegWindow
                    ? Styles.wraperStatic
                    : Styles.wraper
            }
        >
            {StoreData.isLoading && <Spinner />}
            <Header />
            <ModalWindowsComp />
            <Container />
        </div>
    );
});

export default Layout;
