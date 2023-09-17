import { BsSearch } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Header.module.css";
import StoreData from "../../store/StoreData";
import { useMatchMedia } from "../../hooks/myMatcMedia";

const HeaderForm = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const { isMobile } = useMatchMedia();

    const setSearchValue = (str: string) => {
        setValue(str);
        StoreData.search(str);
    };

    return (
        <>
            {!isMobile ? (
                <form
                    name="form"
                    className={Styles.form}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {isFocus && !!StoreData.searchArr.length && (
                        <div className={Styles.searchResult}>
                            <ul>
                                {StoreData.searchArr.map((i) => {
                                    return (
                                        <li
                                            onClick={() =>
                                                navigate(
                                                    `/goodspage/${i.category}/${i.id}`
                                                )
                                            }
                                            key={i.title}
                                        >
                                            <img src={i.image}></img>
                                            <span>{i.title}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    <span>
                        <BsSearch />
                    </span>
                    <input
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() =>
                            setTimeout(() => {
                                setIsFocus(false);
                            }, 250)
                        }
                        onInput={(e: FormEvent<HTMLInputElement>) =>
                            setSearchValue(e.currentTarget.value)
                        }
                        className={Styles.input}
                        type="text"
                    />
                    <button
                        onClick={() => navigate("/search")}
                        className={Styles.button}
                    >
                        Search
                    </button>
                </form>
            ) : (
                <form
                    name="form"
                    className={Styles.form}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input className={Styles.mobInput} type="text" />
                    <button
                        onClick={() => navigate("/search")}
                        className={Styles.mobButton}
                    >
                        <BsSearch />
                    </button>
                </form>
            )}
        </>
    );
};

export default HeaderForm;
