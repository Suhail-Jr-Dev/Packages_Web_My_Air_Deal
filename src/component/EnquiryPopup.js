
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { message } from 'antd';

const PopUp = (props) => {
    const { temp, setTemp } = props

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const now = new Date();
    const formattedDate = formatDate(now);



    const [formData, setFormData] = useState({
        name: localStorage.getItem('name') || '',
        departure: localStorage.getItem('departure') || '',
        email: localStorage.getItem('email') || '',
        phone: localStorage.getItem('phone') || '',
        passengers: localStorage.getItem('passengers') || '',
        date: formattedDate,
    });



    useEffect(() => {
        Object.keys(formData).forEach(key => {
            localStorage.setItem(key, formData[key]);
        });

        return () => {
            localStorage.clear();
        }

    }, [formData]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {


            if (formData.phone.length !== 10) {
                message.error('give phone number correctly')
                return 1
            }

            

            await axios.post('https://packages-aq69.onrender.com/api/v1/packages/sendmail', formData);
          
            setTemp(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                departure: '',
                passengers: '',

            });
            localStorage.clear(); // Clear the local storage upon successful submission
            message.success('Form submission is successful');
        } catch (error) {
            message.error('Form submission was unsuccessful. Please check your email.');
            // setTemp(false)
            // setFormData({
            //     name: '',
            //     email: '',
            //     phone: '',
            //     type: ''
            // });
        }
    };





    return (
        <div className="App z-50">
            {/* Modal Toggle Button */}
            {/* <button
                onClick={openModal}
                className="block text-hoverColor hover:text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                type="button"
            >
                ENQUIRE NOW
            </button> */}

            {/* Main Modal */}
            {temp && (
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* Modal Content */}
                        <div className="relative  rounded-lg shadow bg-white bg-opacity-45 backdrop-blur-lg">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold tracking-[0.1rem] text-gray-900 dark:text-white">
                                    Get An Enquiry
                                </h3>
                                <button
                                    onClick={() => {
                                        setTemp(false)
                                    }}
                                    type="button"
                                    className="text-black hover:text-red-700 bg-transparent hover:bg-white  rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center  "
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal Body */}
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="flex items-start  mb-2 text-sm font-medium text-black "
                                        >
                                            Name <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name='name'
                                            id="name"
                                            className=" outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                                            onChange={handleChange}
                                            value={formData.name}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="flex items-start  mb-2 text-sm font-medium text-black "
                                        >
                                            Email <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className=" outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                                            required
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="flex items-start  mb-2 text-sm font-medium text-black "
                                        >
                                            Phone <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            className=" outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                                            required
                                            onChange={handleChange}
                                            value={formData.phone}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="passengers"
                                            className="flex items-start  mb-2 text-sm font-medium text-black "
                                        >
                                            Passengers <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="passengers"
                                            id="passengers"
                                            className=" outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                                            required
                                            onChange={handleChange}
                                            value={formData.passengers}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="departure"
                                            className="flex items-start  mb-2 text-sm font-medium text-black "
                                        >
                                            Departure <span className='text-red-600'>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="departure"
                                            id="departure"
                                            className=" outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
                                            required
                                            onChange={handleChange}
                                            value={formData.departure}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-hoverColor "

                                    >
                                        Get A Call
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopUp;
