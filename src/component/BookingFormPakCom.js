import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styles
import axios from 'axios';
import { message } from 'antd';

function BookingFormPakCom() {
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [email, setEmail] = useState('');
    const [passengers, setPassengers] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [downloadBrochure, setDownloadBrochure] = useState(false);

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

        try {
            await axios.post('https://packages-aq69.onrender.com/api/v1/packages/sendmail ', formData);
            setFirstName('');
            setPhone('');
            setDepartureCity('');
            setEmail('');
            setPassengers('');
            setStartDate(null);
            message.success('Send Enquiry')
        } catch (error) {
            message.error('Failed to Send Enquiry')
        }
    };

    return (
        <form className="max-w-md mx-auto p-5 w-full md:w-[90%] bg-white mt-4 rounded-lg shadow-md" onSubmit={handleSubmit}>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Form</h2>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">First name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Phone</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="departure" id="departure" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)} />
                <label htmlFor="departure" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Departure City</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Email</label>
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
                        required
                    />


                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="passengers" id="passengers" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={passengers}
                        onChange={(e) => setPassengers(e.target.value)} />
                    <label htmlFor="passengers" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">passengers</label>
                </div>
            </div>

            <div className='w-[50%]'>
                <button type="submit" className={`text-white ${downloadBrochure ? 'hidden' : 'flex'} w-[80%] bg-brandCol hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 items-center justify-center`} >
                    Submit
                </button>
                <button type="submit" className={`text-white ${downloadBrochure ? 'flex' : 'hidden'} items-center justify-center w-[90%] bg-brandCol hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5`} onClick={() => { setDownloadBrochure(!downloadBrochure) }}>
                    <a
                        href="/broucher.pdf"
                        download="broucher.pdf"
                    >
                        Download Brochure
                    </a>
                </button>
            </div>

        </form>
    );
}

export default BookingFormPakCom;
