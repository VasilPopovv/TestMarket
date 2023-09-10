import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Styles from "./BackArrow.module.css";

const BackArrow = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={Styles.back}>
                <div onClick={() => navigate(-1)}>
                    <span>
                        <MdOutlineKeyboardDoubleArrowLeft />
                    </span>
                    <span>back</span>
                </div>
            </div>
        </>
    );
};

export default BackArrow;
