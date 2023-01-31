import React, { useEffect, useState } from "react";

import "../css/adduser.css";

function AddUser(props) {
  let [formState, setFormState] = useState({
    username: "",
    password: "",
    valid: true,
    error: "",
  });
  let [users, setUsers] = useState([]);

  const setFormValue = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const validateForm = () => {
    if (formState.username.length == 0) {
      setFormState({
        valid: false,
        error: "user name is required",
      });
    } else if (formState.username.length < 4) {
      setFormState({
        ...formState,
        valid: false,
        error: "user name must be at least 4 characters",
      });
    } else if (formState.password.length == 0) {
      setFormState({
        ...formState,
        valid: false,
        error: "password is required",
      });
    } else if (String(formState.password).length < 8) {
      setFormState({
        ...formState,
        valid: false,
        error: "password must be at least 8 characters",
      });
    } else {
      setFormState({ ...formState, valid: true });
      addUserToList();
    }
  };

  const addUserToList = () => {
    setUsers([
      ...users,
      { name: formState.username, password: formState.password },
    ]);
  };

  return (
    <div className="container-fluid">
      <input
        onInput={setFormValue}
        type="text"
        name="username"
        placeholder="enter user name"
      />
      <input
        onInput={setFormValue}
        type="password"
        name="password"
        placeholder="enter password"
      />

      {!formState.valid && (
        <p className="text-danger mx-2 my-2"> {formState.error}</p>
      )}
      <button
        onClick={validateForm}
        className="btn btn-outline-primary mx-2 my-3 w-25"
      >
        Add User
      </button>
      <table className="table w-25 text-primary mx-2 my-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AddUser;
