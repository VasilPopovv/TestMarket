import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import StoreData from "../../store/StoreData";
import Styles from "./ProductPage.module.css";
import MyButton from "../../UI/MyButton/MyButton";
import BackArrow from "../../Components/BreadCrumbs/BreadCrumbs";
import { AiFillStar } from "react-icons/ai";

const ProductPage: React.FC = observer(() => {
    const location = useLocation();
    const { id } = useParams();
    const product = StoreData.data[Number(id) - 1];

    useEffect(() => {
        StoreData.addBread(location.pathname);
      
    }, [location]);

    return (
        <>
            <section className={Styles.productPage} >
                <BackArrow />
                {!StoreData.isLoading && (
                    <div className={Styles.box}>
                        <div className={Styles.image}>
                            <img src={product.image} />
                        </div>
                        <div className={Styles.description}>
                            <h2>{product.title}</h2>
                            <div>
                                <h1>{product.price + "$"}</h1>

                                <span>
                                    {[
                                        ...new Array(
                                            Math.round(product.rating.rate)
                                        ),
                                    ].map((_, index) => {
                                        return (
                                            <span key={index}>
                                                <AiFillStar />
                                            </span>
                                        );
                                    })}
                                </span>
                            </div>
                            <MyButton value={"Add to cart"} fn={() => {}} />
                            <MyButton value={"Fast buy"} fn={() => {}} />
                            <h3>Descriptoin</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
});

export default ProductPage;
