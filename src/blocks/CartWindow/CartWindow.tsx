import { MouseEventHandler } from "react";
import Styles from "./CartWindow.module.css";
import ModalWindows from "../../store/ModalWindows";
import StoreData from "../../store/StoreData";
import MyButton from "../../UI/MyButton/MyButton";
import { IoMdClose } from "react-icons/io";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import UserData from "../../store/UserData";
import CartList from "./CartList";
import ModalWindowBeckground from "../../Components/ModalWindowBackground/ModalWindowBackground";

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
        <ModalWindowBeckground fn={ModalWindows.openCartWindow}>
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className={Styles.window}
            >
                <div className={Styles.title}>
                    {UserData.isRegister ? (
                        <span>
                            {UserData.currentUser?.userName.toUpperCase()} Cart
                        </span>
                    ) : (
                        <span>Cart</span>
                    )}

                    <span onClick={closeWindow}>
                        <IoMdClose />
                    </span>
                </div>
                <CartList />
                <div className={Styles.total}>
                    <span>Total:</span>
                    <span>{total().toFixed(2)} $</span>
                </div>
                <MyButton value={"Buy"} fn={() => {}} />
            </motion.div>
        </ModalWindowBeckground>
    );
});

export default CartWindow;
