import React, { useEffect, useState } from 'react';
import PageBanner from './PageBanner';
import AllPlace from '../APIs/CombinationHome/AllPlace';
import { Link, useLocation } from 'react-router-dom';
import card from '../assets/APIsImg/DomasticHome/kerala1.jpeg'
import EnquiryPopUp from './EnquiryPopup';

function Packagescomp({ temp, setTemp }) {
    const location = useLocation();
    const [getPlace, setGetPlace] = useState('');
    const [getAllData, setGetAllData] = useState([]);

    // Function to filter AllPlace by key
    const filterByKey = (key) => {
        // console.log(key)
        return AllPlace.map(placeObj => placeObj[key]).filter(Boolean);
    };

    const flightData = location.state;
    useEffect(() => {
        if (flightData) {
            setGetPlace(flightData);
            const response = filterByKey(flightData.toLowerCase());
            setGetAllData(response);
            // console.log(response)
            // console.log(flightData)
        }
        // console.log('hai')
    }, [location.state]);

    return (
        <div>
            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>
            {
                getAllData.length > 0 ? <PageBanner data={flightData} image={getAllData[0][1]?.banner} /> : <PageBanner />
            }
            <div className='flex py-10 items-center flex-col justify-center'>
                {getAllData.length > 0 ? <h1 className='font-semibold text-[1.2rem] w-[90%] my-5'>Fixed Departures with Flights</h1> : ''}
                <div className='flex flex-wrap gap-7 items-center justify-start w-[90%]'>
                    {
                        getAllData.length > 0 ? (
                            getAllData[0].map((e, index) => (


                                <div class="max-w-sm bg-white h-[30rem] border overflow-hidden border-gray-200 rounded-lg shadow">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={e?.img} alt="" className='w-[100%] h-[13rem]' />
                                    </a>
                                    <div class="p-5">
                                        <div className='py-5'>
                                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{
                                                e.place.slice(0, 20)
                                            }</h5>
                                            <h1 className='text-brandCol'>{
                                                e.duration.slice(0, 20) + '...'
                                            }</h1>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <p>No packages available for this location.</p>
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