import Styles from "./MainPage.module.css";
import StoreData from "../../store/StoreData";
import { observer } from "mobx-react-lite";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Spinner from "../../UI/Spinner/Spinner";

const MainPage: React.FC = observer(() => {
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
                {!StoreData.isSpinner ? (
                    <>
                            {data.map((i) => {
                                return (
                                    <li 
                                    key={i.title}>
                                        <Link
                                            to={`/goodspage/${i.category}/${i.id}`}
                                        >
                                            <ProductCard data={i} />
                                        </Link>
                                    </li>
                                );
                            })}
                    </>
                ) : (
                    <span className={Styles.spinner}>
                        <Spinner />
                    </span>
                )}
            </ul>
        </section>
    );
});

export default MainPage;
