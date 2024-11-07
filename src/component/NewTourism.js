import React, { useEffect, useRef, useState } from "react";
import kerala from "../assets/NewPkgComp/NewKerala/Article.webp";

import NewTourismcss from "../Stylescomp/NewPkgComp.module.css";
import { useLocation } from "react-router-dom";

function NewTourism({ props }) {
  const location = useLocation();
  const flightData = location?.pathname.split("/")[2]?.toLowerCase();

  // Ref to the section element
  const sectionRef = useRef(null);

  // State to control when the animation is triggered
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver options
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    // The observer callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handling the Phone Number Clicking

  const phoneNumber = "8884466800";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-evenly md:items-start gap-6 p-6 md:p-10">
      {/* Image Section */}
      <div
        ref={sectionRef}
        className={`${
          isVisible ? NewTourismcss.LTR : ""
        } w-full md:w-1/2 lg:w-[35rem] flex justify-center`}
      >
        <img
          src={props[0]?.articalimg}
          className="w-full h-auto object-cover rounded-lg"
          alt="Kerala Tourism"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 lg:w-[50%] space-y-4 md:space-y-6">
        <h1 className="font-bold text-xl md:text-2xl lg:text-[1.4rem]">
          {props[0]?.articalheading}
          {/* Tourism in Kerala */}
        </h1>
        <p className="text-sm md:text-base lg:text-lg">{props[0]?.artical}</p>
        <button
          className="bg-brandCol px-4 py-2 rounded-lg text-white text-sm md:text-base hover:bg-opacity-90 transition duration-300"
          onClick={handleCallClick}
        >
          Discover More
        </button>
      </div>
    </div>
  );
}

export default NewTourism;
