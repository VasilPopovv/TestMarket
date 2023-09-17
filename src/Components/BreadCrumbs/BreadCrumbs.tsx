import { useNavigate } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import Styles from "./BreadCrumbs.module.css";
import StoreData from "../../store/StoreData";
import { observer } from "mobx-react-lite";

const BreadCrumbs = observer(() => {
    const navigate = useNavigate();

    return (
        <>
            <div className={Styles.back}>
                <div>
                    <span onClick={() => navigate("/")}>
                        <BiHomeSmile />
                    </span>
                    <span>
                        {StoreData.breadCrumbs.map((i, index) => {
                            if(index === 1) {
                                return <span
                                onClick={() => navigate(`/goodspage/${i}`)}
                                key={i}>{'/ ' + i}</span>;
                            } else {
                                return <span
                                style={{color: 'gray'}}
                                key={i}>{'/ ' + i}</span>;
                            }
                        })}
                    </span>
                </div>
            </div>
        </>
    );
});

export default BreadCrumbs;
