import React from "react";
import Button from "../Components/Button";

const Home = () => {
  return (
    <div className="mt-5">
      <h1 className="text-white purple-gradient text-[40px] leading-tight font-extrabold text-center md:text-5xl md:leading-snug px-3">
        Landing template for startups
      </h1>
      <p className="text-gray-400 text-xl font-normal text-center mt-5 px-4">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div
        className="flex flex-col items-center justify-between px-5 gap-4 mt-5
      md:flex-row md:justify-center"
      >
        <Button text="Start free trial" bgColor="#4B4ACF" />
        <Button text="Learn more" bgColor="#25282C" />
      </div>
    </div>
  );
};

export default Home;
