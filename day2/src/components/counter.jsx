import React, { Component } from "react";
import "../css/counter.css";

class Counter extends Component {
  state = {
    isOkay: true,
    title: "Component Title",
    count: 0,
  };
  changeTitle = () => {
    this.setState({
      title: "Counter Component",
    });
  };
  increase = () => {
    this.setState({
      count: (this.state.count += 1),
    });
    if (!this.state.isOkay) this.state.isOkay = true;
  };
  decrease = () => {
    if (this.state.count == 0) {
      this.setState({
        isOkay: false,
      });
    } else {
      this.setState({
        count: (this.state.count -= 1),
      });
    }
  };

  render() {
    return (
      <div className="container-fluid p-5">
        <h2>{this.state.title}</h2>
        <p>Count is {this.state.count}</p>
        <button className="btn btn-success col-2 mx-3" onClick={this.increase}>
          +
        </button>
        <button className="btn btn-danger col-2 mx-3" onClick={this.decrease}>
          -
        </button>
        <button
          className="btn btn-primary col-2 mx-3"
          onClick={this.changeTitle}
        >
          change title
        </button>
        {!this.state.isOkay && <p>Count can't be less than zero</p>}
      </div>
    );
  }
}

export default Counter;
