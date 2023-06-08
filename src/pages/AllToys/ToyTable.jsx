import React from 'react';
import { Link } from 'react-router-dom';

const ToyTable = ({ toy, length }) => {
    const { _id, toyName, sellerName, toyPrice, quantity, photoURL, subCategory } = toy;
    return (
        <div className='flex justify-around border border-slate-200'>
            <td>
                <img src={photoURL} className='h-16 w-20' alt="Toy photo" />
            </td>
            <td className='font-semibold text-base text-slate-500 w-36'>{toyName}</td>
            <td className='font-semibold text-base text-slate-500 w-36'>{subCategory}</td>
            <td className='font-semibold text-base text-slate-500 w-36'>{sellerName}</td>
            <td className='font-semibold text-base text-slate-500 w-36'>${toyPrice}</td>
            <td className='font-semibold text-base text-slate-500 w-36 py-1'>{quantity}</td>
            <Link to={`/all-toys/${_id}`}>
                <td className='w-24'>
                    <button className='btn'>View Details</button>
                </td>
            </Link>
        </div >
    );
};

export default ToyTable;