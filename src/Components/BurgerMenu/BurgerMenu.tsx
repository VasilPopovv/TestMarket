import Styles from "./BurgerMenu.module.css";
import { IoMdClose } from "react-icons/io";
import ModalWindows from "../../store/ModalWindows";
import ModalRegister from "../../store/ModalRegistr";
import { links } from "../NavLinks/NavLinks";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiUserCircle } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoreData from "../../store/StoreData";

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    const loginHandler = () => {
        ModalWindows.openBurgerMenu();
        ModalRegister.openRegWind();
    };
    const cartHandler = () => {
        ModalWindows.openBurgerMenu();
        ModalWindows.openCartWindow();
    };
    // const closeWindow = () => {
    //     ModalWindows.openBurgerMenu();
    // }

    return (
        <div className={Styles.backGround} onClick={() => ModalWindows.openBurgerMenu()}>
            <div className={Styles.burgerMenu} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.title}>
                    <h2>
                        <span>My</span> market
                    </h2>
                    <span onClick={() => ModalWindows.openBurgerMenu()}>
                        <IoMdClose />
                    </span>
                </div>
                <div className={Styles.logIn} onClick={loginHandler}>
                    <span>
                        <PiUserCircle />
                    </span>
                    Log in
                </div>

                <div
                    onClick={() => setOpen((prev) => !prev)}
                    className={Styles.summary}
                >
                    <span>
                        <RxDashboard />
                    </span>
                    Categories
                </div>
                <AnimatePresence>
                    {open && (
                        <>
                            <motion.ul
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className={Styles.ul}
                            >
                                <AnimatePresence>
                                    {links.map((i, index) => {
                                        return (
                                            <motion.li
                                                initial={{ opacity: 0, x: 200 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: (index + 1) * 0.1,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                key={i.title}
                                                className={Styles.link}
                                            >
                                                <NavLink to={i.to}>
                                                    <span>{i.icon}</span>
                                                    {i.title}
                                                </NavLink>
                                            </motion.li>
                                        );
                                    })}
                                </AnimatePresence>
                            </motion.ul>
                        </>
                    )}
                </AnimatePresence>
                <div onClick={cartHandler} className={Styles.cart}>
                    <span>
                        <BsCart3 />
                    </span>
                    <span>Cart</span>
                    <p>{StoreData.cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
