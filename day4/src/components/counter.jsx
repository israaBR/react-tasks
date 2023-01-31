import React, { useContext, useState } from "react";
import { CounterContext } from "../context/counterContext";

import "../css/counter.css";

function Counter() {
  let counterContext = useContext(CounterContext);

  return (
    <div className="container-fluid p-5">
      <h2>Counter Component</h2>
      <p>Count is {counterContext.counter}</p>
      <button
        className="btn btn-success col-2 mx-3"
        onClick={counterContext.increase}
      >
        +
      </button>
      <button
        className="btn btn-danger col-2 mx-3"
        onClick={counterContext.decrease}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
