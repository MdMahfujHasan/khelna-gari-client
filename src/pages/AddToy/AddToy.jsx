import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const subCategory = form.subCategory.value;
        const newToy = {
            toyName,
            sellerName,
            email,
            toyPrice: price,
            rating,
            quantity,
            description,
            photoURL: photo,
            subCategory
        }
        fetch('http://localhost:5000/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                Swal.fire(
                    'Awesome!',
                    "You've successfully added a toy",
                    'success'
                )
            })
    }
    return (
        <form onSubmit={handleAddToy}>
            <div className='flex items-center justify-center space-x-2'>
                <div className="form-control w-1/3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Toy name"
                        name="toyName"
                        className="input input-bordered input-accent w-full max-w-xs focus:outline-0"
                        required
                    />
                </div>

                <div className="form-control w-1/3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your name"
                        name="sellerName"
                        className="input input-bordered input-accent w-full max-w-xs focus:outline-0"
                        defaultValue={user.displayName ? user.displayName : ''}
                        required
                    />
                </div>

                <div className="form-control w-1/3 max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        className="input input-bordered input-accent w-full max-w-xs focus:outline-0 text-slate-700 font-semibold bg-slate-50"
                        defaultValue={user.email}
                        readOnly
                    />
                </div>
            </div>

            <div className="flex items-center justify-center space-x-2">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Toy price"
                        name="price"
                        className="input input-bordered input-accent w-full max-w-xs focus:outline-0"
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Toy rating"
                        name="rating"
                        className="input input-bordered input-accent w-full max-w-xs focus:outline-0"
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available quantity"
                        name="quantity"
                        className="input input-bordered input-accent w-full max-w-xs focus:outline-0"
                        required
                    />
                </div>
            </div>

            <div className="form-control w-1/3 mx-auto">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea
                    placeholder="Detailed description"
                    name="description"
                    className="textarea textarea-accent focus:outline-0"
                    required
                ></textarea>
            </div>

            <div className="form-control flex justify-start items-center">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input
                    type="text"
                    placeholder="Toy's photo URL"
                    name="photo"
                    className="input input-bordered input-accent w-1/3 focus:outline-0"
                    required
                />
            </div>

            <div className="form-control flex justify-center items-center">
                <label className="label">
                    <span className="label-text">Sub-Category</span>
                </label>
                <div className="flex">
                    <div className="flex">
                        <input
                            type="radio"
                            name="subCategory"
                            value="Remote Control Cars"
                            required
                        />
                        <label className="label">Remote Control Cars</label>
                    </div>
                    <div className="flex">
                        <input
                            type="radio"
                            name="subCategory"
                            value="Construction and Building Cars"
                            required
                        />
                        <label className="label">Construction and Building Cars</label>
                    </div>
                    <div className="flex">
                        <input
                            type="radio"
                            name="subCategory"
                            value="Transforming Cars"
                            required
                        />
                        <label className="label">Transforming Cars</label>
                    </div>
                </div>
            </div>

            <div className='flex items-center flex-col mb-3'>
                <input className='btn bg-teal-400 hover:bg-teal-500 w-1/5 text-white' type="submit" value="Add Toy" />
            </div>
        </form >
    );
};

export default AddToy;