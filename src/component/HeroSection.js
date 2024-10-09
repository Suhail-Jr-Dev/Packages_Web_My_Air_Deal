import React from 'react';
import heroBanner from '../assets/heroBanner.svg';
import '../Stylescomp/HeroSection.css'

function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className='w-full h-[70vh] sm:h-[80vh] flex items-center justify-center relative'
        >
            <div className="absolute inset-0 z-10"></div> {/* For extra overlay */}
            <p className=' text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] px-5 md:px-10 lg:px-20 md:py-5 lg:py-10 rounded z-10 text-center animate-fade-in'>
                Escape the Ordinary: Discover Your Dream Getaway with Our Unforgettable Travel Packages!
            </p>
        </div>
    );
}

export default HeroSection;
