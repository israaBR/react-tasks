import React, { Component } from "react";
import "../css/slider.css";

class Slider extends Component {
  render() {
    return (
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.nrn.com/sites/nrn.com/files/Starbucks-AI-earnings-call_2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.theedgemarkets.com/STARBUCKS-COFFEE_20221027162604_theedgemarkets.jpg?seti6dSQ3WSoxN_ozHpRfL8vFuCSL3EJ"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.guim.co.uk/img/media/d4e1ff1c19acb83b8cddd9752c91071cca4eeb57/0_74_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ad9732bc988a2227c5ec6334f67358ae  "
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Slider;
