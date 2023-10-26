import React from "react";
import { Link } from "react-router-dom";

const PlayWithWatch = () => {
  return (
    <>
      <div className="play-with-watch">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <h4>Customize your watch faces</h4>
              <p>
                Change every details on your Watch Face to reflect your unique
                style and mode. Experience Apple Watch customization at its
                finest!
              </p>
            </div>
            <div className="col-12">
              <Link
                to="https://apps.apple.com/us/app/watch-faces-watchwizard/id6450963467"
                target="_blank"
                data-event-name="customization_download"
                role="button"
              >
                <video
                  id="myVideo"
                  playsInline
                  autoPlay
                  loop
                  muted
                  poster={require("./../../assets/images/video-poster.webp")}
                >
                  <source
                    src={require("./../../assets/images/watch-video.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="overlay">
                  <img
                    src={require("./../../assets/images/app-store.webp")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayWithWatch;
