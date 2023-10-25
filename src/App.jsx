import React from "react";
import Navbar from "./Containers/Navbar";
import "./index.css";
import Home from "./Containers/Home";

const App = () => {
  return (
    <div className="md:px-7">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
