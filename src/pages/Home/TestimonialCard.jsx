import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, designation, message, img } = testimonial;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <div className="card-body">
                <p className='font-mono text-slate-600'>{message}</p>
            </div>
            <div className='flex space-x-4 items-center p-4'>
                <figure><img className='h-16 w-16 rounded-full' src={img} alt="Shoes" /></figure>
                <div>
                    <h2 className="text-lg font-bold text-slate-700">{name}</h2>
                    <p className='text-slate-500 font-semibold text-sm'>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;