import React, { useEffect, useState } from 'react';
import InternationalHome from '../APIs/InternationalHome';
import DomasticHome from '../APIs/DomasticHome';
import { Link } from 'react-router-dom';

function MyAirDealRecom() {
    const [recomendations, setRecomendations] = useState([]);

    useEffect(() => {
        const combinedRecommendations = [
            ...InternationalHome.map((place) => place.place),
            ...DomasticHome.map((place) => place.place),
        ];

        setRecomendations(combinedRecommendations);
    }, []);

    return (
        <div>
            <div className='flex items-center  flex-col pb-5 justify-center'>
                <h1 className='font-semibold text-brandCol  text-xl w-[95%] '>Premium MyAirDeal Travel Picks</h1>
                <div
                    style={{ boxShadow: '0px 0px 3px 0.1px black' }}
                    className='rounded-lg font-medium w-[95%] my-5 text-brandCol bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 '
                >
                    {recomendations.map((place, index) => (
                        <div key={index} className=' p-4  hover:scale-105 transition-all duration-300  hover:rounded-lg w-[80%] text-center'>
                            <Link

                                to={'/packages'}
                                state={place}
                                className='hover:underline hover:scale-125 transition-all duration-300'
                            >
                                Flight to {place}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyAirDealRecom;
