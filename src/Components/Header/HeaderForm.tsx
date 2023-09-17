import { BsSearch } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Header.module.css";
import StoreData from "../../store/StoreData";
import { useMatchMedia } from "../../hooks/myMatcMedia";
import { observer } from "mobx-react-lite";
import { DataType } from "../../store/StoreData";

const HeaderForm = observer(() => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const { isMobile } = useMatchMedia();
    const [searchedArr, setSearchedArr] = useState<Array<DataType>>([]);

    const setSearchValue = (str: string) => {
        setValue(str);
        if (!str.trim().length) setSearchedArr([]);
        else {
            setSearchedArr(
                StoreData.data.filter((i) =>
                    i.title.toLowerCase().includes(str.toLowerCase().trim())
                )
            );
            StoreData.setSearchValue(str);
        }
    };

    return (
        <>
            <form
                name="form"
                className={Styles.form}
                onSubmit={(e) => e.preventDefault()}
            >
                {isFocus && !!searchedArr.length && (
                    <div className={Styles.searchResult}>
                        <ul>
                            {searchedArr.map((i) => {
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
                <span>{!isMobile && <BsSearch />}</span>
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
                    className={isMobile ? Styles.mobInput : Styles.input}
                    type="text"
                />
                <button
                    onClick={() => {
                        if (!value.trim().length) return;
                        navigate("/search");
                    }}
                    className={isMobile ? Styles.mobButton : Styles.button}
                >
                    {isMobile ? <BsSearch /> : "Search"}
                </button>
            </form>
        </>
    );
});

export default HeaderForm;
