import React from "react";
import LogoIcon from "../assets/images/logo.svg";
import SearchIcon from "../assets/images/search.svg";
import StoreIcon from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="nav-list-styled">
          <li>
            <img src={LogoIcon} alt="Apple Logo" />
          </li>
          <li>
            <a className="nav-link-styled">Store</a>
          </li>
          <li>
            <a className="nav-link-styled">Mac</a>
          </li>
          <li>
            <a className="nav-link-styled">iPad</a>
          </li>
          <li>
            <a className="nav-link-styled">iPhone</a>
          </li>
          <li>
            <a className="nav-link-styled">Watch</a>
          </li>
          <li>
            <a className="nav-link-styled">AirPods</a>
          </li>
          <li>
            <a className="nav-link-styled">TV & Home</a>
          </li>
          <li>
            <a className="nav-link-styled">Entertainment</a>
          </li>
          <li>
            <a className="nav-link-styled">Accessories</a>
          </li>
          <li>
            <a className="nav-link-styled">Support</a>
          </li>
          <li>
            <img src={SearchIcon} alt="Search" />
          </li>
          <li>
          <img src={StoreIcon} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
