import React from "react";
import email from "../assets/NewPkgComp/email.png";
import { useLocation } from "react-router-dom";

function StillConfused() {
  const location = useLocation();
  const flightData = location?.pathname.split("/")[2];

  // Handling the Phone Number Clicking

  const phoneNumber = "8884466800";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-gray-500 bg-opacity-40 flex flex-col md:flex-row items-center md:justify-between p-6 md:p-12 gap-6 md:gap-12 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src={email}
          className="w-[8rem] h-auto md:w-[10rem] lg:w-[12rem] object-contain transition-transform duration-300 hover:scale-105"
          alt="Email Icon"
        />
      </div>
      {/* Text and Button Section */}
      <div className="md:border-l-[2px] md:border-black p-4 md:p-8 space-y-4 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight">
          Are You Still Confused? Book your Trip with {flightData} Tour Expert.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-black font-medium">
          Instant Response | 24x7 Support | Reliable Travel Guides | Hotel,
          Food, Cab, Sightseeing Included | Get Multiple Itineraries | Quick
          Assistance.
        </p>
        <button
          className="bg-brandCol text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 text-lg md:text-xl font-medium shadow-md hover:shadow-lg"
          onClick={handleCallClick}
        >
          Let us Know Your Requirement!
        </button>
      </div>
    </div>
  );
}

export default StillConfused;
