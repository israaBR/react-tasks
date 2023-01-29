import "./App.css";

import React, { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Reusable from "./components/reusable";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Reusable
        title="Hello Front-End"
        description="first reusable component"
        bg="bg-dark"
        txt="text-light"
      >
        <button className="btn btn-primary col-2">Show More</button>
      </Reusable>
      <Reusable
        title="Hello Front-End"
        description="second reusable component"
        bg="bg-light"
        txt="text-dark"
      >
        <button className="btn btn-success col-2">Click Here</button>
        <button className="btn btn-dark col-2">Show More</button>
      </Reusable>
      <Footer />
    </React.Fragment>
  );
}

export default App;
