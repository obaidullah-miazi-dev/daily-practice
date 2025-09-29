import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const user = useLoaderData()
    // console.log(user);
    return (
        <div>
            {/* <h3>users details here</h3> */}
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
        </div>
    );
};

export default UsersDetails;