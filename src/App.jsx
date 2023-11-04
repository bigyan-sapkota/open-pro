import React from "react";
import Navbar from "./Containers/Navbar";
import "./index.css";
import Home from "./Containers/Home";
import Clients from "./Containers/Clients";
import Products from "./Containers/Products";
import UserReview from "./Containers/UserReview";
import Contact from "./Containers/Contact";
import Footer from "./Containers/Footer";

const App = () => {
  return (
    <div className="md:px-7">
      <Navbar />
      <Home />
      <Clients />
      <Products />
      <UserReview />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
