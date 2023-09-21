import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "../../Components/NavLinks/NavLinks";
import { NavLink } from "react-router-dom";
import ModalWindows from "../../store/ModalWindows";
import Styles from "./BurgerMenu.module.css";
import { RxDashboard } from "react-icons/rx";

const CategoryList: React.FC = () => {
    const [open, setOpen] = useState(false);

    const closeWindow = () => {
        ModalWindows.openBurgerMenu();
    };

    return (
        <>
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
                                            duration: (index + 1) * 0.1,
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
        </>
    );
};

export default CategoryList;
