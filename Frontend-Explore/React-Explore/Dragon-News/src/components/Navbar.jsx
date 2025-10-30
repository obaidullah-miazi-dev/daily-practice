import React from 'react';
import { NavLink } from 'react-router';
import image from '../assets/user.png';

const Navbar = () => {
    return (
        
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <div></div>
                <div className='flex gap-3 list-none text-accent '>
                    <NavLink to='/'><li className='hover:text-gray-800'>Home</li></NavLink>
                    <NavLink to='/about'><li className='hover:text-gray-800'>About</li></NavLink>
                    <NavLink to='/career'><li className='hover:text-gray-800'>Career</li></NavLink>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={image} alt="" />
                    <button className='btn btn-primary px-8 py-3'>Login</button>
                </div>
            </div>
        
    );
};

export default Navbar;