import React from "react";
import HeaderText from "../Components/HeaderText";
import { person1, person2, person3 } from "../assets/images/index";
import User from "../Components/User";

const images = [person1, person2, person3];

const UserReview = () => {
  return (
    <div className="my-14 md:px-20">
      <HeaderText
        head="Don't take our word for it"
        text="Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare"
      />
      <div className="flex flex-col gap-10 md:flex-row md:gap-2 mt-10">
        {images.map((image, i) => (
          <div key={i} className="px-4">
            <User img={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
