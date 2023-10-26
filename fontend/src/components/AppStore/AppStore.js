import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

const AppStore = () => {
  return (
    <>
      <div className="app-store-download">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="img">
                <img
                  className="img-fluid"
                  src={require("./../../assets/images/rating.webp")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-12">
              <p>Highest rated watch app on the App Store</p>
              <h2>Compatible with All Series</h2>
              <ul>
                <li>Series Ulta</li>
                <li>Series 8</li>
                <li>Series SE2</li>
                <li>Series 7</li>
                <li>Series 6</li>
                <li>Series 5</li>
                <li>Series 4</li>
                <li>Series SE</li>
                <li>Series 3</li>
                <li>Series 2</li>
                <li>Series 1</li>
                <li>Original</li>
              </ul>
              <h2>
                Massive collections of Watch Faces & Widgets. Create Your Own
                Design
              </h2>
              <a
                href="https://apps.apple.com/us/app/watch-faces-watchwizard/id6450963467"
                className="download-button garident-btn"
                target="_blank"
                data-event-name="collections_download"
                rel="noreferrer"
              >
                <i className="fab fa-apple"></i>Download on the App Store
                <div className="fill-two"></div>
              </a>
            </div>
            <div className="col-12 px-0">
              <div className="marquee-slider">
                <div className="marquee">
                  <Swiper
                    slidesPerView= {10}
                    spaceBetween={-1}
                    allowTouchMove={false}
                    loop={true}
                    speed={3000}
                    autoplay={{
                      delay: -1000,
                      disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    className="animated-hero-slider mySwiper"
                  >
                    {Array.from({ length: 30 }).map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="marquee_group_item">
                          <div className="marquee_group_item_frame">
                            <img
                              src={require("./../../assets/images/apple-frame.png")}
                              className="watch_empty img-fluid"
                              alt="apple-frame"
                            />
                          </div>
                          <div className="watch_div">
                            <img
                              src={require("./../../assets/images/LW_green.webp")}
                              className="img-fluid watch_wallpaper"
                              alt="apple_logo_with_cloth_purple_portrait"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="marquee marquee--reverse">
                  <Swiper
                    dir="rtl"
                    slidesPerView= {10}
                    spaceBetween={-1}
                    allowTouchMove={false}
                    loop={true}
                    speed={3000}
                    autoplay={{
                      delay: -1000,
                      disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    className="animated-hero-slider mySwiper"
                  >
                    {Array.from({ length: 13 }).map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="marquee_group_item">
                          <div className="marquee_group_item_frame">
                            <img
                              className="img-fluid watch_empty"
                              src={require("./../../assets/images/apple-frame.png")}
                              alt="apple-frame"
                            />
                          </div>
                          <div className="watch_div">
                            <img
                              src={require("./../../assets/images/LW_green.webp")}
                              className="img-fluid watch_wallpaper"
                              alt="apple_logo_with_cloth_purple_portrait"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glowing-animate">
          {[1, 2, 3].map((i) => (
            <div className="glowing" key={i}>
              <span style={{ "--i": i }}></span>
              <span style={{ "--i": i + 1 }}></span>
              <span style={{ "--i": i + 2 }}></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppStore;
