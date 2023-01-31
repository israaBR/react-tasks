import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../css/home.css";
import { useNavigate, useParams } from "react-router-dom";

function Home(props) {
  const baseURL = "http://localhost:3000/data";

  let [products, setProducts] = useState([]);
  let [errors, setErrors] = useState([]);
  useEffect(() => {
    viewAllProducts();
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

  const viewAllProducts = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  };

  const removeProduct = (event) => {
    axios
      .delete(`${baseURL}/${event.target.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  };

  return (
    <div className="row m-5 ">
      {products.map((product, index) => {
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
