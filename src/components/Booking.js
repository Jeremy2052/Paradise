import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form
        action=""
        className="lg:flex lg:justify-between w-full items-center"
      >
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="">Destination</label>
          <select className="lg:w-[300px] md: w-full border rounded-md p-2">
            <option>Grande Antigua</option>
            <option>Beaches</option>
            <option>Winter</option>
            <option>Tropical</option>
          </select>
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input type="date" className="border rounded-md p-2"/>
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md p-2"/>
          </div>
        </div>
        <div className="flex  my-2 p-2 w-full ">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
