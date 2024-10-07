import React from 'react'
import image1 from '../assets/PopularDomasticAirs/image1.svg'
import image2 from '../assets/PopularDomasticAirs/image2.svg'
import image3 from '../assets/PopularDomasticAirs/image3.svg'
import image4 from '../assets/PopularDomasticAirs/image4.svg'
import image5 from '../assets/PopularDomasticAirs/image5.svg'

function PopularDomestic() {
    return (
        <div className='flex items-center flex-col' >

            <h1 className=' md:text-[1.5rem] pb-3 w-[95%] text-brandCol font-semibold text-[1.3rem]'>Popular Domestic Airlines</h1>


            <div className='flex items-center w-[100%] justify-center'>
                <div className='flex justify-evenly flex-wrap py-10 rounded-xl border-[1px] border-black w-[95%]'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
            </div>

        </div>
    )
}

export default PopularDomestic