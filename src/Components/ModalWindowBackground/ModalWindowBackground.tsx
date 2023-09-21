import { observer } from "mobx-react-lite";
import Styles from "./ModalWindowBackground.module.css";
import { motion } from "framer-motion";

type ChildrenType = {
    children: JSX.Element;
    fn: () => void 
};

const ModalWindowBeckground: React.FC<ChildrenType> = observer(({ children, fn }) => {
    const closeWindow = () => {
        fn();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={Styles.backGround}
            onClick={closeWindow}
        >
            {children}
        </motion.div>
    );
});

export default ModalWindowBeckground;
