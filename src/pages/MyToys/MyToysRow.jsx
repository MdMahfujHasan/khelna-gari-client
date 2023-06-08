import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, toyName, sellerName, toyPrice, quantity, photoURL, subCategory, description, email, rating } = myToy;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">Quantity: {quantity}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>
                <span className='text-indigo-500 font-serif'>{subCategory}</span>
                <br />
                <span className="badge badge-sm">{description.slice(0, 40)}...</span>
            </td>
            <td>
                <span className='font-semibold'>${toyPrice}</span>
                <br />
                <span className="badge badge-sm">{rating} <AiFillStar className='text-yellow-500' /></span>
            </td>
            <th className='space-x-2'>
                <Link to={`/my-toys/update/${_id}`}>
                    <button className="btn btn-success text-white btn-xs">Update</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;