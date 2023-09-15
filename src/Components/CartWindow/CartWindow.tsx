import Styles from "./CartWindow.module.css";
import ModalWindows from "../../store/ModalWindows";
import StoreData from "../../store/StoreData";
import MyButton from "../../UI/MyButton/MyButton";
import { IoMdClose } from "react-icons/io";
import CartListComponent from "./CartListComponenet/CartListComponent";
import { observer } from "mobx-react-lite";
import { motion, AnimatePresence } from "framer-motion";
import { MouseEventHandler } from "react";

const CartWindow: React.FC = observer(() => {
    const total = () => {
        let res = 0;
        StoreData.cart.forEach((i) => {
            if (i.quantity) {
                res += i.price * i.quantity;
            }
        });
        return res;
    };

    const closeWindow: MouseEventHandler = () => {
        ModalWindows.openCartWindow();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={Styles.backGround}
            onClick={closeWindow}
        >
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className={Styles.window}
            >
                <div className={Styles.title}>
                    <span>Cart</span>
                    <span onClick={closeWindow}>
                        <IoMdClose />
                    </span>
                </div>
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
                <div className={Styles.total}>
                    <span>Total:</span>
                    <span>{total().toFixed(2)} $</span>
                </div>
                    <MyButton value={"Buy"} fn={() => {}} />
            </motion.div>
        </motion.div>
    );
});

export default CartWindow;
