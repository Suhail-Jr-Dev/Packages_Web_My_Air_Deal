import React, { useEffect, useState } from 'react';
import PageBanner from './PageBanner';
import AllPlace from '../APIs/CombinationHome/AllPlace';
import { Link, useLocation } from 'react-router-dom';
import card from '../assets/APIsImg/DomasticHome/kerala1.jpeg'
import EnquiryPopUp from './EnquiryPopup';
import axios from 'axios';
import { DatePicker, message } from 'antd';
import BookingFormPakCom from './BookingFormPakCom';

import { FaArrowRight } from "react-icons/fa6";

import ImageGrid from '../component/ImageGrid'

function Packagescomp({ temp, setTemp }) {
    const location = useLocation();
    const [getPlace, setGetPlace] = useState('');
    const [getAllData, setGetAllData] = useState([]);

    // Function to filter AllPlace by key
    const filterByKey = (key) => {
        return AllPlace.map(placeObj => placeObj[key]).filter(Boolean);
    };

    const flightData = location.state;
    useEffect(() => {
        if (flightData) {
            setGetPlace(flightData);
            const response = filterByKey(flightData.toLowerCase());
            setGetAllData(response);

        }
    }, [location.state]);


    // Form Section Starts here 


    // Set up state for form fields
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [passengers, setPassengers] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedDate = startDate
            ? startDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).replace(/\//g, '-') // Replacing slashes with dashes
            : '';

        // Create a payload object with form data
        const formData = {
            name: firstName,
            phone: phone,
            passengers: passengers,
            departure: departureCity,
            date: formattedDate,
            email: email,
        };



        try {

            let temp = async () => {
                await axios.post('https://packages-aq69.onrender.com/api/v1/packages/sendmail', formData);
         
                // setDownloadBrochure(!downloadBrochure)
                setFirstName('')
                setEmail('')
                setPhone('')
                setPassengers('')
                setDepartureCity('')
                message.success('Enquiry Send')
            }
            temp()

        }
        catch (error) {
            message.error('Enquiry not Send')
         
        }



    };

    return (
        <div>
            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>
            {
                getAllData.length > 0 ? <PageBanner data={flightData} image={getAllData[0][1]?.banner} /> : <PageBanner data={flightData} />
            }
            <div className='flex py-10 items-center flex-col justify-center'>
                {getAllData.length > 0 ? <h1 className='font-semibold text-[1.2rem] w-[90%] my-5'>Fixed Departures with Flights</h1> : ''}
                <div className='flex flex-wrap gap-7 items-center justify-start w-[90%]'>
                    {
                        getAllData.length > 0 ? (
                            getAllData[0].map((e, index) => (


                                <div class="max-w-sm bg-white h-[30rem] border overflow-hidden border-gray-200 rounded-lg shadow">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={e?.img} alt="Packages" className='w-[100%] h-[13rem]' />
                                    </a>
                                    <div class="p-5">
                                        <div className='py-5'>
                                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{
                                                e.place.slice(0, 19) + '...'
                                            }</h5>
                                            <h1 className='text-brandCol'>{
                                                e.duration.slice(0, 20) + '...'
                                            }</h1>
                                            <p class="mb-3 font-normal h-[4.7rem] text-gray-700 dark:text-gray-400">
                                                {
                                                    e.description.slice(0, 100) + '...'
                                                }
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <h1 className='text-[0.9rem] text-gray-400'><span className='font-semibold text-black'>₹ {e.price}
                                                    <sup className='font-bold '>*</sup> </span> per person</h1>
                                                <p className=' text-gray-400 text-[0.9rem]'>Includes Taxes & Fess</p>
                                            </div>
                                            <Link to="/billingpage" state={{ place: getPlace, id: e.id }} class="inline-flex hover:scale-105 transition-all duration-300 items-center py-3 px-2 text-sm font-medium text-center text-white bg-brandCol rounded-lg hover:bg-blue-800 ">
                                                View Details

                                                <FaArrowRight className='mx-2' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            // <p>No packages available for this location.</p>

                            <div className='flex flex-col justify-center items-center w-full'>
                                {/* <ImageGrid /> */}
                                <h1 className='text-[1.2rem] font-semibold text-brandCol'>
                                    To get more details about <span className='text-[1.3rem] font-bold'>{flightData}</span> Package Kindlsy fill the form our team will reach you !
                                </h1>
                                <BookingFormPakCom />

                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Packagescomp;


{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src={card} alt="" />
    </a>
    <div class="p-5">
        <div className='py-5'>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Dubai Jain Tour</h5>
            <h1 className='text-brandCol'>Dubai 5N</h1>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This tour is designed for Indian travelers seeking a complete Dubai experience but making sure their specific food requirements (pure veg and jain foo...)
            </p>
        </div>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-[0.9rem] text-gray-300'><span className='font-semibold text-black'>₹ 84,080</span> per person</h1>
                <p className=' text-gray-300 text-[0.9rem]'>Includes Taxes & Fess</p>
            </div>
            <a href="#" class="inline-flex items-center py-3 px-2 text-sm font-medium text-center text-white bg-brandCol rounded-lg hover:bg-blue-800 ">
                View Details
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    </div>
</div> */}