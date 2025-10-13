import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.init';

const SignIn = () => {
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState('')
    const emailRef = useRef();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (!result.user.emailVerified) {
                    alert('please verify your email first then sign in')
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }


    const handlePassForget = (e) => {
        e.preventDefault();

        const email = emailRef.current.value

        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('please check your email')
        })
        .catch(error =>{
            console.log(error);
        })

        console.log('clicked',email);
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
                        <h1 className="text-5xl font-bold">Sign In</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">


                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" ref={emailRef} className="input" placeholder="Email" name='email' />
                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input type={showPass ? 'text' : 'password'} className="input " name='password' placeholder="Password" />
                                        <button onClick={handleShow} className='absolute right-6 top-2 z-50'>
                                            {
                                                showPass ? <EyeOff /> : <Eye></Eye>
                                            }
                                        </button>
                                    </div>
                                    <div onClick={handlePassForget}>
                                        <a className="link link-hover">Forgot password?</a>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Sign In</button>
                                    {
                                        error && <p className='text-red-500'>{error}</p>
                                    }
                                </fieldset>
                            </form>
                            <p className='font-semibold'>New in Here? <Link to='/signUp'>
                                <span className='text-blue-500 underline'>Sign Up</span>
                            </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;