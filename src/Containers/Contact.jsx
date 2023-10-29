import React from "react";

const Contact = () => {
  return (
    <div className="px-4">
      <div className="bg-[#5D5DFF] py-6 px-7 flex flex-col md:flex-row md:justify-center md:items-center">
        <div>
          <h1 className="text-white text-[35px] leading-[45px] font-bold text-center md:leading-[61px] my-2">
            Stay in the loop
          </h1>
          <p className="text-gray-100 text-[20px] font-normal text-center">
            Join our newsletter to get top news before anyone else.
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-2 md:flex-row">
            <input
              type="text"
              placeholder="Your best email..."
              className="mt-3 w-full text-gray-400 bg-[#4B4ACF] text-left text-lg py-1.5 px-4 border-[1px] border-[#8D8DFF]"
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-full text-[#4B4ACF] font-medium bg-white text-center text-lg py-1.5 px-4 border-[1px] border-[#8D8DFF]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
