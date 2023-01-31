import React, { useState } from "react";
import axios from "axios";

function AddProduct(props) {
  const baseURL = "http://localhost:3000/data";

  let [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });
  let [errors, setErrors] = useState([]);

  const updateFormValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const addProduct = (data) => {
    axios
      .post(baseURL, form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  };
  return (
    <div className="row g-3 w-50 mx-auto my-3">
      <input
        className="form-input"
        type="text"
        name="image"
        onInput={updateFormValue}
        placeholder="image"
      />
      <input
        className="form-input"
        type="text"
        name="title"
        onInput={updateFormValue}
        placeholder="title"
      />
      <input
        className="form-input"
        type="text"
        name="description"
        onInput={updateFormValue}
        placeholder="description"
      />
      <input
        className="form-input"
        type="text"
        name="price"
        onInput={updateFormValue}
        placeholder="price"
      />
      <button className="btn btn-primary" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
