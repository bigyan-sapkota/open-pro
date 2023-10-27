import React from "react";
import HeaderText from "../Components/HeaderText";
import { RiStarSmileFill } from "react-icons/ri";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsGlobe2, BsChatDots } from "react-icons/bs";
import { LiaRobotSolid } from "react-icons/lia";
import { BiLike } from "react-icons/bi";

const clientItems = [
  <RiStarSmileFill />,
  <AiOutlineFileSearch />,
  <BsGlobe2 />,
  <LiaRobotSolid />,
  <BiLike />,
  <BsChatDots />,
];

const Clients = () => {
  return (
    <div className="py-12 md:py-20 px-30">
      <HeaderText
        head="The majority of our customers do not understand their workflows."
        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientItems.map((items, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-3 p-4"
          >
            <div className="text-white text-3xl bg-[#5D5DFF] p-4 rounded-full">
              {items}
            </div>
            <h3 className="text-2xl text-white font-bold">Instant Features</h3>
            <p className="text-gray-400 text-[19px] text-lg font-normal text-center w-64">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
