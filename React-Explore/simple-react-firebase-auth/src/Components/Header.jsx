import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/" className={
                ({ isActive }) => `
                    px-4 py-2 font-semibold rounded-lg transition duration-300
                    ${isActive ? 'text-blue-600' : 'text-black'}
                    `
            }>
                Home</NavLink>

            <NavLink to="/login"
                className={
                    ({ isActive }) => `
                    px-4 py-2 font-semibold rounded-lg transition duration-300
                    ${isActive ? 'text-blue-600' : 'text-black'}
                    `
                }>
                Login</NavLink>
        </div>
    );
};

export default Header;