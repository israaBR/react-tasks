import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider";
import ProductsContainer from "./components/productsContainer";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductsContainer />
      <Footer />
    </div>
  );
}

export default App;
