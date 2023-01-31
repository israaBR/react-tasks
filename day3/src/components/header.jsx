import React from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link m-2 fw-b fs-4 active"
              aria-current="page"
              to="home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link m-2 fw-b fs-4 active"
              aria-current="page"
              to="search"
            >
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link m-2 fw-b fs-4 active"
              aria-current="page"
              to="adduser"
            >
              Add User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
