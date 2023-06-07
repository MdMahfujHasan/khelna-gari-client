import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(from, { replace: true })
                setUser(result.user)
                Swal.fire(
                    'Sweet',
                    'Google sign in successful!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
            })
    }
    return (
        <button onClick={handleGoogleSignIn} className="btn bg-white hover:bg-white hover:border-slate-500 w-80 mx-8 border border-slate-500 mb-4"><FcGoogle /> Sign In with Google</button>
    );
};

export default SocialLogin;