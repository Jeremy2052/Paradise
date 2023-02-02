import React from "react";
import img1 from "../img/beach_shore.jpg";

const Hero = () => {
  return (
    <div>
    <div className="absolute w-full h-[60vh] bg-black/40"></div>
      <img
        src={img1}
        alt="end of beach with high rocks"
        className="w-full h-[60vh] object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[20%]  w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-xl md:text-4xl ">Find your special trip</h1>
          <h2 className="text-xl md:text-4xl py-4 italic">with Paradise</h2>
          <p className="">
            Search and discover your paradise through the various places you can find yourself in. Choose and schedule your trip to the right place to enjoy a new experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
