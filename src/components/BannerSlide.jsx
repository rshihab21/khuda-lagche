import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import banner_img1 from "../assets/images/bg.jpg";
import banner_img2 from "../assets/images/bg2.jpg";

import { Scrollbar } from "swiper/modules";
const BannerSlide = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner_img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_img2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlide;
