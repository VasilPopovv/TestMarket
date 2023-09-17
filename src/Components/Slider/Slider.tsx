import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useMatchMedia } from "../../hooks/myMatcMedia";

import Styles from "./Slider.module.css";
import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import fore from "./img/4.jpg";
import five from "./img/5.jpg";

const slides = [one, two, three, fore, five];

const Slider: React.FC = () => {
    const [nav, setNav] = useState(true)
    const {isMobile} = useMatchMedia()

    useEffect(() => {
        isMobile ? setNav(false) : setNav(true)
    }, [isMobile])

    return (
        <section className={Styles.slider}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                navigation={nav}
                modules={[Pagination, Navigation, Autoplay]}
                className={Styles.mySwiper}
            >
                {slides.map((i) => {
                    return (
                        <SwiperSlide className={Styles.slide} key={i}>
                            <img src={i} alt="image" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Slider;
