import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

const MarqueeSlider = () => {
  return (
    <>
      <div className="marquee-slider-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={-1}
                allowTouchMove={false}
                loop={true}
                speed={30000}
                autoplay={{
                  delay: -1000,
                  disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="animated-hero-slider mySwiper"
              >
                {Array.from({ length: 2 }).map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={require("./../../assets/images/screenshots_slider.webp")}
                      className="img-fluid"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeSlider;
