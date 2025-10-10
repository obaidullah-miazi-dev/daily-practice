import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    
    return (
        <div>
            <h2>This is users page</h2>
            {
                users.map(user => <div> 
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.phone}</h3>
                    <Link to={`/users/${user.id}`}>users details</Link>
                </div>)
            }
        </div>
    );
};

export default Users;