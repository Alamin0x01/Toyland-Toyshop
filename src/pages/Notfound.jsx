import React from 'react';
import webP from '../assets/404nf.webp'
import { Link } from 'react-router-dom';
import useTitle from '../Hook/useTitle';

const Notfound = () => {
    useTitle('Not Found')
    return (
        <div>
            <div className='flex justify-center'>
                <img className='h-96' src={webP} alt="" />
            </div>
            <div className='text-center'>
                <Link className='btn bg-orange border-0 my-6' to="/">Back to home</Link>
            </div>
        </div>
    );
};

export default Notfound;