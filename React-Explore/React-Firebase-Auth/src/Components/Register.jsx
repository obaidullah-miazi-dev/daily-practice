import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center items-center mt-40'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Register Now!</h1>
                    <form>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name='name' />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password'/>
                            <button className="btn btn-neutral mt-4 mb-2">Register</button>
                            <p>Already Have an Acount? Please
                                <NavLink to='/login' className='text-blue-500 font-semibold hover:text-blue-400'> Login</NavLink></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;