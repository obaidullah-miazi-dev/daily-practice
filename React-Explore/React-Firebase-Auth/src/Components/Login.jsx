import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center mt-40'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Login Now!</h1>
                    <form>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p>New in Here? Please
                                <NavLink to='/register' className='text-blue-500 font-semibold hover:text-blue-400'> Register</NavLink></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;