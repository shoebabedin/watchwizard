import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import SonarWave from "../SonarWave.js/SonarWave";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2>
                Elevate your Apple Watch
                <br />
                experience with WatchWizard
              </h2>
              <h5>where magic meets your wrist</h5>
              <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {Array.from({ length: 3 }).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper_slider_item">
                      <div className="marquee_group_item_frame">
                        <img
                          src={require("./../../assets/images/apple-frame-mockup.png")}
                          className="watch_empty"
                          alt="apple-frame"
                        />
                      </div>
                      <div className="watch_div">
                        <img
                          src={require("./../../assets/images/LW_green.webp")}
                          className="watch_wallpaper"
                          alt="tech_blue_clock"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <SonarWave />
              </Swiper>
              <p>
                Start Customizing
                <br />
                watch faces
              </p>
              <Link
                className="garident-btn"
                to="https://apps.apple.com/us/app/watch-faces-watchwizard/id6450963467"
                data-event-name="top_download"
              >
                Install Now<i className="fa fa-arrow-right"></i>
                <div className="fill-two"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
