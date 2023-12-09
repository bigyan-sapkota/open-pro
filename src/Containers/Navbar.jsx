import React, { useEffect, useState } from "react";
import { logo } from "../assets/images";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Signinout from "../Components/SignInOut";

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="relative px-3 lg:px-10">
      <div className="flex items-center justify-between">
        <div className="w-22">
          <img src={logo} className="w-16 mt-2" />
        </div>
        <div>
          <div className="relative">
            <div>
              {showButton ? (
                <AiOutlineClose
                  className="text-white w-16 text-3xl cursor-pointer md:hidden"
                  onClick={() => setShowButton(!showButton)}
                />
              ) : (
                <FiMenu
                  className="text-white w-16 text-3xl cursor-pointer md:hidden"
                  onClick={() => setShowButton(!showButton)}
                />
              )}
            </div>

            <div className="absolute top-12 right-4 md:static">
              {showButton && <Signinout />}
            </div>

            <div className="hidden md:block">
              <Signinout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
