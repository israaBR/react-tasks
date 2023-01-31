import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProduct(props) {
  const baseURL = "http://localhost:3000/data";

  let { id } = useParams();

  let [form, setForm] = useState({});
  let [errors, setErrors] = useState([]);

  const updateFormValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    viewProduct();
  }, []);

  const viewProduct = () => {
    axios
      .get(`${baseURL}/${id}`)
      .then((response) => {
        setForm(response.data);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  };
  const editProduct = () => {
    axios
      .put(`${baseURL}/${id}`, form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  };
  return (
    <div className="row g-3 my-3 w-50 mx-auto">
      <input
        className="form-input"
        type="text"
        name="image"
        onInput={updateFormValue}
        value={form.image}
        placeholder="image"
      />
      <input
        className="form-input"
        type="text"
        name="title"
        onInput={updateFormValue}
        value={form.title}
        placeholder="title"
      />
      <input
        className="form-input"
        type="text"
        name="description"
        onInput={updateFormValue}
        value={form.description}
        placeholder="description"
      />
      <input
        className="form-input"
        type="text"
        name="price"
        onInput={updateFormValue}
        value={form.price}
        placeholder="price"
      />
      <button className="btn btn-primary" onClick={editProduct}>
        Edit Product
      </button>
    </div>
  );
}

export default EditProduct;
