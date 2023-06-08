import React, { useContext } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Category3 = ({ item }) => {
    const { user } = useContext(AuthContext);

    const handleWarning = () => {
        if (!user) {
            Swal.fire({
                title: "Oops! You aren't logged in",
                text: "You have to login first to buy this toy!",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            })
        }
    }
    const { _id, img, name, price, rating } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Toys" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating} stars</p>
                <Link to={`/transformingCars/${_id}`} >
                    <div className="card-actions justify-end">
                        <button onClick={handleWarning} className="btn btn-sm bg-teal-200 hover:bg-teal-300 text-teal-700 border hover:border-teal-400"><BsCartPlus className='text-lg' /> View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Category3;