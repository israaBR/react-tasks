import React, { Component } from "react";
import "../css/reusable.css";

class Reusable extends Component {
  render() {
    return (
      <div className={`component-fluid p-5 ${this.props.bg} ${this.props.txt}`}>
        <h2>{this.props.title}</h2>
        <p>
          <span className="fw-bold">variable description..</span>
          {this.props.description}
        </p>
        <p>
          <span className="fw-bold">fixed description..</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit id
          amet fugit, quasi nostrum, reprehenderit commodi beatae eius sunt
          accusamus. Eius perspiciatis ratione dolore numquam iusto facere eaque
          laudantium.
        </p>

        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}

export default Reusable;
