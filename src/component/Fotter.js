import React from 'react';
import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa6";
import { SiApplepay, SiPaytm } from "react-icons/si";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../assets/myairdeallogo.png';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandGmail } from "react-icons/tb";

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
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      copyToClipboard();
    }
  };

  const MyAirDealHandleClick = (element) => {
    let URL = element.target.innerText;
    const encodedAddress = encodeURIComponent(URL);
    const mapUrl = `https://www.google.com/maps?q=${encodedAddress}`;
    window.open(mapUrl);
  };

  return (
    <div className="bg-brandCol text-white py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold mb-3">About</h1>
          <a className="underline hover:text-hoverColor" target='_blank' href="https://myairdeal.com/">About MyAirDeal</a>
          <a className="underline hover:text-hoverColor" href="#" target='_blank'>News</a>
          <a className="underline hover:text-hoverColor" href="https://myairdeal.com/terms-and-conditions" target='_blank'>Terms & Conditions</a>
          <a className="underline hover:text-hoverColor" href="https://myairdeal.com/privacy-policy" target='_blank'>Privacy Policies</a>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold mb-3">Contact Us</h1>
          <a href={EmailContent} target="_blank" className="underline hover:text-hoverColor">Help</a>
          <a className="underline hover:text-hoverColor cursor-pointer" onClick={() => setTemp(true)}>Customer Support</a>
          <a className="underline hover:text-hoverColor cursor-pointer" onClick={handleContactClick}>Contact No: {phoneNumber}</a>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold mb-3">Other Services</h1>
          <a className="underline hover:text-hoverColor" href="https://myairdeal.com/" target='_blank'>Flight Booking</a>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-lg font-semibold mb-3">Payment Services</h1>
            <div className="flex gap-3">
              <LiaCcVisa className="w-8 h-8" />
              <FaCcMastercard className="w-8 h-8" />
              <SiApplepay className="w-8 h-8" />
              <SiPaytm className="w-8 h-8" />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-3">Follow Us</h1>
            <div className="flex gap-3">
              <Link to={'https://www.facebook.com/profile.php?id=61561003964312'} target='_blank'>
                <FaFacebook className="w-6 h-6 hover:fill-hoverColor cursor-pointer" />
              </Link>
              <Link to={'https://www.instagram.com/myairdeal/'} target='_blank'>
                <FaInstagram className="w-6 h-6 hover:fill-hoverColor cursor-pointer" />
              </Link>
              <Link to={'https://in.linkedin.com/company/my-air-deal'} target='_blank'>
                <FaLinkedinIn className="w-6 h-6 hover:fill-hoverColor cursor-pointer" />
              </Link>
              <FaTwitter className="w-6 h-6 hover:fill-hoverColor cursor-pointer" />
              <FaYoutube className="w-6 h-6 hover:fill-hoverColor cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex flex-col  lg:flex-row justify-between gap-8 py-10 max-w-5xl mx-auto px-5">
        <div className="flex items-start gap-2">
          <TfiLocationPin className="text-2xl" />
          <div>
            <h1 className="text-lg font-semibold">INDIA</h1>
            <p className="underline cursor-pointer hover:text-hoverColor" onClick={MyAirDealHandleClick}>
              2nd Floor, Anjali Plaza, Jayanagar, Bangaluru, India - 560076
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <TfiLocationPin className="text-2xl" />
          <div>
            <h1 className="text-lg font-semibold">DUBAI - UAE</h1>
            <p className="underline cursor-pointer hover:text-hoverColor" onClick={MyAirDealHandleClick}>
              I 10, Black 1, Phase 1, Saih Shuaib 2, Dubai, UAE.
            </p>
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
