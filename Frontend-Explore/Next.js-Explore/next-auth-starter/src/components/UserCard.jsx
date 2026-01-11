'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const UserCard = () => {
    const session = useSession()
    console.log(session)
    return (
        <div className='font-bold'>
            <div>
                <h2>{JSON.stringify(session)}</h2>
            </div>
        </div>
    );
};

export default UserCard;