import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import StoreData from "../../store/StoreData";
import Styles from "./ProductPage.module.css";
import MyButton from "../../UI/MyButton/MyButton";
import Spinner from "../../UI/Spinner/Spinner";
import BackArrow from "../../Components/BackArrow/BackArrow";

const ProductPage: React.FC = observer(() => {
    const { id } = useParams();
    const product = StoreData.data[Number(id) - 1];

    return (
        <>
            <section className={Styles.productPage}>
                <BackArrow />
                {StoreData.isSpinner ? (
                    <span className={Styles.spinner}>
                        <Spinner />
                    </span>
                ) : (
                    <div className={Styles.box}>
                        <div className={Styles.image}>
                            <img src={product?.image} />
                        </div>
                        <div className={Styles.description}>
                            <h2>{product?.title}</h2>
                            <p>{product?.description}</p>
                            <h1>{product?.price + "$"}</h1>
                            <MyButton value={"Add to cart"} fn={() => {}} />
                            <MyButton value={"Fast buy"} fn={() => {}} />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
});

export default ProductPage;
