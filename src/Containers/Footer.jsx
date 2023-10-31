import React from "react";
import FooterNavigation from "../Components/FooterNavigation";
import { logo } from "../assets/images/index";

const Footer = () => {
  return (
    <div className="px-4 mt-8">
      <div>
        <div className="w-22">
          <img src={logo} className="w-16 mt-2" />
        </div>
        <p className="text-gray-400 text-base mb-6">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div>
        <FooterNavigation />
      </div>
      <p className="text-gray-400 text-base">
        © Cruip.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
