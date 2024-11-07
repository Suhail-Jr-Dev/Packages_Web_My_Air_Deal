import React, { useState } from "react";
import logo from "../assets/NavBar/logo.png";
import hedderFlight from "../assets/NavBar/hedderFlight.svg";
import whiteFlight from "../assets/NavBar/whiteFlight.svg";
import jet from "../assets/NavBar/jet.svg";
import chater from "../assets/NavBar/chater.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

function NavBar({ setTemp }) {
  const [menuWindow, setMenuWindow] = useState(false);
  const [enquiryHover, setEnquiryHover] = useState(false);

  const location = useLocation();
  const flightData = location?.pathname.split("/")[1]?.toLowerCase();

  return (
    <div
      id="top"
      className="bg-brandCol z-50 fixed top-0 w-full flex justify-between px-10 items-center p-5"
    >
      <div className="cursor-pointer">
        <Link to={"/"}>
          <img src={logo} alt="MyAirDeal" className="w-[6rem] md:w-[10rem]" />
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="hidden md:flex">
          <Link to={"https://myairdeal.com/"} target="_blank">
            <button className="flex hover:scale-105 bg-hoverColor tracking-[0.1rem]  cursor-pointer p-2 rounded-lg  text-white items-center">
              Book Flights
            </button>
          </Link>
        </div>

        {flightData !== "pakgpage" && (
          <div
            className="hidden md:flex w-[8rem] h-[2.5rem] relative rounded-lg overflow-hidden bg-hoverColor"
            onMouseEnter={() => setEnquiryHover(true)}
            onMouseLeave={() => setEnquiryHover(false)}
          >
            <div
              className="relative w-full h-full flex  cursor-pointer items-center justify-center overflow-hidden"
              onClick={() => {
                setTemp(true);
              }}
            >
              {/* Text and image inside button */}
              <button
                className={`absolute left-0 w-full h-full flex items-center justify-center text-white tracking-[0.2rem] p-2 transition-transform duration-500 ${
                  enquiryHover
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                ENQUIRY
              </button>
              <img
                src={whiteFlight}
                alt="White Flight"
                className={`absolute w-[2rem] rotate-45 transition-transform duration-500 transform ${
                  enquiryHover
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <div
        className="flex md:hidden"
        onClick={() => setMenuWindow(!menuWindow)}
      >
        <RxHamburgerMenu className="w-[1.2rem] h-[1.2rem] font-bold text-hoverColor" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`h-[15rem] w-full left-0 right-0 z-50  bg-brandCol bg-opacity-50 md:hidden backdrop-blur-3xl ${
          menuWindow ? "flex" : "hidden"
        } flex-col gap-2 py-2 items-center justify-center top-[3.7rem] absolute transition-all duration-700`}
      >
        <Link to={"https://myairdeal.com/"} target="_blank">
          <button
            className="flex text-[1.2rem]  cursor-pointer text-white items-center w-[7rem]"
            onClick={() => setMenuWindow(!menuWindow)}
          >
            Book Flights
          </button>
        </Link>
        {flightData !== "pakgpage" && (
          <button
            className="bg-hoverColor text-white text-[1.2rem] cursor-pointer tracking-[0.1rem] rounded-md w-[8rem]"
            onClick={() => {
              setTemp(true);
              setMenuWindow(!menuWindow);
            }}
          >
            ENQUIRY
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
