import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ourWorks } from "../../assets/state";
import "./swiper.css";

export default () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
    >
      {ourWorks.map((work) => {
        return (
          <SwiperSlide>
            <img src={work} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
