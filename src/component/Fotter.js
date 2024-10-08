import React from 'react';

import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa6";
import { SiApplepay, SiPaytm } from "react-icons/si";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

import { TbTransitionTopFilled } from "react-icons/tb";

import logo from '../assets/myairdeallogo.png';
import { Link } from 'react-router-dom';

function Fotter() {
  return (
    <div className='bg-brandCol relative text-white py-11 '>

      {/* <Link to='#top' className='absolute bottom-16 p-2 rounded-full right-10 bg-brandCol bg-opacity-80 cursor-pointer'  >
        <TbTransitionTopFilled className='w-[2rem] h-[2rem]' />
      </Link> */}

      {/* Responsive Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-around px-5 lg:px-10'>

        <div className='text-[0.9rem] gap-1 flex flex-col'>
          <h1 className='text-[1.2rem] mb-2'>About</h1>
          <a className='underline' href="#">About MyAirDeal</a>
          <a className='underline' href="#">News</a>
          <a className='underline' href="#">Terms & Conditions</a>
          <a className='underline' href="#">Privacy Policies</a>
        </div>

        <div className='text-[0.9rem] gap-1 flex flex-col'>
          <h1 className='text-[1.2rem] mb-2'>Contact Us</h1>
          <a className='underline' href="#">Help</a>
          <a className='underline' href="#">Customer Support</a>
        </div>

        <div className='text-[0.9rem] gap-1 flex flex-col'>
          <h1 className='text-[1.2rem] mb-2'>Other Services</h1>
          <a className='underline' href="#">Flight Booking</a>
          <a className='underline' href="#">Private Jets</a>
          <a className='underline' href="#">Charters</a>
          <a className='underline' href="#">Air Ambulance</a>
        </div>

        <div className='flex flex-col gap-5'>
          {/* Payment Services */}
          <div className='flex flex-col gap-3'>
            <p>Payment Services</p>
            <div className='flex gap-3'>
              <LiaCcVisa className='w-[2rem] h-[2rem] hover:cursor-pointer hover:fill-hoverColor' />
              <FaCcMastercard className='w-[2rem] h-[2rem] hover:cursor-pointer hover:fill-hoverColor' />
              <SiApplepay className='w-[2rem] h-[2rem] hover:cursor-pointer hover:fill-hoverColor' />
              <SiPaytm className='w-[2rem] h-[2rem] hover:cursor-pointer hover:fill-hoverColor' />
            </div>
          </div>
          {/* Social Media */}
          <div className='flex flex-col gap-3'>
            <h1>Follow Us</h1>
            <div className='flex gap-3'>
              <FaFacebook className='w-[1.5rem] h-[1.5rem]  hover:cursor-pointer hover:fill-hoverColor' />
              <FaInstagram className='w-[1.5rem] h-[1.5rem]  hover:cursor-pointer hover:fill-hoverColor' />
              <FaXTwitter className='w-[1.5rem] h-[1.5rem]  hover:cursor-pointer hover:fill-hoverColor' />
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className='flex flex-col items-center text-[0.9rem] py-5 justify-center'>
        <div className="flex items-center justify-center">
          <div className="border-t-[2px] border-white w-[10vw] sm:w-[15vw] lg:w-[20vw]"></div>
          <img src={logo} alt="My Air Deal" className="w-[6rem] sm:w-[8rem] lg:w-[10rem] mx-2 sm:mx-4" />
          <div className="border-t-[2px] border-white w-[10vw] sm:w-[15vw] lg:w-[20vw]"></div>
        </div>

        <p className="text-center mt-3">
          Copyright 2024 © MyAirDeal Pvt. Ltd. All Rights Reserved.
        </p>
        <p className='text-center mt-2 px-4'>
          The content and images used on this site are copyright protected and copyrights vest with the respective owners. The usage of the content and images on this website is intended to promote the works, and no endorsement of the artist shall be implied.
        </p>
      </div>
    </div>
  );
}

export default Fotter;
