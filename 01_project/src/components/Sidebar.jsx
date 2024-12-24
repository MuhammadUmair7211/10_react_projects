import React from "react";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <a href="/">
          <i className="fa-solid fa-xmark"></i>
        </a>
      </li>
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
  );
};

export default Sidebar;
