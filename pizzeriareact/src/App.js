import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero exact path="/" />
      <Products exact path="/" heading='Choose your favorite' data={productData} />
      <Feature exact path="/" />
      <Products exact path="/" heading='Sweet Treats for You' data={productDataTwo} />
      <Footer exact path="/" />
    </Router>
  );
}

export default App;
