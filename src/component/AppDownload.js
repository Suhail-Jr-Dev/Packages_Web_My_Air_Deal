import React from 'react'

import giftlogo from '../assets/AppDownload/giftlogo.svg'
import android from '../assets/AppDownload/android.svg'
import apple from '../assets/AppDownload/apple.svg'
import qr from '../assets/AppDownload/qr.svg'

import { TbBrandGmail } from "react-icons/tb";

function AppDownload() {

    const EmailContent = "https://mail.google.com/mail/?view=cm&fs=1&to=support@bookmyjet.com&su=Inquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Please%20provide%20me%20with%20additional%20information.%0D%0A%0D%0AThank%20you!"

    return (
        <div className='flex items-center justify-center '>
            <div className='w-full md:w-[95%] flex flex-wrap bg-white rounded-lg' style={{ boxShadow: '0px 0px 3px 0.1px black' }}>
                <div className='flex flex-col justify-center p-5 md:p-10 gap-5 w-full md:w-1/2'>
                    <div className='flex items-center gap-4 text-brandCol'>
                        <div>
                            <img src={giftlogo} alt="logo" className='w-[3rem] md:mb-10' />
                        </div>
                        <div>
                            <h1 className='text-[1.2rem] md:text-[1.5rem] font-bold'>Download App Now</h1>
                            <p className='text-[0.9rem] md:text-[1rem]'>
                                Use code <span className='font-semibold'>WELCOME24</span> and get <span className='font-semibold'>Flat 15% Off <sup>*</sup></span> on your first domestic flight booking
                            </p>
                        </div>
                    </div>

                    <div className='pl-12'>
                        <a href={EmailContent} target="_blank">
                            <button className='bg-hoverColor hover:scale-105 transition-all duration-300 text-white text-[0.9rem]  py-2 px-4 cursor-pointer tracking-[0.1rem] rounded-md w-full md:w-[8rem]'>
                                ENQUIRY
                            </button>
                        </a>
                    </div>
                </div>

                <div className='flex flex-row flex-wrap md:flex-row items-center justify-center gap-5 p-5 w-full md:w-1/2'>
                    <div className='flex flex-row flex-wrap justify-center md:flex-col gap-3 items-center'>
                        <img src={android} alt="android device" className='w-[10rem] md:w-[13rem]' />
                        <img src={apple} alt="apple device" className='w-[10rem] md:w-[13rem]' />
                    </div>
                    <div>
                        <img src={qr} alt="QR Code" className='w-[10rem] md:w-[12rem]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload
