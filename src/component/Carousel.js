import React, { useEffect, useState } from 'react';

import place1 from '../assets/CarouselImg/carplace1.jpg';
import place2 from '../assets/CarouselImg/carplace2.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Corrected slide images without extra curly braces
    const slides = [
        { src: place1, alt: "Slide 1" },
        { src: place2, alt: "Slide 2" }
        // { src: place3, alt: "Slide 3" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Slide changes every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [slides.length]);

    return (
        <div className='py-10 flex flex-col items-center justify-center'>
            <div className="relative w-[95%]" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-80">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            data-carousel-item
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="block w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            aria-current={currentSlide === index}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
