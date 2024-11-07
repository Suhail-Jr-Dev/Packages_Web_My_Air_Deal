import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import loader from "../assets/loaderimg.gif";
import sideImg from "../assets/NewPkgComp/EnquiryForm/Contact.webp";
import NewEnquirycss from "../Stylescomp/NewPkgComp.module.css";

import AllPlace from "../APIs/CombinationHome/AllPlace";
import { useLocation } from "react-router-dom";


function useFormData(initialState) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    // Store form data in localStorage whenever it changes
    Object.keys(formData).forEach((key) =>
      localStorage.setItem(key, formData[key])
    );
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

function NewEnquiryForm({ temp, setTemp }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      message.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);
    try {
      const enquiryUrl =
        "https://packages-aq69.onrender.com/api/v1/packages/sendmail";

      if (!enquiryUrl) {
        throw new Error("Enquiry URL is not defined.");
      }

      // Sending the form data to the backend
      await axios.post(enquiryUrl, formData);

      setIsLoading(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        origin: "",
        pax: "",
        date: formattedDate,
        packageName: localStorage.getItem("place") || "Generic Place",
      });
      localStorage.clear();
      message.success("Form submission is successful");
    } catch (error) {
      setIsLoading(false);

      // Improved error handling
      if (error.response) {
        // Server responded with an error
        console.error("Server error:", error.response); // Log server response for debugging
        message.error(
          `Enquiry failed: ${
            error.response?.data?.message || "Please try again later."
          }`
        );
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("Network error:", error.request); // Log the request for debugging
        message.error("Network error: No response received.");
      } else {
        // Something else went wrong (e.g., configuration issue)
        console.error("Error:", error.message); // Log the actual error message for debugging
        message.error(`Error: ${error.message}`);
      }
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
  }, [flightData]);

  // Handling the Phone Number Clicking
  const phoneNumber = "8884466800";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 md:px-8">
      <div className="w-full md:w-[80%] flex flex-col items-center justify-evenly md:flex-row">
        <div className="w-full flex items-center justify-center md:w-1/2 p-2">
          <img
            src={sideImg}
            alt="Contact"
            className="w-full max-w-[35rem] object-cover"
          />
        </div>

        <div
          className={`w-full md:w-1/2 p-4 ${ NewEnquirycss.BoomingEffect }`}
        >
          {/* <Loader isLoading={isLoading} /> */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            For any inquiries, please get in touch or call us
            <h1
              className="text-brandCol cursor-pointer font-bold"
              onClick={handleCallClick}
            >
              +91-8884466800
            </h1>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-2">
            {["name", "email", "phone", "pax", "origin"].map((field, index) => (
              <div key={index}>
                <label
                  htmlFor={field}
                  className="text-sm font-medium text-gray-700"
                >
                  {field === "pax"
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
            ))}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-brandCol text-white py-3 rounded-lg mt-4 hover:bg-opacity-90 transition-all"
            >
              Submit
              {isLoading && <img src={loader} alt="" className="w-[2rem]" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewEnquiryForm;
