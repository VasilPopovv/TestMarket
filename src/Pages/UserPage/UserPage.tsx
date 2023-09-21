import Styles from "./UserPage.module.css";
import UserData from "../../store/UserData";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import StoreData from "../../store/StoreData";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { observer } from "mobx-react-lite";

const UserPage: React.FC = observer(() => {
    const location = useLocation();
    const navigation = useNavigate()
    const total = () => {
        let res = 0
        StoreData.cart.map(i => {
            res += i.price
        })
        return res
    }

    useEffect(() => {
        StoreData.addBread(location.pathname);
    }, [location]);

    return (
        <section className={Styles.userPage}>
            <BreadCrumbs />
            <div>
                <h1>USER</h1>
                <div className={Styles.userPage__block}>
                    <div className={Styles.block__userBlock}>
                        <div className={Styles.avatar}>
                            <FaUserCircle />
                        </div>
                        <div>
                            <h2>{UserData.currentUser?.userName}</h2>
                            <h3>{UserData.currentUser?.email}</h3>
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            UserData.logOut();
                            navigation('/')
                        }}
                        className={Styles.block__logOut}
                    >
                        <MdLogout />
                    </div>
                </div>
                <div className={Styles.userPage__cartBox}>
                    <h3>User cart</h3>
                    <div className={Styles.cartBox__cart}>
                        {StoreData.cart.map((i) => {
                            return (
                                <span className={Styles.cart__card}>
                                    <ProductCard data={i} />
                                </span>
                            );
                        })}
                    </div>
                    <h3>Total : {total().toFixed(2)}$</h3>
                </div>
            </div>
        </section>
    );
});

export default UserPage;
