import React from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const showSideBar = () => {
    console.log("hello");
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block";
  };
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src="/images/brand_logo.svg" alt="logo" />
        </div>
        <ul className="nav-link">
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Location</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <a href="/" id="bars" onClick={showSideBar}>
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
