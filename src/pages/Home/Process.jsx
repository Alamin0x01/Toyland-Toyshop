import React from 'react';
import { FaShippingFast, FaMoneyCheckAlt, FaHeadset, FaPercent } from "react-icons/fa";

const Process = () => {
    return (
        <div className='grid lg:grid-cols-4 my-14 grid-cols-1 space-y-6 lg:space-y-0'>
            <div className='flex justify-center items-center lg:w-auto w-60 mx-auto'>
                <FaShippingFast className='mr-4 text-6xl text-orange' />
                <div className=''>
                    <h4>Free Shipping</h4>
                    <p>Free shipping on all UK orders</p>
                </div>
            </div>
            <div className='flex justify-center items-center lg:w-auto w-60 mx-auto'>
                <FaMoneyCheckAlt className='mr-4 text-6xl text-orange ' />
                <div>
                    <h4>Money Guarantee</h4>
                    <p>We are guarantee your money</p>
                </div>
            </div>
            <div className='flex justify-center items-center lg:w-auto w-60 mx-auto'>
                <FaHeadset className='mr-4 text-6xl text-orange' />
                <div>
                    <h4>Premium Support</h4>
                    <p>24 Hours online Support</p>
                </div>
            </div>
            <div className='flex justify-center items-center lg:w-auto w-60 mx-auto'>
                <FaPercent className='mr-4 text-6xl text-orange' />
                <div>
                    <h4>Black Friday</h4>
                    <p>Shocking discount</p>
                </div>
            </div>
        </div>
    );
};

export default Process;