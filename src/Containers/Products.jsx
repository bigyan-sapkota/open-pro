import React from "react";
import HeaderText from "../Components/HeaderText";
import { feature1, feature2, feature3 } from "../assets/images/index";
import { TiTick } from "react-icons/ti";

const images = [feature1, feature2, feature3];
const lists = [
  "Duis aute irure dolor in reprehenderit",
  "Excepteur sint occaecat",
  "Amet consectetur adipiscing elit",
];

const Products = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-10 md:mb-14 px-4">
        <div className="bg-gray-800 w-5/6 h-[1px]"></div>
      </div>
      <div>
        <div className="flex items-center justify-center mb-4">
          <p className="bg-[#BBF7D0] font-semibold text-[#16A368] text-center w-fit px-4 py-1 rounded-xl text-sm">
            Reach goals that matter
          </p>
        </div>
        <HeaderText
          head="One product, unlimited solutions"
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla."
        />
        <div className="mt-10">
          {images.map((item, i) => (
            <div key={i}>
              <div
                className={`flex ${
                  i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col  mt-16 md:px-20`}
              >
                <div className="px-3 md:w-4/5 mb-6">
                  <img src={item} alt="" />
                </div>
                <div className="md:flex flex-col items-center justify-center px-3 md:px-16">
                  <div className="flex flex-col justify-center">
                    <p className="ad text-[#2840FF] text-lg">
                      More speed. Less spend
                    </p>
                    <h1 className="text-white text-[35px] leading-none font-bold text-left md:leading-[61px] my-2">
                      Keep projects on schedule
                    </h1>
                    <p className="text-gray-400 text-lg font-normal text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div>
                      {lists.map((listItem, j) => (
                        <div key={j} className="flex items-center gap-2 mt-2">
                          <div>
                            <TiTick className="text-[#20AA53] text-xl" />
                          </div>
                          <p className="text-gray-400 text-lg">{listItem}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-14">
        <div className="bg-gray-800 w-5/6 h-[1px]"></div>
      </div>
    </div>
  );
};

export default Products;
