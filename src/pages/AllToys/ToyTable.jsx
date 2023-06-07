import React from 'react';

const ToyTable = ({ toy, length }) => {
    const { toyName, sellerName, toyPrice, quantity, photoURL, subCategory } = toy;
    return ( //description, email, rating
        <div className='flex justify-around border border-slate-200'>
            <td>
                <img src={photoURL} className='h-16 w-20' alt="Toy photo" />
            </td>
            <td className='font-semibold text-base text-slate-500 w-36'>{toyName}</td>
            <td className='font-semibold text-base text-slate-500 w-36'>{subCategory}</td>
            <td className='font-semibold text-base text-slate-500 w-36'>{sellerName}</td>
            <td className='font-semibold text-base text-slate-500 w-36'>${toyPrice}</td>
            <td className='font-semibold text-base text-slate-500 w-36 py-1'>{quantity}</td>
            <td className='w-24'>
                <button className='btn'>View Details</button>
            </td>
        </div >
    );
};

export default ToyTable;