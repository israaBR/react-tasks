import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Counter from "./components/counter";
import Product from "./components/product";
import AddProduct from "./components/addproduct";
import EditProduct from "./components/editproduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="edit-product/:id" element={<EditProduct />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
