import React from 'react';
import img1 from '../../assets/batmannn.jpg'

const Newsletter = () => {
    return (
        <div className='my-14'>
            <div className="hero" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content lg:text-start text-center">
                    <div className="my-10">
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold text-orange">Join Our Newsletter</h1>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        <br />
                        <button className="btn bg-orange border-0 my-6">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;