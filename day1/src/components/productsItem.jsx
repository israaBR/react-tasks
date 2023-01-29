import React, { Component } from "react";
import "../css/productsItem.css";

class productsItem extends Component {
  clickHandler() {
    console.log("btn clicked");
  }
  render() {
    let { img, name, description } = this.props.product;
    return (
      <div className="card d-inline-block my-2 mx-3 col-2">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title fw-bold fs-3">{name}</p>
          <p className="card-text">{description}</p>
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
