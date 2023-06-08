import React, { useContext, useState } from 'react';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { createUser, setUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                result.user.displayName = name;
                result.user.photoURL = photo;
                setUser(result.user);
                Swal.fire(
                    'Sweet',
                    'Account created successfully!',
                    'success'
                )
                form.reset();
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
                form.reset();
            })
    }
    return (
        <>
            <Helmet>
                <title>Sign Up | Khelna Gari</title>
            </Helmet>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Sign Up</h1>
                    </div>
                    <div className="w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    name="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Your email address"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your photo URL"
                                    name="photo"
                                    className="input input-bordered"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn bg-teal-500 hover:bg-teal-600 text-white mt-3"
                            />
                        </form>
                        <p className='text-center text-slate-700 font-semibold font-sans'>Already have an account? <Link className='text-blue-500 hover:underline' to="/login">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;