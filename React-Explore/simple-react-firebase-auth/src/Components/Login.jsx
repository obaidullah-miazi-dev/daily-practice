import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [user, setUser] = useState(null);
    const handleGoogleLoginBtn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                alert('sign out success');
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Please Login</h2>
                <button
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    onClick={handleGoogleLoginBtn}
                >
                    <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>
                    Login with Google
                </button>
                {user && (
                    <div className="mt-6 text-center">
                        <img
                            src={user.photoURL}
                            alt={user?.displayName}
                            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-200"
                        />
                        <h1 className="text-lg font-semibold text-gray-700">Name: {user.displayName}</h1>
                        <h1 className="text-md text-gray-600">Email: {user.email}</h1>
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;