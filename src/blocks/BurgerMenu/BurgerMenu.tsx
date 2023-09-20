import Styles from "./BurgerMenu.module.css";
import { IoMdClose } from "react-icons/io";
import ModalWindows from "../../store/ModalWindows";
import ModalRegister from "../../store/ModalRegister";
import { links } from "../../Components/NavLinks/NavLinks";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiUserCircle } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoreData from "../../store/StoreData";
import AppLinks from "../../Components/AppLinks/AppLinks";
import UserData from "../../store/UserData";
import { MdLogout } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const BurgerMenu: React.FC = observer(() => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const loginHandler = () => {
        ModalWindows.openBurgerMenu();
        ModalRegister.openRegWind();
    };
    const cartHandler = () => {
        if (!StoreData.cart.length) return;
        ModalWindows.openBurgerMenu();
        ModalWindows.openCartWindow();
    };
    const closeWindow = () => {
        ModalWindows.openBurgerMenu();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={Styles.backGround}
            onClick={() => ModalWindows.openBurgerMenu()}
        >
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
                                        <h4>
                                            {UserData.currentUser?.userName}
                                        </h4>
                                        <span>
                                            {UserData.currentUser?.email}
                                        </span>
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
                                        initial={{ height: 0, x: 300 }}
                                        animate={{ height: "auto", x: 0 }}
                                        exit={{ height: 0, x: 300 }}
                                        className={Styles.ul}
                                    >
                                        {links.map((i, index) => {
                                            return (
                                                <motion.li
                                                    onClick={closeWindow}
                                                    initial={{
                                                        opacity: 0,
                                                        x: 800,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration:
                                                            (index + 1) * 0.1,
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    key={i.category}
                                                    className={Styles.link}
                                                >
                                                    <NavLink to={i.to}>
                                                        <span>{i.icon}</span>
                                                        {i.category}
                                                    </NavLink>
                                                </motion.li>
                                            );
                                        })}
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
                    <div className={Styles.appLinks}>
                        <AppLinks />
                    </div>
                </section>
            </motion.div>
        </motion.div>
    );
});

export default BurgerMenu;
