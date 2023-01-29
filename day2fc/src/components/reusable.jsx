import React from "react";
import "../css/reusable.css";

function Reusable(props) {
  return (
    <div className={`component-fluid p-5 ${props.bg} ${props.txt}`}>
      <h2>{props.title}</h2>
      <p>
        <span className="fw-bold">variable description..</span>
        {props.description}
      </p>
      <p>
        <span className="fw-bold">fixed description..</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit id
        amet fugit, quasi nostrum, reprehenderit commodi beatae eius sunt
        accusamus. Eius perspiciatis ratione dolore numquam iusto facere eaque
        laudantium.
      </p>

      <div className="row">{props.children}</div>
    </div>
  );
}

export default Reusable;
