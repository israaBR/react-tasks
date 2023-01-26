import React, { Component } from "react";
import "../css/productsItem.css";

class productsItem extends Component {
  clickHandler() {
    console.log("btn clicked");
  }
  render() {
    return (
      <div className="card d-inline-block my-2 mx-3 col-2">
        <img
          src="https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?impolicy=1by1_wide_topcrop_630"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-title fw-bold fs-3">Iced Caffè Latte</p>
          <p className="card-text">
            Our dark, rich espresso combined with milk and served over ice. A
            perfect milk-forward cooldown.
          </p>
          <p className="card-text fw-bold">130 calories, 11g sugar, 4.5g fat</p>
          <a href="#" className="btn btn-success" onClick={this.clickHandler}>
            Full nutrition & ingredients list
          </a>
        </div>
      </div>
    );
  }
}

export default productsItem;
