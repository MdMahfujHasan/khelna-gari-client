import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <button className="btn bg-white hover:bg-white hover:border-slate-500 w-80 mx-8 border border-slate-500 mb-4"><FcGoogle /> Sign In with Google</button>
    );
};

export default SocialLogin;