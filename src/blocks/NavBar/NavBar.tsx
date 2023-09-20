import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { links } from "../../Components/NavLinks/NavLinks";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import AppLinks from "../../Components/AppLinks/AppLinks";
import UserData from "../../store/UserData";
import { PiUserCircle } from "react-icons/pi";

const NavBar = observer(() => {
    const navigate = useNavigate()

    return (
        <div className={Styles.navbar}>
            <ul>
                {UserData.isRegister && (
                    <div
                    onClick={() => navigate('/user')}
                     className={Styles.navUser}>
                        <PiUserCircle />
                        <div>
                            <h4>{UserData.currentUser?.userName}</h4>
                            <span>{UserData.currentUser?.email}</span>
                        </div>
                    </div>
                )}
                {links.map((i) => {
                    return (
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.01 }}
                            key={i.category}
                        >
                            <NavLink to={i.to}>
                                <span>{i.icon}</span>
                                {i.category}
                            </NavLink>
                        </motion.li>
                    );
                })}
            </ul>
            <AppLinks />
        </div>
    );
});

export default NavBar;
