import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Product(props) {
  const baseURL = "http://localhost:3000/data";
  let [errors, setErrors] = useState([]);
  let [product, setProduct] = useState({});

  let { id } = useParams();
  useEffect(() => {
    viewProduct(id);
  }, []);

  const viewProduct = (id) => {
    axios
      .get(`${baseURL}/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  };
  return (
    <div className="card col-4 mx-auto my-2" key={product.id}>
      <img
        src={product.image}
        className="card-img-top w-50 h-50 mx-auto"
        id={product.id}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{product.title}</h5>
        <p className="card-text ">{product.description}</p>
        <p className="text-primary">${product.price}</p>
      </div>
    </div>
  );
}

export default Product;
