import React from "react";
import beach from "../img/beach_rocks.jpg";
import castle from "../img/castle_outside.jpg";
import snowTown from "../img/snow_town.jpg";


const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full  md:flex mt-[-75px]">
      <div className="relative p-4 h-[400px] w-full hover:scale-110 ease-in duration-300">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold">
          Beach
        </h3>
        <img
          src={beach}
          alt=""
          className="w-full h-full object-cover relative shadow-2xl  "
        />
      </div>
      <div className="relative p-4 h-[400px] w-full hover:scale-110 ease-in duration-300">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold">
          Outdoor
        </h3>
        <img
          src={castle}
          alt=""
          className="w-full h-full object-cover relative shadow-2xl  "
        />
      </div>
      <div className="relative p-4 h-[400px] w-full hover:scale-110 ease-in duration-300">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold">
          Seasonal
        </h3>
        <img
          src={snowTown}
          alt=""
          className="w-full h-full object-cover relative shadow-2xl  "
        />
      </div>
    </div>
  );
};

export default Activities;
