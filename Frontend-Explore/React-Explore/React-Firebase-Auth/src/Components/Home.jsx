import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Home = () => {
    const userInfo = use(AuthContext)
    console.log(userInfo);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;