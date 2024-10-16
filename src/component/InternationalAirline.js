import React, { useEffect, useRef, useState } from 'react';
import InternationalHome from '../APIs/InternationalHome';
import { Link } from 'react-router-dom';
import '../Stylescomp/AllPackages.css';

import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'

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
    <div className="h-auto flex items-center flex-col">
      <div className="font-semibold flex justify-between text-[1.2rem] w-[95%]">
        <h1 className='font-extrabold text-brandCol  text-[1.5rem] w-[95%] '>
          Affordable Luxury International Packages – Dream Destinations Await
        </h1>
        <div className='w-[5rem] gap-2 flex items-center justify-center'>
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className=" bg-gray-100 bg-opacity-90 text-white w-[2rem] p-2 flex items-center justify-center rounded-l-xl  hover:bg-hoverColor transition"
          >
            <img src={leftArrow} alt="Go to Left" />
          </button>
          <button
            onClick={scrollRight}
            className=" bg-gray-100 bg-opacity-90 text-white w-[2rem] p-2 flex items-center justify-center rounded-r-xl  hover:bg-hoverColor transition"
          >
            <img src={rightArrow} alt="Go to Right" />
          </button>
        </div>
      </div>

      <div className="flex items-center w-[95%] justify-center">
        <div className="relative w-[100%] overflow-hidden">


          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar  scroll-smooth space-x-4 w-[100%]]"
          >
            {internationalData?.map((place, index) => (
              <div key={index} className="carousel-item hover:scale-105 cursor-pointer transition-all duration-300 min-w-[300px] py-10 sm:min-w-[300px] lg:min-w-[350px] flex items-center justify-center">

                <div key={index} className="relative w-[20rem] h-[27rem] flex items-center justify-center">
                  <div className="absolute inset-0 w-[90%] h-full bg-gray-200 rounded-lg  transform translate-y-[-1rem] translate-x-4 z-0"></div>

                  <div className="absolute inset-0 w-[95%] h-full bg-gray-300 rounded-lg  transform translate-y-[-0.5rem] translate-x-2 z-10"></div>

                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${place.img || 'defaultImageUrl'})`, // Use the image from data or a default if missing
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                    className='relative w-full h-full bg-no-repeat rounded-lg overflow-hidden z-20'
                  >
                    <div className="p-4 absolute bottom-0 text-center w-full bg-gradient-to-t from-black to-transparent text-white">
                      <div className="w-[100%] flex items-center justify-center">
                        <h2 className="w-[80%] border-b-[0.1px] border-b-white text-[1.5rem] py-4 font-bold">
                          {place.place}
                        </h2>
                      </div>
                      <div className="flex gap-3 justify-center items-center mt-4">
                        <a href={EmailContent} target="_blank" rel="noopener noreferrer">
                          <button className="flex font-semibold items-center justify-center hover:scale-110 transition-all duration-300 bg-transparent text-white border border-gray-300 py-1 rounded-md w-[7rem]">
                            Get Enquiry
                          </button>
                        </a>
                        <button className="bg-white hover:scale-110 transition-all duration-300 text-brandCol hover:text-white w-[7rem] py-[0.3rem] rounded-md hover:bg-brandCol">
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

        </div>
      </div>
    </div>
  );
}

export default InternationalAirline;
