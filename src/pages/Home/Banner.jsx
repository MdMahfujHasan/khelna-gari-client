import React from 'react';
import '../../shared/Style.css';
import banner from '../../../src/assets/banner.png';

const Banner = () => {
    const wave = <svg viewBox="0 0 500 200">
        <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
        <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#0E7452" opacity="0.8"></path>
        <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#0E7452" opacity="0.5"></path>
    </svg>
    return (
        <div className='relative'>
            {wave}
            <div className='ms-20 absolute top-10 flex justify-between items-center'>
                <h3 className='text-7xl text-teal-400 font-extrabold w-1/2'>Fuel your little one's imagination with our awesome car toy collection!</h3>
                <img className='w-1/2' src={banner} alt="Kid playing" />
            </div>
        </div>
    );
};

export default Banner;