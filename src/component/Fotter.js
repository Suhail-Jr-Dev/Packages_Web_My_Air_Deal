import React from 'react';
import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa6";
import { SiApplepay, SiPaytm } from "react-icons/si";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/myairdeallogo.png';
import { Link } from 'react-router-dom';
import { message } from 'antd';

function Fotter({ setTemp }) {
  const EmailContent = "https://mail.google.com/mail/?view=cm&fs=1&to=support@bookmyjet.com&su=Inquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Please%20provide%20me%20with%20additional%20information.%0D%0A%0D%0AThank%20you!";

  const phoneNumber = '8884466800';
  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      message.success('Phone number copied to clipboard');
    })
      .catch(() => {
        message.error('Failed to copy');
      });
  };

  const handleContactClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(navigator.userAgent)

    if (isMobile) {
      // Redirect to phone dialer on mobile
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // Copy to clipboard on desktop/laptop
      copyToClipboard();
    }
  };

  return (
    <div className='bg-brandCol relative text-white py-11'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-around px-5 lg:px-10'>
        <div className='text-[0.9rem] gap-1 flex flex-col'>
          <h1 className='text-[1.2rem] mb-2'>About</h1>
          <a className='underline' target='_blank' href="https://myairdeal.com/">About MyAirDeal</a>
          <a className='underline' href="#" target='_blank'>News</a>
          <a className='underline' href="https://myairdeal.com/terms-and-conditions" target='_blank'>Terms & Conditions</a>
          <a className='underline' href="https://myairdeal.com/privacy-policy" target='_blank'>Privacy Policies</a>
        </div>

        <div className='text-[0.9rem] gap-1 flex flex-col'>
          <h1 className='text-[1.2rem] mb-2'>Contact Us</h1>
          <a href={EmailContent} target="_blank" className='underline'>Help</a>
          <a className='underline cursor-pointer' onClick={() => setTemp(true)}>Customer Support</a>
          {/* <a className='underline' onClick={() => copyToClipboard()} href={`tel:'8668151532`} >Contact No : 8884466800 </a> */}
          <a className='underline cursor-pointer' onClick={handleContactClick}>Contact No: {phoneNumber}</a>
        </div>

        <div className='text-[0.9rem] gap-1 flex flex-col'>
          <h1 className='text-[1.2rem] mb-2'>Other Services</h1>
          <a className='underline' href="https://myairdeal.com/" target='_blank'>Flight Booking</a>
          <a className='underline' href="https://chartersdeployrepo.onrender.com" target='_blank'>Private Jets</a>
          <a className='underline' href="https://chartersdeployrepo.onrender.com" target='_blank'>Charters</a>
          <a className='underline' href="https://chartersdeployrepo.onrender.com" target='_blank'>Air Ambulance</a>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <p>Payment Services</p>
            <div className='flex gap-3'>
              <LiaCcVisa className='w-[2rem] h-[2rem]' />
              <FaCcMastercard className='w-[2rem] h-[2rem]' />
              <SiApplepay className='w-[2rem] h-[2rem]' />
              <SiPaytm className='w-[2rem] h-[2rem]' />
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h1>Follow Us</h1>
            <div className='flex gap-3'>
              <Link to={'https://www.facebook.com/profile.php?id=61561003964312'} target='_blank'>
                <FaFacebook className='w-[1.5rem] h-[1.5rem] hover:cursor-pointer hover:fill-hoverColor' />
              </Link>
              <Link to={'https://www.instagram.com/myairdeal/'} target='_blank'>
                <FaInstagram className='w-[1.5rem] h-[1.5rem] hover:cursor-pointer hover:fill-hoverColor' />
              </Link>
              <Link to={'https://in.linkedin.com/company/my-air-deal'} target='_blank'>
                <FaLinkedinIn className='w-[1.5rem] h-[1.5rem] hover:cursor-pointer hover:fill-hoverColor' />
              </Link>
            </div>
          </div>
        </div>
      </div>

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
