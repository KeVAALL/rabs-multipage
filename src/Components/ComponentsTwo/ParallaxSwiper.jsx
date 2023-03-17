import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box } from "@mui/system";

export default function ParallaxSwiper() {
  const images = [
    {
      url: "http://rabsconnect.in/assets/img/images/moblie-slider1.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/images/moblie-slider2.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/images/moblie-slider3.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/images/moblie-slider4.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/images/moblie-slider5.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/images/moblie-slider6.webp",
    },
  ];

  return (
    <>
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
    </>
  );
}
