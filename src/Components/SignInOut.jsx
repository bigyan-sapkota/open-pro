import React from "react";

const Signinout = () => {
  return (
    <div className="py-3 px-3 bg-[#25282C] sm:flex sm:bg-transparent">
      <button className="bg-transparent text-[#4b4acf] px-16 py-3 hover:text-white whitespace-nowrap font-medium text-base text-center md:px-5 md:py-2">
        Sign In
      </button>
      <button className="text-white px-16 py-3 bg-[#4b4acf] hover:bg-[#3939a0] whitespace-nowrap font-medium text-base md:px-5 md:py-2">
        Sign Up
      </button>
    </div>
  );
};

export default Signinout;
