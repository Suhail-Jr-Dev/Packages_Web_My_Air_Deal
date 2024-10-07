import React from 'react';

import billingimg from '../assets/BillingImg/billingimg1.jpeg'
import billingimg2 from '../assets/BillingImg/billingimg2.jpeg'
import billingimg3 from '../assets/BillingImg/billingimg3.jpeg'

const ImageGrid = () => {
    return (
        <div className="max-w-xl mx-auto"> {/* Slightly larger width */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[52vh] w-full">
                {/* First image taking up 2 rows */}
                <div className="row-span-2">
                    <img 
                        src={billingimg}
                        alt="Vertical Image" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Two separate images */}
                <div>
                    <img 
                        src={billingimg2}
                        alt="First Small Image" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div>
                    <img 
                        src={billingimg3}
                        alt="Second Small Image" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageGrid;
