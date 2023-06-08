import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const { user } = useContext(AuthContext);

    const toyDetails = useLoaderData();

    const handleUpdateToy = event => {
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
        const updatedToy = {
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

        fetch(`http://localhost:5000/allToys/${toyDetails._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <>
            <h2 className='text-xl text-center font-serif font-extrabold text-teal-500 mb-8 mt-3'>Update Your Toy</h2>
            <form onSubmit={handleUpdateToy}>
                <div className='flex items-center justify-center space-x-2'>
                    <div className="form-control w-1/3 max-w-xs">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Toy name"
                            name="toyName"
                            className="input input-bordered input-success w-full max-w-xs focus:outline-0"
                            defaultValue={toyDetails.toyName}
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
                            className="input input-bordered input-success w-full max-w-xs focus:outline-0"
                            defaultValue={toyDetails.sellerName}
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
                            className="input input-bordered input-success w-full max-w-xs focus:outline-0"
                            defaultValue={toyDetails.email}
                            required
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
                            className="input input-bordered input-success w-full max-w-xs focus:outline-0"
                            defaultValue={toyDetails.toyPrice}
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
                            className="input input-bordered input-success w-full max-w-xs focus:outline-0"
                            defaultValue={toyDetails.rating}
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
                            className="input input-bordered input-success w-full max-w-xs focus:outline-0"
                            defaultValue={toyDetails.quantity}
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
                        defaultValue={toyDetails.description}
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
                        className="input input-bordered input-success w-1/3 focus:outline-0"
                        defaultValue={toyDetails.photoURL}
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
                                defaultValue={toyDetails.subCategory}
                                required
                            />
                            <label className="label">Remote Control Cars</label>
                        </div>
                        <div className="flex">
                            <input
                                type="radio"
                                name="subCategory"
                                value="Construction and Building Cars"
                                defaultValue={toyDetails.subCategory}
                                required
                            />
                            <label className="label">Construction and Building Cars</label>
                        </div>
                        <div className="flex">
                            <input
                                type="radio"
                                name="subCategory"
                                value="Transforming Cars"
                                defaultValue={toyDetails.subCategory}
                                required
                            />
                            <label className="label">Transforming Cars</label>
                        </div>
                    </div>
                </div>

                <div className='flex items-center flex-col mb-3'>
                    <input
                        className='btn bg-teal-400 hover:bg-teal-500 w-1/5 text-white'
                        type="submit"
                        value="Update Toy"
                    />
                </div>
            </form >
        </>
    );
};

export default UpdateToy;