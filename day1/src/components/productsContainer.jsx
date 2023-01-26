import React, { Component } from "react";
import "../css/productsContainer.css";
import ProductsItem from "./productsItem";
import "../models/productsList.js";
import productsList from "../models/productsList.js";

class ProductsContainer extends Component {
  render() {
    return (
      <div className="row">
        <h1 className="text-center">Our Products</h1>
        <div className="row mx-5">
          {productsList.map((product) => {
            return <ProductsItem key={product.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductsContainer;
