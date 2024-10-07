import React, { useEffect, useRef, useState } from 'react';
import InternationalHome from '../APIs/InternationalHome';
import { Link } from 'react-router-dom';
import '../Stylescomp/AllPackages.css';

function InternationalAirline() {
  const [internationalData, setInternationalData] = useState([]);

  useEffect(() => {
    setInternationalData(InternationalHome);
  }, []);

  const EmailContent = "https://mail.google.com/mail/?view=cm&fs=1&to=support@bookmyjet.com&su=Inquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Please%20provide%20me%20with%20additional%20information.%0D%0A%0D%0AThank%20you!";

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-auto flex items-center pt-10 flex-col">
      <div className="font-semibold text-[1.2rem] w-[95%]">
        <h1 className="md:text-[1.5rem] text-brandCol font-semibold text-[1.3rem] py-5">
          International Packages
        </h1>
      </div>

      <div className="flex items-center w-[95%] justify-center">
        <div className="relative w-[100%] overflow-hidden">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 z-50 px-4 py-2 bg-gray-800 bg-opacity-90 text-white rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-700 transition"
          >
            ◀
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar  bg-red-700 scroll-smooth space-x-4 w-[100%]"
          >
            {internationalData?.map((place, index) => (
              <div
                key={index}
                className="relative w-[25rem] sm:w-[25rem] h-[25rem] flex items-center justify-center hover:scale-105 transform transition-transform duration-500 ease-in-out"
              >
                <div className="absolute inset-0 w-[95%] h-full bg-gray-300 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500 hover:-translate-y-3 z-10">
                  <div
                    style={{
                      backgroundImage: `url(${place.img})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                    className="relative w-full h-full bg-no-repeat bg-white rounded-lg shadow-lg overflow-hidden z-20"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={place.img}
                        alt={place.place}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="p-4 absolute bottom-0 text-center w-full bg-gradient-to-t from-black to-transparent text-white">
                      <div className="w-[100%] flex items-center justify-center">
                        <h2 className="w-[80%] border-b-[0.1px] border-b-white text-[1.5rem] py-4 font-bold">
                          {place.place}
                        </h2>
                      </div>
                      <div className="flex gap-3 justify-center items-center mt-4">
                        <a href={EmailContent} target="_blank" rel="noopener noreferrer">
                          <button className="flex font-semibold items-center justify-center hover:scale-110 transition-all duration-300 bg-transparent text-white border border-gray-300 py-1 rounded-md w-[10rem] hover:bg-gray-200">
                            Get Enquiry
                          </button>
                        </a>
                        <button className="bg-white hover:scale-110 transition-all duration-300 text-brandCol w-[10rem] py-[0.3rem] rounded-md hover:bg-brandCol">
                          <Link to={'/packages'} state={place.place} className="font-semibold">
                            View Details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-4 z-50 px-4 py-2 bg-gray-800 bg-opacity-90 text-white rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-700 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default InternationalAirline;
