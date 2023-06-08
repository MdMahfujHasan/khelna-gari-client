import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import toyCar from '../../src/assets/toy-car.jpg';

const NotFound = () => {
    return (
        <div className='text-center mt-8 flex justify-center items-center gap-12'>
            <div>
                <h2 className='text-indigo-500 text-2xl font-bold'>Not Found</h2>
                <h2 className='text-8xl font-bold'>404</h2>
                <p className='text-lg text-slate-700 font-semibold'>The page you're looking for is not found.</p>
                <Link to="/">
                    <button className='btn btn-primary btn-sm text-white mt-2'><AiOutlineArrowLeft /> Back to Home</button>
                </Link>
            </div>
            <img src={toyCar} className='w-64 rounded-3xl border-4 border-rose-300' alt="Toy car" />
        </div>
    );
};

export default NotFound;