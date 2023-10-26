import React from "react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

const ClientReview = () => {
  return (
    <>
      <section className="client-review">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <h2 className="text-capitalize">
                How people
                <br />
                enjoy the app
              </h2>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={30}
                // loop={true}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false
                // }}
                modules={[Autoplay]}
                className="mySwiper imageSlider"
              >
                {Array.from({ length: 3 }).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="img">
                      <div className="marquee_group_item">
                        <div className="marquee_group_item_frame">
                          <img
                            src={require("./../../assets/images/transparent_face_v2.png")}
                            className="watch_empty"
                            alt="transparent_face"
                          />
                        </div>
                        <div className="watch_div">
                        
                          <video
                            id="myVideo"
                            className="watch_wallpaper"
                            playsInline
                            autoPlay
                            loop
                            muted
                            poster={require("./../../assets/images/LW_green.webp")}
                          >
                            <source
                              src={require("./../../assets/images/LW_green.mp4")}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="title">
                        <h4>Best Apple Watch App</h4>
                        <ul className="star">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Got an Apple Watch for my birthday and thought the
                        wallpaper options were a bit bland. Discovered this app
                        and it's a game-changer! Now I can use any internet
                        picture as my watch wallpaper. Love how it adds a
                        personal touch. Kudos to the developer for this awesome
                        feature! If you want to spice up your Apple Watch, this
                        app is a must-have!
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-12">
              <a
                className="garident-btn"
                href="https://apps.apple.com/us/app/watch-faces-watchwizard/id6450963467"
                data-event-name="review_download"
              >
                Enjoy The App<i className="fa fa-arrow-right"></i>
                <div className="fill-two"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="glowing-animate">
          {[1, 2, 3, 4].map((i) => (
            <div className="glowing" key={i}>
              <span style={{ "--i": i }}></span>
              <span style={{ "--i": i + 1 }}></span>
              <span style={{ "--i": i + 2 }}></span>
            </div>
          ))}
        </div>
        <div className="overlay"></div>
      </section>
    </>
  );
};

export default ClientReview;
