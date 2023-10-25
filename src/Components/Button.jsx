import React from "react";

const Button = (props) => {
  return (
    <button
      className="w-full py-2.5 text-center font-medium text-white md:w-40 "
      style={{
        backgroundColor: `${props.bgColor}`,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
