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
                {user ? <>
                    <ActiveLink to="/my-toys">My Toys</ActiveLink>
                    <ActiveLink to="/add-toy">Add a Toy</ActiveLink>
                </> :
                    <>
                        <ActiveLink to="/login">Login</ActiveLink>
                        <ActiveLink to="/sign-up">Sign Up</ActiveLink>
                    </>}
                <ActiveLink to="/blogs">Blogs</ActiveLink>
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
            </div>
            <div>
                {user && <div className="dropdown dropdown-left z-10">
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