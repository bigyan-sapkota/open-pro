import React from "react";

const HeaderText = (props) => {
  return (
    <div>
      <h1 className="text-white purple-gradient text-[40px] leading-tight font-extrabold text-center md:text-5xl md:leading-snug px-3">
        {props.head}
      </h1>
      <div className="flex items-center justify-center">
        <p className="text-gray-400 text-xl font-normal text-center mt-5 px-4 max-w-4xl">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default HeaderText;
