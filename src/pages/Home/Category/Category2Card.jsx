import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';

const Category2Card = () => {
    const item = useLoaderData();
    const { img, name, description, price, rating } = item;
    return (
        <div className="card bg-base-100 border border-teal-400 w-2/3 mx-auto">
            <figure className="px-10 pt-10">
                <img src={img} alt="Toys" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-4xl text-teal-400 font-light">{name}</h2>
                <p className='flex items-center'><span><b>Rating:</b> {rating}</span> <AiFillStar className='text-yellow-300 ms-1' /></p>
                <p className='text-slate-500 font-serif'>{description}</p>
                <div className="card-actions">
                    <p className="btn btn-sm bg-teal-200 hover:bg-teal-300 text-teal-700 border hover:border-teal-400">Price: ${price}</p>
                    <button className="btn btn-sm bg-teal-200 hover:bg-teal-300 text-teal-700 border hover:border-teal-400"><BsCartPlus className='text-lg' /> Confirm Order</button>
                </div>
            </div>
        </div>
    );
};

export default Category2Card;