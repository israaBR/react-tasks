import React from "react";

import "../css/item.css";

function Item(props) {
  let { title, description } = props;
  return (
    <div className="container-fluid">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default Item;
