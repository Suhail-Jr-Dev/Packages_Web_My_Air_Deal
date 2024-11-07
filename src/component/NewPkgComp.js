import React, { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useLocation } from "react-router-dom";

import NewPkgCompcss from "../Stylescomp/NewPkgComp.module.css";

import loader from "../assets/loaderimg.gif";
import NewPkgCard from "./NewPkgCard";
import FunFacts from "./FunFacts";
import NewTourism from "./NewTourism";
import StillConfused from "./StillConfused";
import WhyBookWithUs from "./WhyBookWithUs";
import NewEnquiryForm from "./NewEnquiryForm";

import { FaPhoneVolume } from "react-icons/fa6";
import FAQSection from "./FAQSection";

import AllPlace from "../APIs/CombinationHome/AllPlace";

function useFormData(initialState) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    // Store form data in localStorage whenever it changes
    Object.keys(formData).forEach((key) =>
      localStorage.setItem(key, formData[key])
    );

    // return () => {
    //   // Optionally, clear form data when component unmounts
    //   localStorage.clear();
    // };
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return [formData, setFormData, handleChange];
}

function Loader({ isLoading }) {
  if (!isLoading) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <img src={loader} alt="Loading" className="w-16" />
    </div>
  );
}

function NewPkgComp({ temp, setTemp }) {
  const [isLoading, setIsLoading] = useState(false);
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${today.getFullYear()}`;

  const [formData, setFormData, handleChange] = useFormData({
    name: localStorage.getItem("name") || "",
    origin: localStorage.getItem("origin") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    pax: localStorage.getItem("pax") || "",
    date: formattedDate,
    packageName: localStorage.getItem("place") || "Generic Place",
  });

  // const handleSubmit = async (e) => {

  //   e.preventDefault();

  //    const updatedFormData = {
  //   ...formData,
  //   packageName: localStorage.getItem("place") || "Generic Place",
  // };
  // setFormData(updatedFormData);

  //   if (!/^\d{10}$/.test(formData.phone)) {
  //     message.error("Please enter a valid 10-digit phone number");
  //     return;
  //   }

  //   setIsLoading(true);
  //   try {
  //     // const enquiryUrl = process.env.REACT_APP_ENQUIRY_URL;
  //     const enquiryUrl =
  //       "https://packages-aq69.onrender.com/api/v1/packages/sendmail";
  //     if (!enquiryUrl) {
  //       throw new Error("Enquiry URL is not defined.");
  //     }
  //     await axios.post(enquiryUrl, formData);

  //     setIsLoading(false);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       origin: "",
  //       pax: "",
  //       date: formattedDate,
  //       packageName: localStorage.getItem("place") || "Generic Place",
  //     });
  //     localStorage.clear();
  //     message.success("Form submission is successful");
  //   } catch (error) {
  //     setIsLoading(false);
  //     message.error(
  //       `Enquiry failed: ${
  //         error.response?.data?.message || "Please try again later."
  //       }`
  //     );
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Force update the formData with the latest local storage values
    const updatedFormData = {
      ...formData,
      packageName: localStorage.getItem("place") || "Generic Place",
    };
    setFormData(updatedFormData); // Update state just in case

    // Add form validation as needed, then proceed to submit
    if (!/^\d{10}$/.test(updatedFormData.phone)) {
      message.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    try {
      const enquiryUrl =
        "https://packages-aq69.onrender.com/api/v1/packages/sendmail";
      // Send the latest data
      await axios.post(enquiryUrl, updatedFormData);

      // Reset form, clear local storage, etc.
      setIsLoading(false);
      localStorage.clear();
      message.success("Form submission is successful");
    } catch (error) {
      setIsLoading(false);
      message.error("Form submission failed. Please try again.");
    }
  };

  const location = useLocation();
  const flightData = location?.pathname.split("/")[2]?.toLowerCase();
  const [getAllData, setAllData] = useState("");
  useEffect(() => {
    setAllData(AllPlace[0][flightData]);
    return () => {
      localStorage.clear();
    };
  }, []);
  console.log(flightData);
  console.log(AllPlace[0][flightData]);

  // Handling the Phone Number Clicking

  const phoneNumber = "8884466800";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div id="topOfEnquiryForm">
      <section
        className={`${NewPkgCompcss.newheroSection} h-auto py-10 px-2 md:mt-[5rem] flex flex-col md:flex-row items-center justify-center md:justify-evenly bg-gradient-to-r from-blue-500 to-teal-500`}
      >
        <div
          className={`text-white text-center md:text-left md:space-y-7 w-full md:w-[55%] p-4 md:p-6 ${NewPkgCompcss.LTR}`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {getAllData[0]?.heading}
            {/* Kerala Tour Packages - Up to 30% Off, Lowest Price Guaranteed */}
          </h1>
          <p className="text-base md:text-[1.3rem]">
            {getAllData[0]?.subheading}
            {/* Book customized Kerala Packages with exciting deals & offers. */}
          </p>
          <p className="text-sm md:text-base mt-2">
            {getAllData[0]?.allplace}
            {/* Cochin | Munnar | Alleppey | Thekkady | Kovalam | Varkala */}
          </p>
          <p className="text-sm md:text-base mt-2 inline-block relative">
            {getAllData[0]?.freeConsultant}
            {/* Want Free Consultation? Ask Our Travel Expert! */}
            <div className="flex items-center justify-center md:absolute md:top-[-4rem] md:right-[-10rem]">
              <div class={NewPkgCompcss.circles} onClick={handleCallClick}>
                <FaPhoneVolume
                  className={`${NewPkgCompcss.icon} bg-white w-[3rem] h-[3rem] p-2 rounded-full cursor-pointer`}
                />
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
              </div>
            </div>
          </p>
        </div>

        <div
          className={`bg-white shadow-lg rounded-lg w-full md:w-[40%] max-w-md p-6 md:ml-10 mt-8 md:mt-0 ${NewPkgCompcss.BoomingEffect} relative`}
        >
          <Loader isLoading={isLoading} />
          <div className="z-10 relative">
            <h3 className="text-2xl font-semibold mb-4">Get Your Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              {["name", "email", "phone", "pax", "origin"].map(
                (field, index) => (
                  <div key={index}>
                    <label
                      htmlFor={field}
                      className="text-sm font-medium text-gray-700"
                    >
                      {field == "pax"
                        ? "Passengers"
                        : field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      {["name", "email", "phone"].includes(field) && (
                        <span className="text-red-600">*</span>
                      )}
                    </label>
                    <input
                      type={field === "phone" ? "number" : "text"}
                      name={field}
                      id={field}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      onChange={handleChange}
                      value={formData[field]}
                      required={["name", "email", "phone"].includes(field)}
                    />
                  </div>
                )
              )}
              <button
                type="submit"
                className="w-full bg-brandCol text-white py-3 rounded-lg mt-4 hover:bg-opacity-90 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="text-center text-xl space-y-7 py-5">
          <h1 className="font-bold text-3xl">
            {getAllData[0]?.booking}
            {/* Best Selling Kerala Tour Packages */}
          </h1>
          <p>
            {getAllData[0]?.allpackages}
            {/* HONEYMOON PACKAGES | FAMILY PACKAGES | HOLIDAY PACKAGES | WEEKEND
            GETWAYS | GROUP PACKAGES */}
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="lg:w-[79%] w-[90%] py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getAllData?.length > 0 &&
                getAllData?.map((element, index) => (
                  <NewPkgCard key={index} index={index} props={element} />
                ))}
            </div>
          </div>
        </div>
      </section>
      <FunFacts />
      <NewTourism props={getAllData} />
      <StillConfused />
      <WhyBookWithUs props={getAllData} />
      <FAQSection props={getAllData} />
      <NewEnquiryForm />
    </div>
  );
}

export default NewPkgComp;
