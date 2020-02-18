import React, { useState } from "react";

import Banner from "../../components/assets/images/soundcloud.png";

import Searchbar from "../search/Searchbar";

const Navbar = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleOnClickMenu = () => {
    if (isBurgerActive) {
      setIsBurgerActive(false);
    } else {
      setIsBurgerActive(true);
    }
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container is-widescreen">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://soundcloud.com/discover/">
            <img src={Banner} alt="hero" width="40" height="50" />
            <div className="nav-header-title">Sound Cloud</div>
          </a>

          <a
            role="button"
            className={`navbar-burger burger burger ${
              isBurgerActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleOnClickMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarSoundCloud"
          className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}
        >
          <div className="nav-list navbar-start">
            <a className="nav-list navbar-item">Home</a>
            <a className="nav-list navbar-item">Stream</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Contact</a>
                <a className="navbar-item">Users</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <Searchbar />
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white is-rounded has-text-black">
                  Signup
                </a>
                <button className="btn-color">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
