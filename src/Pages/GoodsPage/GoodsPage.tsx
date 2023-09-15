import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import StoreData from "../../store/StoreData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Styles from "./GoodsPage.module.css";
import { observer } from "mobx-react-lite";
import BackArrow from "../../Components/BackArrow/BackArrow";

// const optoins = ["By rating", "By price ⬇", "By price ⬆", "By name"];

const GoodsPage: React.FC = observer(() => {
    const { category } = useParams();
    const [sortBy, setSortBy] = useState("");
    const goodsFiltered = StoreData.category(category, sortBy);


    return (
        <section className={Styles.goodsPage}>
            <div className={Styles.back}>
                <BackArrow />
            </div>
            <div className={Styles.category}>
                <h2>{category?.toUpperCase()}</h2>
            </div>
            <div className={Styles.filter}>
                <label htmlFor="filter">
                    <select
                        onChange={(e) => setSortBy(e.target.value)}
                        name="filter"
                        id="filter"
                    >
                        <option value={"Rating"}>By rating</option>
                        <option value={"Big"}>By price ⬇</option>
                        <option value={"Small"}>By price ⬆</option>
                        <option value={"Name"}>By name</option>
                    </select>
                </label>
            </div>
            <div>
                    <>
                        <ul>
                            {goodsFiltered &&
                                goodsFiltered.map((i) => {
                                    return (
                                        <li key={i.title} >
                                            
                                            <Link
                                                to={`/goodspage/${i.category}/${i.id}`}
                                            >
                                                <ProductCard data={i} />
                                            </Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </>
            </div>
        </section>
    );
});

export default GoodsPage;
