import Styles from "./UserPage.module.css";
import UserData from '../../store/UserData'
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import StoreData from '../../store/StoreData'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserPage = () => {
    const location = useLocation()

    useEffect(() => {
        StoreData.addBread(location.pathname);
    }, [location])

    return (
        <div className={Styles.userPage}>
            <BreadCrumbs />
            <h1>UserPage</h1>
            <h2>{UserData.currentUser?.userName}</h2>
        </div>
    );
};

export default UserPage;
