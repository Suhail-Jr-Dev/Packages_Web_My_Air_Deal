import React, { useEffect, useRef, useState } from 'react';
import '../Stylescomp/Test.css';
import { Link } from 'react-router-dom';
import InternationalHome from '../APIs/InternationalHome';

const Test = () => {
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

    const [internationalData, setInternationalData] = useState([]);

    useEffect(() => {
        setInternationalData(InternationalHome);
    }, []);

    const EmailContent = "https://mail.google.com/mail/?view=cm&fs=1&to=support@bookmyjet.com&su=Inquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Please%20provide%20me%20with%20additional%20information.%0D%0A%0D%0AThank%20you!";

    return (
        <div className="flex items-center justify-center py-10">
            <div className="relative w-[95%]  overflow-hidden">
                {/* Left Button */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-4 z-50 px-4 py-2  bg-gray-800 bg-opacity-90 text-white rounded-full top-1/2 transform -translate-y-1/2 hover:bg-gray-700 transition"
                >
                    ◀
                </button>

                {/* Carousel Container */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto no-scrollbar  scroll-smooth space-x-4 w-[100%]]"
                >
                    {internationalData?.map((place, index) => (
                        <div key={index} className="carousel-item min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] flex items-center justify-center">
                            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                                <div
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${place.img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                    className='absolute inset-0 w-full h-full rounded-lg'
                                >
                                    <div className="absolute bottom-0 p-4 text-white w-full bg-gradient-to-t from-black to-transparent">
                                        <h2 className="text-lg font-bold">{place.place}</h2>
                                        <div className="flex justify-between items-center mt-2">
                                            <a href={EmailContent} target="_blank" rel="noopener noreferrer">
                                                <button className="flex items-center hover:scale-105 transition-all duration-300 bg-white text-black border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-200">
                                                    Get Enquiry
                                                </button>
                                            </a>
                                            <button className="bg-blue-600 hover:scale-105 transition-all duration-300 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                                                <Link to={'/packages'} state={place.place}>
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
    );
};

export default Test;
