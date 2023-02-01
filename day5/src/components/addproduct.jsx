import React, { useEffect, useState } from "react";
import { createProduct } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

function AddProduct(props) {
  const { productsList } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  let [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });

  const updateFormValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const addProduct = () => {
    dispatch(createProduct(form));
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
