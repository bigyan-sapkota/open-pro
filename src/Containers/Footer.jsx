import React from "react";
import FooterNavigation from "../Components/FooterNavigation";
import { logo } from "../assets/images/index";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const icons = [
  <FaXTwitter />,
  <AiFillGithub />,
  <FaFacebookF />,
  <AiOutlineInstagram />,
  <AiFillLinkedin />,
];

const Footer = () => {
  return (
    <div className="px-4 mt-10">
      <div className="md:px-20">
        <div className="flex flex-col md:flex-row md:gap-20">
          <div>
            <div className="w-22 -ml-4 -mb-4">
              <img src={logo} className="w-16" />
            </div>
            <p className="text-gray-400 text-base mb-6 max-w-md">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <div>
            <FooterNavigation />
          </div>
        </div>
        <div className="pb-4 md:pb-16 flex flex-col-reverse gap-3 md:flex-row md:justify-between">
          <p className="text-gray-400 text-base">
            © Cruip.com. All rights reserved.
          </p>
          <div className="flex">
            {icons.map((icon, i) => (
              <div key={i}>
                <div className="flex justify-center items-center text-[#5D5DFF] bg-gray-800 hover:text-gray-100 hover:bg-[#5D5DFF] rounded-full p-2 mr-4 cursor-pointer md:text-lg">
                  {icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
