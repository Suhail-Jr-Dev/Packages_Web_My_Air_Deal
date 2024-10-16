import React from "react";
import lablePice from './assets/lablePice.svg'

const VisaCard = () => {
  return (
    <div className="bg-[#D1A953] rounded-lg p-8 shadow-lg w-full max-w-md mx-auto relative">
      {/* Stylish Header */}
      <div className="absolute top-2 -left-8 bg-[#1A1A1A] text-white py-2 px-6 rounded-br-lg flex items-center">
        <span className="font-semibold">Apply Visa Now</span>
        <div className="ml-2 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-[#1A1A1A] border-b-[20px] border-b-transparent"></div>
        <img src={lablePice} alt="" className="absolute top-[3.5rem] left-[-0rem] w-[2rem]" />
      </div>

      {/* Dropdown Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {/* First dropdown: Country */}
        <div className="flex flex-col">
          <label className="text-center text-black font-semibold mb-2">I am travelling to</label>
          <select className="border rounded-lg py-2 px-3 text-black w-full">
            <option>Select Country</option>
            {/* Add country options here */}
          </select>
        </div>

        {/* Second dropdown: Nationality */}
        <div className="flex flex-col">
          <label className="text-center text-black font-semibold mb-2">Select Nationality</label>
          <select className="border rounded-lg py-2 px-3 text-black w-full">
            <option>Select Nationality</option>
            {/* Add nationality options here */}
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-black text-white py-2 px-6 rounded-lg shadow-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default VisaCard;
