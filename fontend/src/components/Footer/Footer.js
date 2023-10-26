import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <nav className="footer-navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link
                className=""
                to="https://apps.apple.com/us/app/watch-faces-watchwizard/id6450963467"
              >
                <img
                  src={require('./../../assets/images/apple_watch_face_logo.webp')}
                  alt="Logo"
                  width="55"
                  height="55"
                  className="d-inline-block align-text-top"
                />
                Watch Faces - WatchWizard
              </Link>
            </div>
          </div>
        </nav>
      </footer>
      <div className="tiny-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <p>
                &copy;
                <Link
                  className="mx-1"
                  to="https://apps.apple.com/us/app/watch-faces-watchwizard/id6450963467"
                >
                  Appdrove LLC
                </Link>
                All rights reserved {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
