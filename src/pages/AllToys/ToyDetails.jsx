import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { toyName, sellerName, toyPrice, quantity, photoURL, subCategory, description, email, rating } = toyDetails;
    return (
        <div className="card w-3/5 mx-auto bg-base-100 shadow-xl flex flex-col">
            <figure><img src={photoURL} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='text-3xl font-bold text-success'>${toyPrice}</p>
                <div className='flex gap-2 justify-center items-center'>
                    <h2 className="text-xl font-bold font-serif">{toyName}</h2>
                    <p><small>by <span className='font-bold text-purple-500'>{sellerName}</span></small></p>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary">{subCategory}</div>
                    <div className="badge badge-outline">{email}</div>
                    <div className="badge badge-outline flex items-center"><span><b>Rating: </b>{rating}</span> <FaStar className='text-yellow-400' /></div>
                    <div className="badge badge-outline"><b>Quantity: </b>{quantity}</div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;