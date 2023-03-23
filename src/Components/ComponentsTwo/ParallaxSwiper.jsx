import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Slider1 from "../../images/mobile-slider1.png";
import Slider2 from "../../images/mobile-slider2.png";
import Slider3 from "../../images/mobile-slider3.png";
import Slider4 from "../../images/mobile-slider4.png";
import Slider5 from "../../images/mobile-slider5.png";
import Slider6 from "../../images/mobile-slider6.png";
import { FadeRight } from "../../utility/Fade";

export default function ParallaxSwiper() {
  const images = [
    {
      url: Slider1,
    },
    {
      url: Slider2,
    },
    {
      url: Slider3,
    },
    {
      url: Slider4,
    },
    {
      url: Slider5,
    },
    {
      url: Slider6,
    },
  ];

  return (
    <FadeRight>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image.url} style={{ height: "35rem" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </FadeRight>
  );
}
