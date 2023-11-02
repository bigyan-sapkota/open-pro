import React, { useState } from "react";
import Button from "../Components/Button";
import { hero } from "../assets/images";
import { FaPlay } from "react-icons/fa";
import HeaderText from "../Components/HeaderText";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="px-4 mt-10">
      <div className="md:px-20">
        <div className="mt-5">
          <HeaderText
            head="Landing template for startups"
            text="Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever."
          />
          <div
            className="flex flex-col items-center justify-between px-5 gap-4 mt-5
      md:flex-row md:justify-center"
          >
            <Button text="Start free trial" bgColor="#4B4ACF" />
            <Button text="Learn more" bgColor="#25282C" />
          </div>
          <div className="relative mt-12 px-5 md:px-36 flex items-center justify-center">
            <img src={hero} alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full opacity-80 cursor-pointer hover:opacity-70 md:w-20 md:h-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80">
              <FaPlay className="text-purple-700 w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
