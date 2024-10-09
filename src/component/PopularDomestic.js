import React from 'react'
import image1 from '../assets/PopularDomasticAirs/image1.svg'
import image2 from '../assets/PopularDomasticAirs/image2.svg'
import image3 from '../assets/PopularDomasticAirs/image3.svg'
import image4 from '../assets/PopularDomasticAirs/image4.svg'
import image5 from '../assets/PopularDomasticAirs/image5.svg'

function PopularDomestic() {
    return (
        <div className='flex items-center mt-[3rem] flex-col' >

            <h1 className=' md:text-xl pb-3 w-[95%] text-brandCol font-semibold text-xl'>Leading Domestic Airlines for Premium, Stress-Free Journeys</h1>


            <div className='flex items-center w-[100%] justify-center'>
                <div className='flex gap-6 justify-evenly flex-wrap py-10 md:rounded-xl md:border-[1px] md:border-black w-[95%]'>
                    <img src={image1} alt="Popular Flight One" className='w-[7rem] cursor-pointer' />
                    <img src={image2} alt="Popular Flight Two" className='w-[7rem] cursor-pointer' />
                    <img src={image3} alt="Popular Flight Three" className='w-[7rem] cursor-pointer' />
                    <img src={image4} alt="Popular Flight Four" className='w-[7rem] cursor-pointer' />
                    <img src={image5} alt="Popular Flight Five" className='w-[7rem] cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default PopularDomestic