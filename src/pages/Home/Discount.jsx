import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/Discount/d1.jpg'
import img2 from '../../assets/Discount/d2.jpg'

const Discount = () => {
    useEffect(() => {
        AOS.init({ offset: 100, duration: 400, easing: 'ease-in-out', delay: 200 })
    }, [])
    return (
        <div className='lg:my-14'>
            <div className='text-center '>
                <h2 className='text-4xl text-orange font-bold mb-4'>Offers</h2>
                <h4 className='text-2xl font-semibold mb-6'>Collect before ran out.</h4>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 lg:mx-10 lg:space-y-0 space-y-6 px-4 lg:px-4'>
                <div data-aos="zoom-in" className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="lg:text-6xl font-bold">Collection</h2>
                        <p className='text-orange text-2xl font-bold'>30% flat discount</p>
                        <p className='font-bold'>Marvel Studio</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-orange">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="lg:text-6xl font-bold">Collection</h2>
                        <p className='text-orange text-2xl font-bold'>20% flat discount</p>
                        <p className='font-bold'>DC Comics</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-orange">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;