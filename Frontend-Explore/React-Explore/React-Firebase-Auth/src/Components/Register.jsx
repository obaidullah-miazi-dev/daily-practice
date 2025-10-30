// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
// import { auth } from '../Firebase/firebase.init';

const Register = () => {
    const {createUser}= use(AuthContext)

    const handleRegister= (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    // const handleRegister = (e) =>{
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email,password);

    //     createUserWithEmailAndPassword(auth,email,password)
    //     .then(result =>{
    //         console.log(result.user);
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     })
    // }
    return (
        <div className='flex justify-center items-center mt-40'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Register Now!</h1>
                    <form onSubmit={handleRegister}>
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