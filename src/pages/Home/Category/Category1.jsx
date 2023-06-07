import React from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';

const Category1 = ({ item }) => {
    const { _id, img, name, price, rating } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Toys" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating} stars</p>
                <Link to={`/remoteControlCars/${_id}`} >
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm bg-teal-200 hover:bg-teal-300 text-teal-700 border hover:border-teal-400"><BsCartPlus className='text-lg' /> Buy Now</button>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Category1;