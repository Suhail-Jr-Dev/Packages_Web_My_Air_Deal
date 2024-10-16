import React from 'react'

import carplace1 from '../assets/CarouselImg/carplace1.jpg'
import PopularFlights from '../APIs/PopularFlights'

function PopularPack() {
    return (
        <div className='flex items-center justify-center py-8'>
            <div className='w-full md:w-[95%]'>
                <h1 className='font-extrabold text-brandCol px-2  text-[1.5rem] w-[95%] '>
                    Best-Selling Travel Packages – Discover Trending Destinations
                </h1>

                <div className="flex flex-wrap gap-5 bg-white p-3 py-5 rounded-lg justify-evenly md:rounded-xl md:border-[1px] md:border-gray-200">

                    {/** Reusable Card Component */}
                    {PopularFlights?.map((element, index) => (

                        <div div key={index} className='flex items-center gap-2 w-full sm:w-[48%] md:w-[30%] lg:w-[30%] p-2' >
                            <div className='flex items-center p-2 w-auto'>
                                <img src={element?.img} alt="Place Package Img" className='w-[3rem] h-[3rem] md:w-[3.8vw] md:h-[3vw] rounded-full' />
                            </div>
                            <div className='flex flex-col px-2 justify-center'>
                                <h1 className='font-semibold text-[1rem] md:text-[1.3rem]'>
                                    {element?.place}
                                </h1>
                                <p className='text-[0.8rem] md:text-[1rem]'>{element?.place} Tour packages, {element?.place}Tourism</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}
export default PopularPack