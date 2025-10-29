import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const {_id,name,email} = user
    console.log(_id,name,email);
    return (
        <div>
            <h2>User Details</h2>
            <div className='box'>
                <p>ID: {_id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default UserDetails;