import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Search from "./components/search";
import AddUser from "./components/adduser";
import NotFound from "./components/notfound";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
