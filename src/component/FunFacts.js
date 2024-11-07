import React, { useState, useEffect, useRef } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaMap } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";

import { useSpring, animated } from "react-spring";

// Number Component (with animation)
function Number({ n, isVisible }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? n : 0, // Only animate when visible
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function FunFacts() {
  // Ref to the section element
  const sectionRef = useRef(null);

  // State to track if the section is visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    // IntersectionObserver callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the section is in view
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section element
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-brandCol bg-opacity-20 text-white py-16 md:py-20 lg:py-24"
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-10">
        Fun Facts About Our Agency
      </h1>
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-10 px-4 md:px-8">
        {/* Travel Completed */}
        <div className="flex flex-col items-center justify-center text-center">
          <IoDiamondOutline className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3" />
          <h1 className="font-bold flex text-xl md:text-2xl lg:text-3xl">
            <Number n={1100} isVisible={isVisible} /> +
          </h1>
          <p className="text-sm md:text-base">Travel Completed</p>
        </div>

        {/* Happy Clients */}
        <div className="flex flex-col items-center justify-center text-center">
          <IoMdHeartEmpty className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3" />
          <h1 className="font-bold flex text-xl md:text-2xl lg:text-3xl">
            <Number n={1} isVisible={isVisible} /> k+
          </h1>
          <p className="text-sm md:text-base">Happy Clients</p>
        </div>

        {/* Branches */}
        <div className="flex flex-col items-center justify-center text-center">
          <FaMap className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3" />
          <h1 className="font-bold flex text-xl md:text-2xl lg:text-3xl">
            <Number n={2} isVisible={isVisible} /> +
          </h1>
          <p className="text-sm md:text-base">Branches in India and Dubai</p>
        </div>

        {/* Our Team */}
        <div className="flex flex-col items-center justify-center text-center">
          <FaPerson className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3" />
          <h1 className="font-bold flex text-xl md:text-2xl lg:text-3xl">
            <Number n={100} isVisible={isVisible} /> +
          </h1>
          <p className="text-sm md:text-base">Our Team</p>
        </div>
      </div>
    </div>
  );
}

export default FunFacts;
