// import { ImSpinner6 } from "react-icons/im";
import { CgSpinner } from "react-icons/cg";
import Styles from "./Spinner.module.css";
import { motion } from "framer-motion";

const Spinner: React.FC = () => {
    return (
        <div className={Styles.spinner}>
            <motion.span
                initial={{ rotateZ: 0 }}
                animate={{ rotateZ: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    ease: "linear",
                }}
            >
                {/* <ImSpinner6 /> */}
                <CgSpinner />
            </motion.span>
        </div>
    );
};

export default Spinner;
