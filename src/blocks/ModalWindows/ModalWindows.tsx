import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ModalRegistr from "../../store/ModalRegister";
import RegisterWindow from "../RegisterWindow/RegisterWindow";
import CartWindow from "../CartWindow/CartWindow";
import ModalWindow from "../../store/ModalWindows";
import { observer } from "mobx-react-lite";
import { AnimatePresence } from "framer-motion";

const ModalWindowsComp: React.FC = observer(() => {
    return (
        <div>
            <AnimatePresence>
                {ModalRegistr.isRegWindow && <RegisterWindow />}
                {ModalWindow.isBurgerMenu && <BurgerMenu />}
                {ModalWindow.isCartWindow && <CartWindow />}
            </AnimatePresence>
        </div>
    );
});

export default ModalWindowsComp;
