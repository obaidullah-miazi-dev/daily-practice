import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h2>This is users page</h2>
            {
                users.map(user => <div> 
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.phone}</h3>
                </div>)
            }
        </div>
    );
};

export default Users;