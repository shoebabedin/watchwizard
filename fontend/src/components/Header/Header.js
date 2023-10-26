import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
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
        </nav>
      </header>
    </>
  );
};

export default Header;
