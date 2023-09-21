import Styles from "./CartWindow.module.css";
import CartListComponent from "../../Components/CartListComponenet/CartListComponent";
import { motion, AnimatePresence } from 'framer-motion'
import StoreData from "../../store/StoreData";

const CartList: React.FC = () => {
    return (
        <>
            <div className={Styles.cartList}>
                <AnimatePresence>
                    {!!StoreData.cart.length && (
                        <motion.ul
                            exit={{ x: 200, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AnimatePresence>
                                {StoreData.cart.map((i) => {
                                    return (
                                        <motion.li
                                            key={i.title}
                                            exit={{
                                                x: 200,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                            }}
                                        >
                                            <CartListComponent data={i} />
                                        </motion.li>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CartList;
