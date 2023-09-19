import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import gif from "../../assets/image/123.gif";
import Styles from './ErrorPage.module.css'

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/", { replace: true });
        }, 4000);
    }, [navigate]);

    return (
        <div className={Styles.errorPage}>
            <div>Error</div>
            <img src={gif} alt="" />
        </div>
    );
};

export default ErrorPage;
