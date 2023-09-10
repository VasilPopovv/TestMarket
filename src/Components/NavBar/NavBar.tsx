import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { links } from "../NavLinks/NavLinks";
import { memo } from "react";
import { motion } from "framer-motion";

const NavBar = memo(() => {
    return (
        <div className={Styles.navbar}>
            <ul>
                {links.map((i) => {
                    return (
                        <motion.li whileTap={{ scale: 0.9 }} transition={{duration: 0.01}} key={i.title}>
                            <NavLink to={i.to}>
                                <span>{i.icon}</span>
                                {i.title}
                            </NavLink>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
});

export default NavBar;
