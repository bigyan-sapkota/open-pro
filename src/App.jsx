import React from "react";
import Navbar from "./Containers/Navbar";
import "./index.css";
import Home from "./Containers/Home";
import Clients from "./Containers/Clients";

const App = () => {
  return (
    <div className="md:px-7">
      <Navbar />
      <Home />
      <Clients />
    </div>
  );
};

export default App;
