import React from 'react';
import heroBanner from '../assets/heroBanner.svg';

function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className='w-full h-[75vh] flex items-center justify-center'
        >
            <p className=' text-white text-[1.7rem] md:w-[60%]  md:p-4 rounded z-20 text-center'>
                Escape the Ordinary: Discover Your Dream Getaway with Our Unforgettable Travel Packages!
            </p>
        </div>
    );
}

export default HeroSection;
