import React from "react";
import mountainRocks from "../img/mountain_rocks.jpg";
import img1 from "../img/axp-photography-MuzJkZg7OVI-unsplash.jpg"
import img2 from "../img/mos-design-imcXmH5lGVc-unsplash.jpg"
import img3 from "../img/yana-marudova-jaA6nsXF1KU-unsplash.jpg"
import img4 from "../img/yana-marudova-Skl39Xmsf0g-unsplash.jpg"
import img5 from "../img/yana-marudova-QVF-Pcvg3xo-unsplash.jpg"

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2 hover:scale-105 duration-300">
          <img src={mountainRocks} alt="mountain landscape" className="w-full h-full object-cover"/>
        </div>
        <div className="hover:scale-105 duration-300">
          <img src={img2} alt="mountain landscape" className="w-full h-full object-cover"/>
        </div>
        <div className="hover:scale-105 duration-300">
          <img src={img3} alt="mountain landscape" className="w-full h-full object-cover"/>
        </div>
        <div className="hover:scale-105 duration-300">
          <img src={img4} alt="mountain landscape" className="w-full h-full object-cover"/>
        </div>
        <div className="hover:scale-105 duration-300">
          <img src={img5} alt="mountain landscape" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
