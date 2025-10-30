import React from 'react';
import Home from './Home';
import { Link, Outlet } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <Link to='/'>Home</Link>
            <Link to='/banner'>Banner</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users2'>Users 2</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;