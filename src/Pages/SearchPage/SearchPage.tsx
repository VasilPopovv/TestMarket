import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrambs from "../../Components/BreadCrumbs/BreadCrumbs";
import Styles from "./SearchPage.module.css";
import StoreData from "../../store/StoreData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { observer } from "mobx-react-lite";
import { DataType } from "../../store/StoreData";

const SearchPage: React.FC = observer(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchedArr, setSearchedArr] = useState<Array<DataType>>([]);

    useEffect(() => {
        StoreData.addBread(location.pathname);
        if (!StoreData.searchValue.length) {
            setSearchedArr([]);
        } else {
            setSearchedArr(
                StoreData.data.filter((i) =>
                    i.title.toLowerCase().includes(StoreData.searchValue.toLowerCase())
                )
            );
        }
    }, [location]);

    return (
        <div className={Styles.searchPage}>
            <div className={Styles.breadCrumbs}>
                <BreadCrambs />
            </div>
            <h2>Search result</h2>
            <ul>
                {!searchedArr.length && "not found anything"}
                {!!searchedArr.length &&
                    searchedArr.map((i) => {
                        return (
                            <li
                                onClick={() => {
                                    navigate(
                                        `/goodspage/${i.category}/${i.id}`
                                    );
                                }}
                                key={i.title}
                            >
                                <ProductCard data={i} />
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
});

export default SearchPage;
