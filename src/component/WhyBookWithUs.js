import React, { useEffect, useRef, useState } from "react";
import {
  FaTools,
  FaUserFriends,
  FaStar,
  FaGift,
  FaPiggyBank,
  FaComments,
} from "react-icons/fa";

import WhyBookingNewPkgCompcss from "../Stylescomp/NewPkgComp.module.css";

function WhyBookWithUs({ props }) {
  // Refs to the section and each card element
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  console.log(props);

  // State to control when the animation is triggered for each card
  const [visibleCards, setVisibleCards] = useState(
    Array(cardRefs.current.length).fill(false)
  );

  useEffect(() => {
    // IntersectionObserver options
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    // The observer callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target);
        if (entry.isIntersecting && index !== -1) {
          setVisibleCards((prev) => {
            const updatedVisibleCards = [...prev];
            updatedVisibleCards[index] = true;
            return updatedVisibleCards;
          });
        }
      });
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Start observing each card
    cardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Book With Us?
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
          {props[0]?.whyBookwithus}
          {/* We also arrange Tour Packages from Delhi, Pune, Mumbai, Bangalore,
          Lucknow, Ahmedabad, Hyderabad, Bhopal, Chennai, Visakhapatnam & Many
          More Cities of India. */}
        </p>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature Cards */}
        {[
          {
            icon: <FaTools className="text-green-500 w-12 h-12 mb-4" />,
            title: "Support 24/7",
          },
          {
            icon: <FaUserFriends className="text-blue-500 w-12 h-12 mb-4" />,
            title: "10+ Years of Travel Experience",
          },
          {
            icon: <FaStar className="text-yellow-500 w-12 h-12 mb-4" />,
            title: "4.9 Star Google review",
          },
          {
            icon: <FaGift className="text-purple-500 w-12 h-12 mb-4" />,
            title: "Pay Online Using Credit card and UPI",
          },
          {
            icon: <FaPiggyBank className="text-red-500 w-12 h-12 mb-4" />,
            title: "Best Price Guaranteed",
          },
          {
            icon: <FaComments className="text-green-500 w-12 h-12 mb-4" />,
            title: "100% TAILOR MADE",
          },
        ].map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)} // Assign each card ref dynamically
            className={`${
              visibleCards[index] ? WhyBookingNewPkgCompcss.BoomingEffect : ""
            } cursor-pointer flex flex-col items-center text-center p-6 bg-white hover:bg-gray-200 hover:shadow-lg rounded-lg transition-transform duration-300 hover:scale-105`}
          >
            {feature.icon}
            <h2 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyBookWithUs;
