import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

import flightfront from '../assets/CarouselImg/carplace1.jpg'

function PageBanner({ data , image }) {

    console.log(data)

    return (
        <div
            className=" h-[60vh]  bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image ? image : flightfront})`,
            }}
        >
            <div className="flex items-center justify-center p-[3rem] h-full text-white">
                <div className='text-[3rem]'>
                    <h1>
                        {data}
                    </h1>
                </div>
               
            </div>
        </div>
    )
}

export default PageBanner

