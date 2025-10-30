import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div>
            <h2 className='font-bold mb-3 text-lg'>Find Us On</h2>
            <div className="join join-vertical w-full justify-items-start">
                <button className="btn join-item justify-start bg-base-100"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start bg-base-100"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start bg-base-100"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;