import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackArrow from "../../Components/BackArrow/BackArrow";
import Styles from "./SearchPage.module.css";
import StoreData from "../../store/StoreData";
import ProductCard from "../../Components/ProductCard/ProductCard";

const SearchPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        StoreData.addBread(location.pathname);
    }, [location]);

    return (
        <div className={Styles.searchPage}>
            <div>
                <BackArrow />
            </div>
            <h2>Search result</h2>
            <ul>
                {!StoreData.searchArr.length && "not found anything"}
                {!!StoreData.searchArr.length &&
                    StoreData.searchArr.map((i) => {
                        return (
                            <li
                                onClick={() =>
                                    navigate(
                                        `/goodspage/${i.category}/${i.id}`
                                    )
                                }
                                key={i.title}
                            >
                                <ProductCard data={i} />
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default SearchPage;
