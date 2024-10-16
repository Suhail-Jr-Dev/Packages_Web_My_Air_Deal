import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import flightfront from '../assets/CarouselImg/carplace1.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import AllPlace from '../APIs/CombinationHome/AllPlace';
import EnquiryPopUp from './EnquiryPopup';
import axios from 'axios'
import { message } from 'antd';
import BookingForm from './BookingFormPakCom';

import loader from '../assets/loaderimg.gif'



function BillingPage({ temp, setTemp }) {

    const location = useLocation();
    const [getPlace, setGetPlace] = useState('');
    const [getAllData, setGetAllData] = useState([]);
    const [getBillingData, setGetBillingData] = useState(null);
    const [downloadBrochure, setDownloadBrochure] = useState(false)

    // Function to filter AllPlace by key
    const filterByKey = (key) => {
        return AllPlace.map(placeObj => placeObj[key]).filter(Boolean);
    };

    const flightData = location.state;
    useEffect(() => {
        if (flightData) {
            setGetPlace(flightData);
            const response = filterByKey(flightData.place.toLowerCase());
            setGetAllData(response);
        }
    }, [location.state]);

    useEffect(() => {
        if (getAllData.length > 0) {
            setGetBillingData(getAllData[0][flightData.id - 1]);
        }
    }, [getAllData, flightData]);





    // Set up state for form fields
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [passengers, setPassengers] = useState(0);
    const [departureCity, setDepartureCity] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    // Handle form submission
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

        if (formData.phone < 0 || formData.passengers < 0) {
            message.error('Enter the Phone Number or Passengers !!!')
            return 1;
        }


        try {

            let sendMail = async () => {
                setIsLoading(true)

                const enquiryUrl = process.env.REACT_APP_ENQUIRY_URL; // Accessing environment variable
                await axios.post(enquiryUrl, formData);

                setIsLoading(false)
                setDownloadBrochure(!downloadBrochure)
                setFirstName('')
                setEmail('')
                setPhone('')
                setPassengers('')
                setDepartureCity('')
                message.success('Enquiry Send')
            }
            sendMail()

        } catch (error) {
            // Checking if it's a network error
            if (!error.response) {
                // Network error
                message.error('Network error: Please check your internet connection.');
            } else {
                // Other error response (like 400 or 500 status codes)
                message.error('Enquiry failed: ' + error.response?.data?.message || 'Something went wrong. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }



    };


    let LocationObject = useLocation()
    let LocationPlace = LocationObject?.state?.place;


    function trimAllSpaces(str) {
        // Remove leading and trailing spaces
        str = str.trim();

        // Replace multiple spaces between words with a single space
        str = str.replace(/\s+/g, '');

        return str;
    }



    // message.error(`/Flyers/${LocationPlace}${getBillingData?.url || ''}`)

    return (
        <div className=" bg-gray-100 pb-10">
            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>
            <div
                className="h-[50vh] md:h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${getBillingData?.banner})`,
                }}
            >
                <div className="flex w-[100%] items-center justify-around text-white text-center p-4 md:p-12">
                    <div>
                        <h1 className="text-[6vw] md:text-[3vw] 1000:w-[50rem] font-semibold">{
                            getBillingData?.place
                        }</h1>
                        <p className="text-[1rem] md:text-[1.25rem]">{
                            getBillingData?.duration
                        }</p>
                    </div>
                    <div className="hidden md:flex flex-col items-center text-center">
                        <p>From</p>
                        <h1 className="text-[2rem] md:text-[1.5rem] font-semibold">₹ {getBillingData?.price} <sup>*</sup></h1>
                        <p className="text-[1rem] md:text-[0.9rem]">Commissionable</p>
                        <p className="text-[1rem] md:text-[0.9rem]">Per Person</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center  justify-center mt-8">
                {/* <div className="grid grid-cols-1 bg-yellow-900  md:grid-cols-2 gap-6 w-full md:w-[90%] p-4 md:p-8"> */}
                <div className="flex flex-col md:flex-row w-[85%] gap-5 mx-auto">
                    {/* About the trip section */}
                    <div className="flex flex-col w-full md:w-[60%] px-6 py-4">
                        <h1 className="text-2xl font-bold text-gray-800">About the trip</h1>
                        <p className="mt-2 text-gray-600">{getBillingData?.description?.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</p>


                    </div>

                    {/* Pricing and Downloads section */}
                    <div className="flex justify-center items-center w-full md:w-[35%]">
                        <div className="py-10 px-6 h-auto bg-gray-200 rounded-lg w-full md:w-[90%] flex flex-col items-center">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700">Starting from</p>
                                <p className="text-2xl font-semibold">₹ {getBillingData?.price} <sup>*</sup></p>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">


                                <a


                                    // href={`/Flyers/${LocationPlace}/${trimAllSpaces(getBillingData?.place?.toLowerCase() || '')}.png`}
                                    href={`/Flyers/${LocationPlace}/${getBillingData?.url || ''}`}


                                    download={`${(getBillingData?.url || 'NoData.png')}`}
                                    className="text-sm underline text-blue-600 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Download Flyer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-[85%] mt-6 p-4">
                    <h1 className="text-[1.3rem] font-semibold text-black ">Highlights</h1>
                    <div className=" flex flex-col md:flex-row justify-between ">
                        <div className="w-full md:w-[60%]">
                            <ul className="p-4 rounded-lg  list-disc list-inside">
                                {getBillingData?.highlight.map((highlight, index) => (
                                    <li key={index} className="mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Form placed beside the highlights */}
                        <form className="max-w-md mx-auto p-5 w-full md:w-[35%] bg-white mt-4 rounded-lg shadow-md" onSubmit={handleSubmit}>

                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Get Your Exclusive Quote</h2>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Name <span className='text-red-600'>*</span></label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="number" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Phone <span className='text-red-600'>*</span>
                                    </label>
                                </div>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Email <span className='text-red-600'>*</span></label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="departure" id="departure" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    value={departureCity}
                                    onChange={(e) => setDepartureCity(e.target.value)} />
                                <label htmlFor="departure" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Departure City</label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        minDate={new Date()} // Disable previous dates
                                        dateFormat="dd-MM-yyyy" // Format as dd/mm/yyyy
                                        className="w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600"
                                        placeholderText="Departure Date"
                                    />
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="number" name="passengers" id="passengers" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={passengers}
                                        onChange={(e) => setPassengers(e.target.value)} />
                                    <label htmlFor="passengers" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Passengers</label>
                                </div>
                            </div>

                            <div className='w-[50%]'>
                                <button type="submit" className={`text-white flex w-[80%] bg-brandCol hover:bg-opacity-90 gap-3 font-medium rounded-lg text-sm px-5 py-2.5 items-center justify-center`} >
                                    Submit
                                    {isLoading && <img src={loader} alt="" className='w-[2rem]' />}
                                </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingPage;
