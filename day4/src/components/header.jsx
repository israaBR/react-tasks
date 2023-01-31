import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CounterContext } from "../context/counterContext";
import "../css/header.css";

function Header(props) {
  let counterContext = useContext(CounterContext);
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
              to="counter"
            >
              Counter <strong>{counterContext.counter}</strong>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link m-2 fw-b fs-4 active"
              aria-current="page"
              to="adduser"
            >
              User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
