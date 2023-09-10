import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { memo, useEffect, useState } from "react";

import Styles from "./Slider.module.css";
import one from "./img/1.jpeg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import fore from "./img/4.jpg";
import five from "./img/5.jpg";
import { useMatchMedia } from "../../hooks/myMatcMedia";

const slides = [one, two, three, fore, five];

const Slider: React.FC = memo(() => {
    const [nav, setNav] = useState(true)
    const {isMobile} = useMatchMedia()

    useEffect(() => {
        if(isMobile) {
            setNav(prev => !prev)
        } else {
            setNav(prev => !prev)
        }
    }, [isMobile])

    return (
        <section className={Styles.slider}>
            <Swiper
                // style={{
                //     "--swiper-navigation-size": "30px",
                // }}
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
});

export default Slider;
