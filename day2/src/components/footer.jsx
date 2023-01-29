import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="row bg-black">
          <div className="col-4 my-4">
            <ul>
              <label className="fw-bold fs-5">Order and Pickup</label>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Order on the App</a>
              </li>
              <li>
                <a href="#">Order in the Web</a>
              </li>
            </ul>
          </div>
          <div className="col-4 my-4">
            <ul>
              <label className="fw-bold fs-5">About Us</label>
              <li>
                <a href="#">Our Coffee</a>
              </li>
              <li>
                <a href="#">Stories and News</a>
              </li>
              <li>
                <a href="#">Culture and Values</a>
              </li>
            </ul>
          </div>
          <div className="col-4 my-4">
            <ul>
              <label className="fw-bold fs-5">Useful Links</label>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Alumni Community</a>
              </li>
            </ul>
          </div>
        </footer>
        <div className="under-footer bg-white">
          <div className="row">
            <ul className="social">
              <li className="d-inline-block mt-3 mx-3">
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li className="d-inline-block mt-3 mx-3">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="d-inline-block mt-3 mx-3">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="d-inline-block mt-3 mx-3">
                <i className="fa-brands fa-pinterest"></i>
              </li>
            </ul>
          </div>
          <div className="row">
            <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
