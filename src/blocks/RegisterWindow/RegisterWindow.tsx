import Styles from "./RegisterWindow.module.css";
import ModalRegister from "../../store/ModalRegister";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterWindow = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={Styles.backGround}
            onClick={() => ModalRegister.openRegWind()}
        >
            <motion.div
                initial={{scale: 0.8}}
                animate={{scale: 1}}
                exit={{scale: 0.8}}
                className={Styles.window}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={Styles.head}>
                    <div>Log in</div>
                    <span onClick={() => ModalRegister.openRegWind()}>
                        <IoMdClose />
                    </span>
                </div>
                <hr />
                <div className={Styles.section}>
                    <form
                        name="regform"
                        className={Styles.registerForm}
                        action=""
                    >
                        <input type="text" placeholder="login" />
                        <input type="text" placeholder="password" />
                        <div className={Styles.forgot}>
                            <label htmlFor="check">
                                <input
                                    className={Styles.check}
                                    type="checkbox"
                                    id="check"
                                />
                                <div>Remeber me</div>
                            </label>
                            <span>Forgot password</span>
                        </div>
                        <button type="submit">log in</button>
                        <button className={Styles.button}>Register</button>
                    </form>
                    <div className={Styles.login}>
                        <p>Log in with</p>
                        <Link className={Styles.link} to={"#"}>
                            <span>
                                <LiaFacebookF />
                            </span>
                            Facebook
                        </Link>
                        <Link className={Styles.link} to={"#"}>
                            <span>
                                <FcGoogle />
                            </span>
                            Google
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default RegisterWindow;
