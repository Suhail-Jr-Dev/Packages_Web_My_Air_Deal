import React, { useEffect, useState } from 'react';
import PageBanner from './PageBanner';
import AllPlace from '../APIs/CombinationHome/AllPlace';
import { Link, useLocation } from 'react-router-dom';
import card from '../assets/APIsImg/DomasticHome/kerala1.jpeg'
import EnquiryPopUp from './EnquiryPopup';
import { DatePicker, message } from 'antd';
import BookingFormPakCom from './BookingFormPakCom';

import { Helmet } from 'react-helmet'
import SEOPlace from '../SEO/SEOPlace';

import { FaArrowRight } from "react-icons/fa6";

import ImageGrid from '../component/ImageGrid'

function Packagescomp({ temp, setTemp }) {
    const location = useLocation();
    const [getPlace, setGetPlace] = useState('');
    const [getAllData, setGetAllData] = useState([]);
    const [getSeo, setGetSeo] = useState();

    console.log(location?.pathname.split('/')[2])

    // Function to filter AllPlace by key
    const filterByKey = (key) => {
        return AllPlace.map(placeObj => placeObj[key])?.filter(Boolean);
    };

    const flightData = location?.pathname.split('/')[2];
    useEffect(() => {
        setGetSeo(SEOPlace[0][flightData?.toLowerCase()])
        if (flightData) {
            setGetPlace(flightData);
            const response = filterByKey(flightData?.toLowerCase());
            setGetAllData(response);

        }
    }, []);

    // console.log(getAllData[0][0])




    return (
        <div id='xyzData' className='bg-white'>

            <Helmet>
                <title>{getSeo?.title}</title>
                <meta name="description" content={getSeo?.description} />
            </Helmet>

            <div className=' absolute z-50 right-0 border-[1px] cursor-pointer mt-2 mr-5 border-hoverColor rounded-lg '>
                <EnquiryPopUp temp={temp} setTemp={setTemp} />
            </div>
            {
                getAllData.length > 0 ? <PageBanner data={flightData} image={getAllData[0][0]?.banner} /> : <PageBanner data={flightData} />
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
                                            <Link to={`/billingpage/${encodeURIComponent(JSON.stringify({ place: getPlace, id: e.id }))}`} class="inline-flex hover:scale-105 transition-all duration-300 items-center py-3 px-2 text-sm font-medium text-center text-white bg-brandCol rounded-lg hover:bg-blue-800 ">
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
                                    To get more details about <span className='text-[1.3rem] font-bold'>{flightData}</span> Package Kindly fill the form our team will reach you !
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


