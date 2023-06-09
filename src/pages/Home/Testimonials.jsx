import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://khelna-gari-server.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <>
            <h2 className='text-4xl text-center font-serif font-extrabold text-teal-500 mt-12 mb-4'>Testimonials</h2>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8'>
                {
                    testimonials.map(testimonial => <TestimonialCard
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </>
    );
};

export default Testimonials;