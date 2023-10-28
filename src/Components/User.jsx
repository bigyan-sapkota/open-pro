import React from "react";

const User = (props) => {
  return (
    <div className="bg-[#25282C] p-4">
      <div className="relative">
        <img src={props.img} className="rounded-full w-14" />
        <div className="absolute -top-3 left-8 ad font-semibold italic text-7xl text-[#5D5DFF]">
          ''
        </div>
      </div>
      <p className="text-gray-400 text-lg my-3">
        — Open PRO lets me quickly get the insights I care about so that I can
        focus on my productive work. I've had Open PRO for about 24 hours now
        and I honestly don't know how I functioned without it before.
      </p>
      <div className="flex items-center justify-center my-4">
        <div className="bg-gray-500 h-[1px] w-full"></div>
      </div>
      <div className="flex gap-3 md:gap-5 font-medium text-base">
        <p className="text-white">Anastasia Dan</p>
        <p>
          <a href="#" className="text-[#5D5DFF] hover:text-white">
            UX Board
          </a>
        </p>
      </div>
    </div>
  );
};

export default User;
