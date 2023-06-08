import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Category1 = ({ item }) => {
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
                <h2 className="text-2xl font-thin text-sky-400">{name}</h2>
                <p><b>Price:</b> ${price}</p>
                <p className='flex items-center'><span><b>Rating:</b> {rating}</span> <FaStar className='text-yellow-400 ms-1' /></p>
                <Link to={`/remoteControlCars/${_id}`} >
                    <div className="card-actions justify-end">
                        <button onClick={handleWarning} className="btn btn-sm bg-teal-200 hover:bg-teal-300 text-teal-700 border hover:border-teal-400"><BsCartPlus className='text-lg' /> View Details</button>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Category1;