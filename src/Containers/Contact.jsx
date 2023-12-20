import React from "react";

const Contact = () => {
  return (
    <div className="px-4">
      <div className="md:px-20">
        <div className="bg-[#5D5DFF] py-6 md:py-14 px-4 md:px-12 flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-white text-[35px] leading-[45px] font-bold text-center md:text-left md:leading-[61px] mt-2 md:mt-1">
              Stay in the loop
            </h1>
            <p className="text-gray-100 text-[20px] font-normal text-center md:text-left">
              Join our newsletter to get top news before anyone else.
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <input
                type="text"
                placeholder="Your email..."
                className="mt-3 md:mt-0 w-full text-gray-400 bg-[#4B4ACF] text-left text-lg py-1.5 md:py-2 md:pr-24 px-3 border-[1px] border-[#8D8DFF] focus:outline-none"
              />
              <input
                type="submit"
                value="Subscribe"
                className="w-full text-[#4B4ACF] font-medium bg-white text-center text-base py-2 sm:px-4 md:py-2.5 md:px-0.5 border-[1px] border-[#8D8DFF]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
