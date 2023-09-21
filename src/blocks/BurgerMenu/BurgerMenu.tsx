import Styles from "./BurgerMenu.module.css";
import { IoMdClose } from "react-icons/io";
import ModalWindows from "../../store/ModalWindows";
import { BsCart3 } from "react-icons/bs";
import { motion } from "framer-motion";
import StoreData from "../../store/StoreData";
import AppLinks from "../../Components/AppLinks/AppLinks";
import { observer } from "mobx-react-lite";
import ModalWindowBeckground from "../../Components/ModalWindowBackground/ModalWindowBackground";
import CategoryList from "./CategoryList";
import LoginBlock from "./LoginBlock";

const BurgerMenu: React.FC = observer(() => {
    const cartHandler = () => {
        if (!StoreData.cart.length) return;
        ModalWindows.openBurgerMenu();
        ModalWindows.openCartWindow();
    };

    return (
        <ModalWindowBeckground fn={ModalWindows.openBurgerMenu}>
            <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                className={Styles.burgerMenu}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={Styles.title}>
                    <h2>
                        <span>My</span> market
                    </h2>
                    <span onClick={() => ModalWindows.openBurgerMenu()}>
                        <IoMdClose />
                    </span>
                </div>
                <section>
                    <div>
                        <LoginBlock />
                        <CategoryList />
                        <div onClick={cartHandler} className={Styles.cart}>
                            <span>
                                <BsCart3 />
                            </span>
                            <span>Cart</span>
                            <p>{StoreData.cart.length}</p>
                        </div>
                    </div>
                    <div className={Styles.appLinks}>
                        <AppLinks />
                    </div>
                </section>
            </motion.div>
        </ModalWindowBeckground>
    );
});

export default BurgerMenu;
