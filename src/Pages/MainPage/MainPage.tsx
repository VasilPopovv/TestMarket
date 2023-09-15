import Styles from "./MainPage.module.css";
import StoreData from "../../store/StoreData";
import { observer } from "mobx-react-lite";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";

const MainPage: React.FC = observer(() => {
    const navigate = useNavigate();
    const data = StoreData.data
        .slice()
        .sort((a, b) => b.rating.rate - a.rating.rate);

    return (
        <section className={Styles.main}>
            <div className={Styles.slider}>
                <Slider />
            </div>
            <h2>Our products</h2>
            <ul>
                {StoreData.isNetworkError && "Network error"}
                    <>
                        {data.map((i) => {
                            return (
                                <li key={i.title}>
                                    <div
                                        className={Styles.link}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(
                                                `/goodspage/${i.category}/${i.id}`
                                            )
                                        }
                                        }
                                        // to={`/goodspage/${i.category}/${i.id}`}
                                    >
                                        <ProductCard data={i} />
                                    </div>
                                </li>
                            );
                        })}
                    </>
            </ul>
        </section>
    );
});

export default MainPage;
