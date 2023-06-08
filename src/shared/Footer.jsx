import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" viewBox="0 0 200 120">
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
                    <p>Khelna Gari Ltd.<br />Providing quantity toys since 1997</p>
                    <p>© 1997-23, all rights reserved.</p>
                    <p>House No. 42, Road No. 7A, Gulshan, Dhaka 1209</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <AiFillFacebook className='text-xl text-blue-500' />
                    <AiFillInstagram className='text-xl text-rose-400' />
                    <AiOutlineTwitter className='text-xl text-blue-400' />
                </div>
            </footer>
        </div>
    );
};

export default Footer;