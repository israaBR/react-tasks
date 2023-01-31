import { CounterContext } from "./counterContext";
import React, { useState } from "react";

export function CounterProvider(props) {
  let [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((counter) => counter + 1);
  };
  const decrease = () => {
    setCounter((counter) => counter - 1);
  };
  let valueObj = { counter, increase, decrease };
  return (
    <CounterContext.Provider value={valueObj}>
      {props.children}
    </CounterContext.Provider>
  );
}
