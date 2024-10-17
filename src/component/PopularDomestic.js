import React from 'react'
import image1 from '../assets/PopularDomasticAirs/image1.png'
import image2 from '../assets/PopularDomasticAirs/image2.png'
import image3 from '../assets/PopularDomasticAirs/image3.png'
import image4 from '../assets/PopularDomasticAirs/image4.png'
import image6 from '../assets/PopularDomasticAirs/image6.jpg'

function PopularDomestic() {
    return (
        <div className='flex items-center mt-[3rem] flex-col' >

            <h1 className='font-extrabold  text-brandCol  text-[1.5rem] w-[95%] '>Leading Domestic Airlines for Premium, Stress-Free Journeys</h1>

            <div className='flex items-center w-[100%] justify-center'>
                <div className='flex gap-6 justify-evenly flex-wrap py-10 md:rounded-xl md:border-[1px] md:border-gray-200 w-[95%]'>
                    <img src={image1} alt="Popular Flight One" className='w-[7rem] cursor-pointer' />
                    <img src={image2} alt="Popular Flight Two" className='w-[7rem] cursor-pointer' />
                    <img src={image3} alt="Popular Flight Three" className='w-[7rem] cursor-pointer' />
                    <img src={image4} alt="Popular Flight Four" className='w-[7rem] cursor-pointer' />
                    <img src={image6} alt="Popular Flight Five" className='w-[7rem] cursor-pointer rounded-xl' />
                </div>
            </div>

        </div>
    )
}

export default PopularDomestic