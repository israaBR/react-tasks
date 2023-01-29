import React, { Component } from "react";
import "../css/header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="d-inline-block align-text-top mx-2"
              width="80"
              height="80"
              src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-png-transparent.png"
              alt="logo"
            />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link m-2 fw-b fs-4 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Hot Coffees
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cold Coffees
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bakery
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link m-2 fw-b fs-4 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2 fw-b fs-4" href="#">
                Gift Cards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2 fw-b fs-4" href="#">
                <i className="fa-solid fa-location-dot"></i> Find Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
