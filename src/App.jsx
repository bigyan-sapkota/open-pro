import React from "react";
import Navbar from "./Containers/Navbar";
import "./index.css";
import Home from "./Containers/Home";
import Clients from "./Containers/Clients";
import Products from "./Containers/Products";

const App = () => {
  return (
    <div className="md:px-7">
      <Navbar />
      <Home />
      <div className="md:px-10">
        <Clients />
      </div>
      <Products />
    </div>
  );
};

export default App;
