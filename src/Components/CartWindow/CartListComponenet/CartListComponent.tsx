import Styles from "./CartListCmoponent.module.css";
import { DataType } from "../../../store/StoreData";
import { AiOutlineDelete } from "react-icons/ai";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import StoreData from "../../../store/StoreData";
import { Link } from "react-router-dom";
import ModalWindows from "../../../store/ModalWindows";

interface IProps {
    data: DataType;
}

const CartListComponent: React.FC<IProps> = ({ data }) => {
    const changeQuantity = (id: number, operator: string) => {
        StoreData.changeQuantity(id, operator);
    };

    return (
        <div className={Styles.cartListComponent}>
            <div className={Styles.image}>
                <img src={data.image} />
            </div>
            <div className={Styles.section}>
                <section>
                    <div className={Styles.title}>
                        <Link
                            onClick={() => ModalWindows.openCartWindow()}
                            to={`/goodspage/${data.category}/${data.id}`}
                        >
                            {data.title}
                        </Link>
                    </div>
                    <div
                        onClick={() => {
                            StoreData.delFromCart(data.id);
                            if (!StoreData.cart.length) {
                                setTimeout(() => {
                                    ModalWindows.openCartWindow();
                                }, 400);
                            }
                        }}
                        className={Styles.del}
                    >
                        <AiOutlineDelete />
                    </div>
                </section>
                <section>
                    <div className={Styles.quantity}>
                        <span onClick={() => changeQuantity(data.id, "-")}>
                            <FaSquareMinus />
                        </span>
                        <input type="text" value={data.quantity} disabled />
                        <span onClick={() => changeQuantity(data.id, "+")}>
                            <FaSquarePlus />
                        </span>
                    </div>
                    <div className={Styles.price}>
                        {/* <span>{data.price + '$'}</span> */}
                        <span>
                            {(data.price * (data.quantity || 1)).toFixed(2) +
                                "$"}
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CartListComponent;
