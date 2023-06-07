import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import defaultUser from '../assets/default-user.png';
import { FiLogOut, FiSettings, FiUser } from 'react-icons/fi';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate("/login")
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
            })
    }

    const carLogo = <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 200 120">
        <rect x="20" y="30" width="160" height="40" rx="5" ry="5" fill="#F44336" />
        <rect x="30" y="20" width="140" height="20" rx="5" ry="5" fill="#FFC107" />
        <rect x="40" y="25" width="40" height="15" rx="3" ry="3" fill="#E0E0E0" />
        <rect x="110" y="25" width="40" height="15" rx="3" ry="3" fill="#E0E0E0" />
        <circle cx="45" cy="70" r="15" fill="#212121" />
        <circle cx="155" cy="70" r="15" fill="#212121" />
        <circle cx="25" cy="50" r="5" fill="#FFEB3B" />
        <circle cx="175" cy="50" r="5" fill="#FFEB3B" />
        <rect x="55" y="35" width="90" height="10" fill="#212121" />
    </svg>
    return (
        <div className="navbar bg-teal-200 flex flex-col lg:flex-row justify-evenly">
            <Link to="/" className="btn btn-ghost normal-case text-xl">{carLogo}Khelna Gari</Link>
            <div className='space-x-6 flex flex-col lg:flex-row gap-4'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/all-toys">All Toys</ActiveLink>
                {user && <>
                    <ActiveLink to="/my-toys">My Toys</ActiveLink>
                    <ActiveLink to="/add-toy">Add a Toy</ActiveLink>
                </>}
                <ActiveLink to="/blogs">Blogs</ActiveLink>
                {!user ? <>
                    <ActiveLink to="/login">Login</ActiveLink>
                    <ActiveLink to="/sign-up">Sign Up</ActiveLink>
                </> :
                    <button className='bg-rose-400 px-1.5 text-white rounded font-medium' onClick={handleSignOut}>Log out</button>}
            </div>
            <div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input border-0 focus:outline-none w-full md:w-auto" />
                </div>
                {user && <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img title={user.displayName} src={user.photoURL ? user.photoURL : defaultUser} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ms-4">
                        <li><a><FiUser /> Profile</a></li>
                        <li><a><FiSettings /> Settings</a></li>
                        <li><button onClick={handleSignOut}><FiLogOut /> Logout</button></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;