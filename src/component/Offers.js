import React, { useRef } from 'react';
import flightvoucher from '../assets/Offers/flightvoucher.svg';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';
import OffersData from '../APIs/OffersData';

function Offers() {
    const carouselRef1 = useRef(null); // Ref for the first carousel
    const carouselRef2 = useRef(null); // Ref for the second carousel

    const scrollLeft = () => {
        // Scroll both carousels to the left
        if (carouselRef1.current) {
            carouselRef1.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
        if (carouselRef2.current) {
            carouselRef2.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        // Scroll both carousels to the right
        if (carouselRef1.current) {
            carouselRef1.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
        if (carouselRef2.current) {
            carouselRef2.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="translate-y-[-4rem]">
            <div className="container mx-auto w-[95%] bg-gray-100 cursor-pointer rounded-xl px-4 sm:px-6 lg:px-8">
                {/* <div className="container mx-auto py-8 w-[95%] bg-red-500 cursor-pointer rounded-xl px-4 sm:px-6 lg:px-8"> */}
                {/* Header Section */}
                <div className="flex justify-between items-center w-full">
                    <h1 className="md:text-xl text-brandCol font-semibold text-xl py-5">
                        Exclusive Deals on Holiday Packages
                    </h1>
                    <div className='flex space-x-2 items-center'>
                        {/* Single Left Button */}
                        <button
                            onClick={scrollLeft}
                            className="bg-white bg-opacity-90 text-white w-[2.5rem] p-2 flex items-center justify-center rounded-l-lg hover:bg-hoverColor transition"
                        >
                            <img src={leftArrow} alt="Left Arrow" />
                        </button>
                        {/* Single Right Button */}
                        <button
                            onClick={scrollRight}
                            className="bg-white bg-opacity-90 text-white w-[2.5rem] p-2 flex items-center justify-center rounded-r-lg hover:bg-hoverColor transition"
                        >
                            <img src={rightArrow} alt="Right Arrow" />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col'>
                    {/* <div
                        ref={carouselRef1}
                        className="flex overflow-x-auto items-center justify-center gap-7 no-scrollbar py-2 scroll-smooth space-x-4 w-full"
                    >
                        {OffersData.map((obj, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg transition-transform transform hover:scale-105 w-full sm:w-[22rem] md:w-[28rem] lg:w-[42rem] flex-shrink-0"
                            >
                                <div className="flex p-6 items-center">
                                    <img
                                        src={obj.img}
                                        alt="Flight Voucher"
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-sm text-sky-400">{obj.title}</p>
                                        <h2 className="text-lg font-semibold text-brandCol mb-2">
                                            {
                                                obj.discount
                                            }

                                        </h2>
                                      
                                        <p className="text-sm text-gray-700">
                                            {
                                                obj.details
                                            }
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    <div
                        ref={carouselRef2}
                        className="flex justify-around overflow-x-auto no-scrollbar py-2 scroll-smooth space-x-4 w-full"
                    >
                        {OffersData.map((obj, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg  transition-transform transform hover:scale-105 w-full sm:w-[22rem] md:w-[32rem] lg:w-[37rem] flex-shrink-0"
                            >
                                <div className="flex p-6 items-center">
                                    <img
                                        src={flightvoucher}
                                        alt="Flight Voucher"
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-sm text-sky-400">{obj.title}</p>
                                        <h2 className="text-lg font-semibold text-brandCol mb-2">
                                           {
                                            obj.discount
                                           }
                                        </h2>
                                        <p className="text-sm text-gray-700">
                                           {
                                            obj.details
                                           }
                                        </p>
                                        <span className="text-xs text-gray-400 mt-2">T&C's APPLY</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;
