import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles
import axios from 'axios';
import { message } from 'antd';

import loader from '../assets/loaderimg.gif'

function BookingFormPakCom() {
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [email, setEmail] = useState('');
    const [passengers, setPassengers] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [downloadBrochure, setDownloadBrochure] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedDate = startDate
            ? startDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).replace(/\//g, '-')
            : '';

        const formData = {
            name: firstName,
            phone: phone,
            departure: departureCity,
            email: email,
            passengers: passengers,
            date: formattedDate,
        };

        if (formData.phone < 0 || formData.passengers < 0) {
            message.error('Enter the Phone Number or Passengers !!!')
            return 1;
        }

        try {
            setIsLoading(true)

            const enquiryUrl = process.env.REACT_APP_ENQUIRY_URL; // Accessing environment variable
            await axios.post(enquiryUrl, formData);

            setIsLoading(false)

            setFirstName('');
            setPhone('');
            setDepartureCity('');
            setEmail('');
            setPassengers('');
            setStartDate(null);
            message.success('Send Enquiry')
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

    return (
        <form className="max-w-md mx-auto p-5 w-full md:w-[90%] bg-white mt-4 rounded-lg shadow-md" onSubmit={handleSubmit}>

            <h2 className="text-lg font-semibold text-gray-800 mb-4"> Get Your Quote </h2>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Name <span className='text-red-600'>*</span></label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Phone <span className='text-red-600'>*</span></label>
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
                <label htmlFor="departure" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">City</label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()} // Disable previous dates
                        dateFormat="dd-MM-yyyy" // Format as dd/mm/yyyy
                        className="w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none  z-50  focus:ring-0 focus:border-blue-600"
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

                <button type="submit" className={`text-white flex gap-3 w-[80%] bg-brandCol hover:bg-opacity-90  font-medium rounded-lg text-sm px-5 py-2.5 items-center justify-center`} >
                    Submit
                    {isLoading && <img src={loader} alt="" className='w-[2rem]' />}
                </button>


            </div>

        </form>
    );
}

export default BookingFormPakCom;
