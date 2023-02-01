import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../css/home.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductById,
  editProduct,
  removeProduct,
} from "../store/slices/productSlice";

function Home(props) {
  const { productsList } = useSelector((store) => store.products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  let navigate = useNavigate();
  const openProduct = (event) => {
    navigate(`/product/${event.target.id}`);
  };
  const goToAddProduct = () => {
    navigate("/add-product");
  };
  const goToEditProduct = (event) => {
    navigate(`/edit-product/${event.target.id}`);
  };

  const removeProduct = (event) => {
    // console.log(event.target.id);
    dispatch(removeProduct(event.target.id));
  };

  return (
    <div className="row m-5 ">
      {productsList.map((product) => {
        return (
          <div className="card col-2 m-1" key={product.id}>
            <img
              src={product.image}
              className="card-img-top w-50 h-50 mx-auto"
              id={product.id}
              onClick={openProduct}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <button
                className="btn btn-outline-primary col-4 mx-1"
                id={product.id}
                onClick={goToEditProduct}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger col-6 mx-1"
                id={product.id}
                onClick={removeProduct}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <button
        className=" m-5 p-5 col-3 btn btn-outline-dark"
        onClick={goToAddProduct}
      >
        Add Product
      </button>
    </div>
  );
}

export default Home;
