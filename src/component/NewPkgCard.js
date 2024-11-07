import React from "react";
import demoCardImg from "../assets/NewPkgComp/NewKerala/packageimg1.webp";
import { IoCalendarOutline } from "react-icons/io5";
import { MdNoMeals } from "react-icons/md";
import { FaCar, FaEye, FaHotel } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

function NewPkgCard({ index, props }) {
  // Handling the Phone Number Clicking

  const phoneNumber = "8884466800";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      key={index} // Added key for each card
      className="rounded-lg overflow-hidden shadow-lg"
      style={{ boxShadow: "0px 0px 5px 1px black" }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={props?.newimg}
          alt="Go Left"
          className="w-full h-[15rem] object-cover rounded-t-lg"
        />
        <span className="bg-yellow-500 p-3 absolute top-0">Upto 10% Off</span>
      </div>

      {/* Price & Duration Section */}
      <div className="flex items-center justify-between font-bold text-white bg-green-500 p-2 text-sm md:text-base">
        <div className="flex items-center space-x-2">
          <IoCalendarOutline className="text-lg" />
          <p>
            {props?.days}
            {/* 4 Nights / 5 Days */}
          </p>
        </div>
        <p>₹{props?.price}/-</p>
      </div>

      <div className="space-y-3 py-3">
        {/* Title and Location Section */}
        <div className="px-2">
          <h1 className="text-lg md:text-xl font-semibold">
            {/* Kerala Family Tour */}
            {props?.title}
          </h1>
          <h2 className="text-green-500 w-full mt-2 text-sm md:text-base">
            <span className="text-black font-medium">Location -:</span>
            {props?.location}
            {/* Munnar (2N) → Thekkady (1N) → Alleppey (1N) */}
          </h2>
        </div>

        {/* Features Section */}
        <div className="flex items-center justify-around px-2 text-xs md:text-sm lg:text-base">
          <div className="flex flex-col items-center">
            <MdNoMeals className="w-6 h-6" />
            <p className="text-green-600">Meals</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCar className="w-6 h-6" />
            <p className="text-green-600">Transfer</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEye className="w-6 h-6" />
            <p className="text-green-600">Sightseeing</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHotel className="w-6 h-6" />
            <p className="text-green-600">Hotel</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center flex-wrap justify-center md:justify-between gap-3 p-3">
          <button
            className="flex items-center border py-2 px-4 rounded-lg text-sm md:text-base"
            onClick={handleCallClick}
          >
            <IoMdCall className="mr-2" />
            Call to Expert
          </button>
          {/* <a href="#topOfEnquiryForm"> */}
          <button
            className="bg-brandCol text-white py-2 px-4 rounded-lg hover:bg-opacity-90 text-sm md:text-base"
            onClick={() => {
              localStorage.setItem("place", props?.title);
              window.scrollTo({
                top: -100,
                behavior: "smooth", // Smooth scrolling
              });
            }}
          >
            Get A Quote
          </button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default NewPkgCard;
