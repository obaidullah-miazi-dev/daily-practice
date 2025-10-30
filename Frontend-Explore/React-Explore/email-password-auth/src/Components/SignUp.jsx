import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const handleSignUp = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked
        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        // reset status: 
        setError('')
        setSuccess(false)
        // console.log(email,password);

        

        if (!email || !password) {
            setError('Invalid Credential')
            return;
        }

        if (!strongPasswordRegex.test(password)) {
            setError("Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.");
            return;
        }


        if(!terms){
            setError('Please Accept Our Terms & Conditions')
            return;
        }


        try {
            const method = await fetchSignInMethodsForEmail(auth, email)
            if (method && method.length > 0) {
                setError('This email is already registered. Please log in instead.')
                return;
            }

            const result = await createUserWithEmailAndPassword(auth, email, password)
            sendEmailVerification(result.user)
            .then(()=>{
                alert('please verify the email')
            })
            console.log(result.user);
            setSuccess(true)
            e.target.reset()
        }
        catch (error) {
            console.log(error);
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already registered. Please log in instead.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Invalid email address.');
            } else if (error.code === 'auth/weak-password') {
                setError('Your password is too weak. Try a stronger one.');
            } else {
                setError('Something went wrong. Please try again.');
            }
        }
    }

    const handleShow = (e) => {
        e.preventDefault()
        setShowPass(!showPass)

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input type={showPass ? 'text' : 'password'} className="input " name='password' placeholder="Password" />
                                        <button onClick={handleShow} className='absolute right-6 top-2 z-50'>
                                            {
                                                showPass ? <EyeOff /> : <Eye></Eye>
                                            }
                                        </button>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <input type="checkbox" name='terms' className="checkbox checkbox-info w-4 h-4" />
                                            Accept Our Terms & Conditions
                                        </label>
                                    </div>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Sign Up</button>
                                    <p className='font-semibold'>Already have an Acount? <Link to='/signIn'>
                                    <span className='text-blue-500 underline'>Sign In</span>
                                    </Link></p>
                                </fieldset>
                                {
                                    success && <p className='text-green-500'>Account Created Successful</p>
                                }
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;