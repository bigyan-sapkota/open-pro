import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`py-2 px-7 text-white`}
        style={{
          backgroundColor: `${props.bgColor}`,
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
